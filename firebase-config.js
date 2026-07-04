// =============================================
// Firebase Configuration & Helpers
// =============================================
//
// HOW TO ENABLE FIREBASE:
// 1. Go to https://console.firebase.google.com
// 2. Create project → Build → Web app → Register app
// 3. Copy the config below (replace placeholder values)
// 4. Authentication → Sign-in method → Email/Password → Enable
// 5. Firestore Database → Create database → Start in test mode
// 6. Firestore Rules → Publish:
//    rules_version = '2';
//    service cloud.firestore {
//      match /databases/{database}/documents {
//        match /users/{userId} {
//          allow read, write: if request.auth != null && request.auth.uid == userId;
//        }
//      }
//    }
//
// If config is placeholder → localStorage mode (works immediately, no Firebase needed)

const firebaseConfig = {
  apiKey: "AIzaSyD_PLACEHOLDER_REPLACE_ME",
  authDomain: "flexbox-pond.firebaseapp.com",
  projectId: "flexbox-pond",
  storageBucket: "flexbox-pond.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000"
};

// =============================================
// Global state
// =============================================
let firebaseAvailable = false;
let auth = null;   // Firebase auth instance (or null)
let db = null;     // Firebase Firestore instance (or null)
let _authCallback = null;  // For localStorage mode auth state
let _authUnsubscribe = null;  // Firebase unsubscribe function

// =============================================
// Initialize Firebase (or fallback)
// =============================================
function initFirebase() {
  try {
    const hasRealConfig = firebaseConfig.apiKey && !firebaseConfig.apiKey.includes("PLACEHOLDER");

    if (hasRealConfig && typeof firebase !== "undefined" && firebase.initializeApp) {
      firebase.initializeApp(firebaseConfig);
      auth = firebase.auth();
      db = firebase.firestore();
      firebaseAvailable = true;
      console.log("[FlexPond] Firebase connected.");
    } else {
      console.warn("[FlexPond] Firebase not configured. Using localStorage mode.");
      console.warn("[FlexPond] To enable: Edit firebase-config.js with real credentials.");
    }
  } catch (e) {
    console.warn("[FlexPond] Firebase init failed:", e.message);
    firebaseAvailable = false;
  }
}

// =============================================
// localStorage helpers (when Firebase is off)
// =============================================
const LS_USERS_KEY = "flexpond_users";
const LS_SESSION_KEY = "flexpond_session_uid";

function _getLocalUsers() {
  try { return JSON.parse(localStorage.getItem(LS_USERS_KEY) || "{}"); }
  catch { return {}; }
}

function _setLocalUsers(users) {
  localStorage.setItem(LS_USERS_KEY, JSON.stringify(users));
}

function _getLocalSession() {
  return localStorage.getItem(LS_SESSION_KEY) || null;
}

function _setLocalSession(uid) {
  if (uid) localStorage.setItem(LS_SESSION_KEY, uid);
  else localStorage.removeItem(LS_SESSION_KEY);
}

function _makeUID() {
  return "local_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
}

// Trigger auth callback for localStorage mode
function _fireAuthCallback(user) {
  if (_authCallback && !firebaseAvailable) {
    setTimeout(() => _authCallback(user), 0);
  }
}

// =============================================
// Register
// =============================================
async function registerUser(email, password, displayName) {
  email = (email || "").trim().toLowerCase();
  displayName = (displayName || "").trim();

  // --- Firebase mode ---
  if (firebaseAvailable) {
    const cred = await auth.createUserWithEmailAndPassword(email, password);

    // Update display name (fire-and-forget if fails)
    try { await cred.user.updateProfile({ displayName }); }
    catch (e) { console.warn("updateProfile failed:", e.message); }

    // Save to Firestore (fire-and-forget if fails)
    try {
      await db.collection("users").doc(cred.user.uid).set({
        displayName, email,
        completedLevels: [], currentLevel: 0,
        attempts: {}, totalAttempts: 0, isVIP: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    } catch (e) {
      console.warn("Firestore write failed:", e.message);
    }

    return cred.user;
  }

  // --- localStorage mode ---
  const users = _getLocalUsers();
  if (users[email]) {
    const err = new Error("An account with this email already exists.");
    err.code = "auth/email-already-in-use";
    throw err;
  }

  const uid = _makeUID();
  users[email] = {
    uid, email, displayName, password,
    completedLevels: [], currentLevel: 0,
    attempts: {}, totalAttempts: 0,
    isVIP: false, createdAt: Date.now()
  };
  _setLocalUsers(users);
  _setLocalSession(uid);

  // Return user-like object
  const userObj = { uid, email, displayName };

  // Manually trigger auth state change
  _fireAuthCallback(userObj);

  return userObj;
}

// =============================================
// Login
// =============================================
async function loginUser(email, password) {
  email = (email || "").trim().toLowerCase();

  // --- Firebase mode ---
  if (firebaseAvailable) {
    const cred = await auth.signInWithEmailAndPassword(email, password);
    return cred.user;
  }

  // --- localStorage mode ---
  const users = _getLocalUsers();
  const user = users[email];

  if (!user) {
    const err = new Error("No account found with this email.");
    err.code = "auth/user-not-found";
    throw err;
  }

  if (user.password !== password) {
    const err = new Error("Incorrect password. Please try again.");
    err.code = "auth/wrong-password";
    throw err;
  }

  _setLocalSession(user.uid);

  const userObj = { uid: user.uid, email: user.email, displayName: user.displayName };

  // Manually trigger auth state change
  _fireAuthCallback(userObj);

  return userObj;
}

// =============================================
// Logout
// =============================================
async function logoutUser() {
  // --- Firebase mode ---
  if (firebaseAvailable) {
    await auth.signOut();
    return;
  }

  // --- localStorage mode ---
  _setLocalSession(null);

  // Manually trigger auth state change (null = logged out)
  _fireAuthCallback(null);
}

// =============================================
// Auth state listener
// =============================================
function onAuthChange(callback) {
  _authCallback = callback;

  // --- Firebase mode ---
  if (firebaseAvailable) {
    _authUnsubscribe = auth.onAuthStateChanged(callback);
    return _authUnsubscribe;
  }

  // --- localStorage mode: check session immediately ---
  const uid = _getLocalSession();
  if (!uid) {
    // No session — call back with null right away
    setTimeout(() => callback(null), 0);
  } else {
    const users = _getLocalUsers();
    const found = Object.values(users).find(u => u.uid === uid);
    if (found) {
      setTimeout(() => callback({
        uid: found.uid,
        email: found.email,
        displayName: found.displayName
      }), 0);
    } else {
      _setLocalSession(null);
      setTimeout(() => callback(null), 0);
    }
  }

  // Return unsubscribe function
  return () => { _authCallback = null; };
}

// =============================================
// Save progress
// =============================================
async function saveProgress(uid, data) {
  // --- Firebase mode ---
  if (firebaseAvailable) {
    await db.collection("users").doc(uid).set(data, { merge: true });
    return;
  }

  // --- localStorage mode ---
  const users = _getLocalUsers();
  // Find user by uid
  const email = Object.keys(users).find(e => users[e].uid === uid);
  if (email && users[email]) {
    // Merge data into existing user
    Object.assign(users[email], data);
    _setLocalUsers(users);
  }
}

// =============================================
// Load progress
// =============================================
async function loadProgress(uid) {
  // --- Firebase mode ---
  if (firebaseAvailable) {
    const doc = await db.collection("users").doc(uid).get();
    if (doc.exists) return doc.data();
    return null;
  }

  // --- localStorage mode ---
  const users = _getLocalUsers();
  const email = Object.keys(users).find(e => users[e].uid === uid);
  const found = email ? users[email] : null;
  if (!found) return null;

  return {
    displayName: found.displayName || "",
    email: found.email || "",
    completedLevels: found.completedLevels || [],
    currentLevel: found.currentLevel || 0,
    attempts: found.attempts || {},
    totalAttempts: found.totalAttempts || 0,
    isVIP: found.isVIP || false
  };
}

// =============================================
// Initialize on load
// =============================================
initFirebase();
