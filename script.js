// =============================================
// Flexbox Pond — Complete Game Engine
// =============================================

// =============================================
// Level Definitions (24 levels)
// =============================================
const LEVELS = [
  {
    id: 1, title: "Flex End",
    description: "Move the frog to the lily pad on the right side of the pond.",
    hint: "Use justify-content: flex-end to push items to the end.",
    answer: { "justify-content": "flex-end" },
    frogs: [{ color: "#4ecdc4" }],
    lilyPads: [{ x: "82%", y: "38%" }],
    pondStyle: {}
  },
  {
    id: 2, title: "Center",
    description: "Move the frog to the center lily pad.",
    hint: "Use justify-content: center to center items.",
    answer: { "justify-content": "center" },
    frogs: [{ color: "#f87171" }],
    lilyPads: [{ x: "48%", y: "38%" }],
    pondStyle: {}
  },
  {
    id: 3, title: "Space Around",
    description: "Move the frogs to their lily pads with equal space around.",
    hint: "Use justify-content: space-around.",
    answer: { "justify-content": "space-around" },
    frogs: [{ color: "#4ecdc4" }, { color: "#fbbf24" }, { color: "#f87171" }],
    lilyPads: [{ x: "12%", y: "38%" }, { x: "48%", y: "38%" }, { x: "84%", y: "38%" }],
    pondStyle: {}
  },
  {
    id: 4, title: "Space Between",
    description: "Move the frogs to the lily pads at the edges with space between.",
    hint: "Use justify-content: space-between to push to edges.",
    answer: { "justify-content": "space-between" },
    frogs: [{ color: "#a78bfa" }, { color: "#4ecdc4" }],
    lilyPads: [{ x: "2%", y: "38%" }, { x: "82%", y: "38%" }],
    pondStyle: {}
  },
  {
    id: 5, title: "Space Evenly",
    description: "Move the frogs so they are evenly spaced across the pond.",
    hint: "Use justify-content: space-evenly for equal spacing.",
    answer: { "justify-content": "space-evenly" },
    frogs: [{ color: "#f87171" }, { color: "#fbbf24" }, { color: "#4ecdc4" }],
    lilyPads: [{ x: "10%", y: "38%" }, { x: "48%", y: "38%" }, { x: "86%", y: "38%" }],
    pondStyle: {}
  },
  {
    id: 6, title: "Align End",
    description: "Move the frog to the lily pad at the bottom of the pond.",
    hint: "Use align-items: flex-end to push items to the bottom.",
    answer: { "align-items": "flex-end" },
    frogs: [{ color: "#fbbf24" }],
    lilyPads: [{ x: "3%", y: "62%" }],
    pondStyle: { minHeight: "260px" }
  },
  {
    id: 7, title: "Align Center",
    description: "Move the frog to the vertically centered lily pad.",
    hint: "Use align-items: center to center on cross axis.",
    answer: { "align-items": "center" },
    frogs: [{ color: "#a78bfa" }],
    lilyPads: [{ x: "3%", y: "34%" }],
    pondStyle: { minHeight: "260px" }
  },
  {
    id: 8, title: "Corner",
    description: "Move the frog to the lily pad in the bottom-right corner.",
    hint: "Combine justify-content and align-items.",
    answer: { "justify-content": "flex-end", "align-items": "flex-end" },
    frogs: [{ color: "#4ecdc4" }],
    lilyPads: [{ x: "82%", y: "62%" }],
    pondStyle: { minHeight: "260px" }
  },
  {
    id: 9, title: "Row Reverse",
    description: "Move the frogs so they appear in reverse order.",
    hint: "Use flex-direction: row-reverse.",
    answer: { "flex-direction": "row-reverse" },
    frogs: [{ color: "#4ecdc4" }, { color: "#fbbf24" }, { color: "#f87171" }],
    lilyPads: [{ x: "82%", y: "38%" }, { x: "48%", y: "38%" }, { x: "14%", y: "38%" }],
    pondStyle: {}
  },
  {
    id: 10, title: "Column",
    description: "Move the frogs to the lily pads stacked vertically.",
    hint: "Use flex-direction: column to stack items.",
    answer: { "flex-direction": "column" },
    frogs: [{ color: "#f87171" }, { color: "#fbbf24" }, { color: "#4ecdc4" }],
    lilyPads: [{ x: "4%", y: "6%" }, { x: "4%", y: "40%" }, { x: "4%", y: "74%" }],
    pondStyle: { minHeight: "260px" }
  },
  {
    id: 11, title: "Column Reverse",
    description: "Move the frogs to lily pads in reverse vertical order.",
    hint: "Use flex-direction: column-reverse.",
    answer: { "flex-direction": "column-reverse" },
    frogs: [{ color: "#a78bfa" }, { color: "#4ecdc4" }, { color: "#fbbf24" }],
    lilyPads: [{ x: "4%", y: "74%" }, { x: "4%", y: "40%" }, { x: "4%", y: "6%" }],
    pondStyle: { minHeight: "260px" }
  },
  {
    id: 12, title: "Wrap",
    description: "Move the frogs to lily pads arranged in two rows.",
    hint: "Use flex-wrap: wrap to allow items to wrap.",
    answer: { "flex-wrap": "wrap" },
    frogs: [
      { color: "#4ecdc4" }, { color: "#f87171" }, { color: "#fbbf24" },
      { color: "#a78bfa" }, { color: "#fb923c" }
    ],
    lilyPads: [
      { x: "5%", y: "10%" }, { x: "35%", y: "10%" }, { x: "65%", y: "10%" },
      { x: "5%", y: "58%" }, { x: "35%", y: "58%" }
    ],
    pondStyle: { minHeight: "220px" }
  },
  {
    id: 13, title: "Wrap + Space",
    description: "Wrap the frogs and space them evenly across two rows.",
    hint: "Combine flex-wrap: wrap with justify-content: space-evenly.",
    answer: { "flex-wrap": "wrap", "justify-content": "space-evenly" },
    frogs: [
      { color: "#f87171" }, { color: "#a78bfa" }, { color: "#4ecdc4" },
      { color: "#fbbf24" }, { color: "#fb923c" }
    ],
    lilyPads: [
      { x: "12%", y: "10%" }, { x: "48%", y: "10%" }, { x: "84%", y: "10%" },
      { x: "28%", y: "58%" }, { x: "68%", y: "58%" }
    ],
    pondStyle: { minHeight: "220px" }
  },
  {
    id: 14, title: "Gap",
    description: "Move the frogs to lily pads with proper spacing between them.",
    hint: "Use gap: 20px to add space between items.",
    answer: { "gap": "20px" },
    frogs: [{ color: "#4ecdc4" }, { color: "#f87171" }, { color: "#fbbf24" }],
    lilyPads: [{ x: "18%", y: "38%" }, { x: "48%", y: "38%" }, { x: "78%", y: "38%" }],
    pondStyle: {}
  },
  {
    id: 15, title: "Center Column",
    description: "Stack the frogs vertically and center them horizontally.",
    hint: "Combine flex-direction: column with align-items: center.",
    answer: { "flex-direction": "column", "align-items": "center" },
    frogs: [{ color: "#f87171" }, { color: "#a78bfa" }, { color: "#4ecdc4" }],
    lilyPads: [{ x: "46%", y: "6%" }, { x: "46%", y: "40%" }, { x: "46%", y: "74%" }],
    pondStyle: { minHeight: "260px" }
  },
  {
    id: 16, title: "Reverse + Space",
    description: "Reverse the row direction and space the frogs evenly.",
    hint: "Combine flex-direction: row-reverse with justify-content: space-evenly.",
    answer: { "flex-direction": "row-reverse", "justify-content": "space-evenly" },
    frogs: [{ color: "#4ecdc4" }, { color: "#fbbf24" }, { color: "#f87171" }, { color: "#a78bfa" }],
    lilyPads: [{ x: "84%", y: "38%" }, { x: "60%", y: "38%" }, { x: "36%", y: "38%" }, { x: "12%", y: "38%" }],
    pondStyle: {}
  },
  {
    id: 17, title: "Wrap Gap",
    description: "Wrap the frogs and add gap between them.",
    hint: "Combine flex-wrap: wrap with gap.",
    answer: { "flex-wrap": "wrap", "gap": "16px" },
    frogs: [
      { color: "#f87171" }, { color: "#fbbf24" }, { color: "#4ecdc4" },
      { color: "#a78bfa" }, { color: "#fb923c" }, { color: "#34d399" }
    ],
    lilyPads: [
      { x: "8%", y: "10%" }, { x: "42%", y: "10%" }, { x: "76%", y: "10%" },
      { x: "8%", y: "58%" }, { x: "42%", y: "58%" }, { x: "76%", y: "58%" }
    ],
    pondStyle: { minHeight: "220px" }
  },
  {
    id: 18, title: "Column End",
    description: "Stack frogs vertically and align them to the right.",
    hint: "Combine flex-direction: column with align-items: flex-end.",
    answer: { "flex-direction": "column", "align-items": "flex-end" },
    frogs: [{ color: "#a78bfa" }, { color: "#f87171" }, { color: "#4ecdc4" }],
    lilyPads: [{ x: "80%", y: "6%" }, { x: "80%", y: "40%" }, { x: "80%", y: "74%" }],
    pondStyle: { minHeight: "260px" }
  },
  {
    id: 19, title: "Wrap Center",
    description: "Wrap the frogs and center them horizontally.",
    hint: "Combine flex-wrap: wrap with justify-content: center.",
    answer: { "flex-wrap": "wrap", "justify-content": "center" },
    frogs: [
      { color: "#4ecdc4" }, { color: "#f87171" }, { color: "#fbbf24" },
      { color: "#a78bfa" }, { color: "#fb923c" }
    ],
    lilyPads: [
      { x: "22%", y: "10%" }, { x: "48%", y: "10%" }, { x: "74%", y: "10%" },
      { x: "35%", y: "58%" }, { x: "61%", y: "58%" }
    ],
    pondStyle: { minHeight: "220px" }
  },
  {
    id: 20, title: "Col Reverse Center",
    description: "Reverse the column and center the frogs horizontally.",
    hint: "Combine flex-direction: column-reverse with align-items: center.",
    answer: { "flex-direction": "column-reverse", "align-items": "center" },
    frogs: [{ color: "#f87171" }, { color: "#fbbf24" }, { color: "#4ecdc4" }],
    lilyPads: [{ x: "46%", y: "74%" }, { x: "46%", y: "40%" }, { x: "46%", y: "6%" }],
    pondStyle: { minHeight: "260px" }
  },
  {
    id: 21, title: "Wrap + Align",
    description: "Wrap frogs and align them to the top with gap spacing.",
    hint: "Combine flex-wrap: wrap, align-content: flex-start, and gap.",
    answer: { "flex-wrap": "wrap", "align-content": "flex-start", "gap": "12px" },
    frogs: [
      { color: "#4ecdc4" }, { color: "#f87171" }, { color: "#fbbf24" },
      { color: "#a78bfa" }, { color: "#fb923c" }, { color: "#34d399" }
    ],
    lilyPads: [
      { x: "8%", y: "8%" }, { x: "42%", y: "8%" }, { x: "76%", y: "8%" },
      { x: "8%", y: "50%" }, { x: "42%", y: "50%" }, { x: "76%", y: "50%" }
    ],
    pondStyle: { minHeight: "240px" }
  },
  {
    id: 22, title: "Triple Stack",
    description: "Reverse the column, wrap items, and center them with gap.",
    hint: "Use column-reverse, flex-wrap: wrap, align-items: center, and gap.",
    answer: {
      "flex-direction": "column-reverse",
      "flex-wrap": "wrap",
      "align-items": "center",
      "gap": "10px"
    },
    frogs: [
      { color: "#f87171" }, { color: "#fbbf24" }, { color: "#4ecdc4" },
      { color: "#a78bfa" }, { color: "#fb923c" }
    ],
    lilyPads: [
      { x: "22%", y: "72%" }, { x: "48%", y: "72%" }, { x: "74%", y: "72%" },
      { x: "35%", y: "28%" }, { x: "61%", y: "28%" }
    ],
    pondStyle: { minHeight: "260px" }
  },
  {
    id: 23, title: "Perfect Grid",
    description: "Wrap frogs, space evenly, center align rows, and add gap.",
    hint: "Use flex-wrap, justify-content, align-content, and gap.",
    answer: {
      "flex-wrap": "wrap",
      "justify-content": "space-evenly",
      "align-content": "center",
      "gap": "12px"
    },
    frogs: [
      { color: "#4ecdc4" }, { color: "#f87171" }, { color: "#fbbf24" },
      { color: "#a78bfa" }, { color: "#fb923c" }, { color: "#34d399" }
    ],
    lilyPads: [
      { x: "12%", y: "20%" }, { x: "48%", y: "20%" }, { x: "84%", y: "20%" },
      { x: "12%", y: "62%" }, { x: "48%", y: "62%" }, { x: "84%", y: "62%" }
    ],
    pondStyle: { minHeight: "260px" }
  },
  {
    id: 24, title: "Master Challenge",
    description: "Column-reverse, wrap, center align, space between rows with gap. You are the Flexbox Master!",
    hint: "Use column-reverse, wrap, align-items: center, justify-content: space-between, and gap.",
    answer: {
      "flex-direction": "column-reverse",
      "flex-wrap": "wrap",
      "align-items": "center",
      "justify-content": "space-between",
      "gap": "16px"
    },
    frogs: [
      { color: "#f87171" }, { color: "#fbbf24" }, { color: "#4ecdc4" },
      { color: "#a78bfa" }, { color: "#fb923c" }, { color: "#34d399" }
    ],
    lilyPads: [
      { x: "15%", y: "72%" }, { x: "50%", y: "72%" }, { x: "85%", y: "72%" },
      { x: "15%", y: "12%" }, { x: "50%", y: "12%" }, { x: "85%", y: "12%" }
    ],
    pondStyle: { minHeight: "280px" }
  }
];

// =============================================
// State
// =============================================
let currentLevel = 0;
const completedLevels = new Set();
let attemptCounts = {};
let currentUser = null;
let userData = null;
let levelComplete = false;

// =============================================
// DOM References
// =============================================
const $ = (id) => document.getElementById(id);

const $authScreen = $("authScreen");
const $gameScreen = $("gameScreen");
const $loginForm = $("loginForm");
const $registerForm = $("registerForm");
const $authError = $("authError");

const $pond = $("pond");
const $frogs = $("frogs");
const $lilyPads = $("lilyPads");
const $codeEditor = $("codeEditor");
const $lineNumbers = $("lineNumbers");
const $levelBadge = $("levelBadge");
const $levelTitle = $("levelTitle");
const $levelDescription = $("levelDescription");
const $progressFill = $("progressFill");
const $hintBox = $("hintBox");
const $hintText = $("hintText");
const $hintToggle = $("hintToggle");
const $attemptsCount = $("attemptsCount");
const $errorMsg = $("errorMsg");
const $btnRun = $("btnRun");
const $btnReset = $("btnReset");
const $btnNext = $("btnNext");
const $btnPrev = $("btnPrev");
const $btnNextNav = $("btnNextNav");
const $levelDots = $("levelDots");
const $successOverlay = $("successOverlay");
const $successMessage = $("successMessage");
const $btnNextLarge = $("btnNextLarge");
const $userName = $("userName");
const $btnLogout = $("btnLogout");
const $toast = $("toast");

// =============================================
// Toast Notifications
// =============================================
let toastTimer = null;
function showToast(message, type = "info") {
  clearTimeout(toastTimer);
  $toast.textContent = message;
  $toast.className = "toast " + type;
  toastTimer = setTimeout(() => { $toast.className = "toast hidden"; }, 3000);
}

// =============================================
// Auth System
// =============================================
function initAuth() {
  // Toggle forms
  $("showRegister").addEventListener("click", (e) => {
    e.preventDefault();
    $loginForm.classList.add("hidden");
    $registerForm.classList.remove("hidden");
    $authError.classList.add("hidden");
  });

  $("showLogin").addEventListener("click", (e) => {
    e.preventDefault();
    $registerForm.classList.add("hidden");
    $loginForm.classList.remove("hidden");
    $authError.classList.add("hidden");
  });

  // Login
  $loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = $("loginEmail").value.trim();
    const pass = $("loginPassword").value;
    const btn = $("btnLogin");

    showAuthLoading(btn, true);
    hideAuthError();

    try {
      await loginUser(email, pass);
    } catch (err) {
      console.error("Login error:", err);
      showAuthError(getAuthErrorMessage(err));
      showAuthLoading(btn, false);
    }
  });

  // Register
  $registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = $("regName").value.trim();
    const email = $("regEmail").value.trim();
    const pass = $("regPassword").value;
    const btn = $("btnRegister");

    if (pass.length < 6) {
      showAuthError("Password must be at least 6 characters.");
      return;
    }

    showAuthLoading(btn, true);
    hideAuthError();

    try {
      await registerUser(email, pass, name);
    } catch (err) {
      console.error("Register error:", err);
      showAuthError(getAuthErrorMessage(err));
      showAuthLoading(btn, false);
    }
  });

  // Logout
  $btnLogout.addEventListener("click", async () => {
    try {
      await logoutUser();
    } catch (e) {
      console.error("Logout error:", e);
    }
  });

  // Auth state listener (auto-login)
  onAuthChange(async (user) => {
    if (user) {
      currentUser = user;
      try {
        userData = await loadProgress(user.uid);
      } catch (e) {
        console.warn("loadProgress failed:", e);
        userData = null;
      }
      if (!userData) {
        userData = {
          displayName: user.displayName || (user.email || "").split("@")[0] || "Player",
          email: user.email || "",
          completedLevels: [],
          currentLevel: 0,
          attempts: {},
          totalAttempts: 0,
          isVIP: false
        };
        try {
          await saveProgress(user.uid, userData);
        } catch (e) {
          console.warn("saveProgress failed:", e);
        }
      }
      showGame();
    } else {
      currentUser = null;
      userData = null;
      showAuth();
    }
  });
}

function showAuth() {
  $authScreen.classList.remove("hidden");
  $gameScreen.classList.add("hidden");
}

function showGame() {
  $authScreen.classList.add("hidden");
  $gameScreen.classList.remove("hidden");

  // Set user name
  const name = userData?.displayName || currentUser?.email?.split("@")[0] || "Player";
  $userName.textContent = name;

  // Restore progress
  if (userData?.completedLevels) {
    userData.completedLevels.forEach((lvl) => completedLevels.add(lvl));
  }
  if (userData?.attempts) {
    attemptCounts = { ...userData.attempts };
  }

  // Start at current level
  const startLevel = userData?.currentLevel || 0;
  buildLevelDots();
  loadLevel(Math.min(startLevel, LEVELS.length - 1));
}

function showAuthLoading(btn, loading) {
  const text = btn.querySelector(".btn-text");
  const spinner = btn.querySelector(".btn-spinner");
  if (loading) {
    text.textContent = "Please wait...";
    spinner.classList.remove("hidden");
    btn.disabled = true;
  } else {
    text.textContent = btn === $("btnLogin") ? "Log In" : "Create Account";
    spinner.classList.add("hidden");
    btn.disabled = false;
  }
}

function showAuthError(msg) {
  $authError.textContent = msg;
  $authError.classList.remove("hidden");
}

function hideAuthError() {
  $authError.classList.add("hidden");
}

function getAuthErrorMessage(err) {
  // err can be an Error object or a string code
  const code = typeof err === "string" ? err : err?.code || "";
  const message = typeof err === "object" ? err?.message || "" : "";

  const known = {
    "auth/user-not-found": "No account found with this email.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/email-already-in-use": "An account with this email already exists.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/weak-password": "Password must be at least 6 characters.",
    "auth/too-many-requests": "Too many attempts. Please wait a moment.",
    "auth/invalid-credential": "Invalid email or password. Check your email and password.",
    "auth/network-request-failed": "Network error. Check your internet connection.",
    "auth/operation-not-allowed": "This sign-in method is not enabled. Check Firebase console → Authentication → Sign-in method.",
    "permission-denied": "Firestore permission denied. Check your Firestore security rules.",
  };

  if (known[code]) return known[code];
  if (message) return message;
  if (code) return `Error: ${code}`;
  return "Something went wrong. Check the console for details.";
}

// =============================================
// Save progress to Firestore
// =============================================
async function saveUserProgress() {
  if (!currentUser) return;
  try {
    await saveProgress(currentUser.uid, {
      completedLevels: Array.from(completedLevels),
      currentLevel: currentLevel,
      attempts: attemptCounts,
      totalAttempts: Object.values(attemptCounts).reduce((a, b) => a + b, 0)
    });
  } catch (e) {
    console.warn("Could not save progress:", e);
  }
}

// =============================================
// Level Dots
// =============================================
function buildLevelDots() {
  $levelDots.innerHTML = "";
  LEVELS.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "level-dot";
    dot.title = `Level ${i + 1}`;
    dot.addEventListener("click", () => loadLevel(i));
    $levelDots.appendChild(dot);
  });
}

function updateLevelDots() {
  const dots = $levelDots.querySelectorAll(".level-dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentLevel);
    dot.classList.toggle("completed", completedLevels.has(i));
  });
}

function updateProgress() {
  const pct = (completedLevels.size / LEVELS.length) * 100;
  $progressFill.style.width = pct + "%";
}

// =============================================
// Load Level
// =============================================
function loadLevel(index) {
  currentLevel = index;
  levelComplete = false;
  const level = LEVELS[index];

  // Update header
  $levelBadge.textContent = `Level ${index + 1}`;
  $levelTitle.textContent = level.title;
  $levelDescription.textContent = level.description;
  $hintText.textContent = level.hint;
  $hintBox.classList.remove("visible");
  $successOverlay.classList.remove("visible");
  $errorMsg.classList.add("hidden");

  // Reset attempts display
  const attempts = attemptCounts[index] || 0;
  updateAttemptsUI(attempts);

  // Pre-fill editor with .pond { }
  $codeEditor.value = ".pond {\n  \n}";
  // Place cursor inside the braces (line 2, after indent)
  $codeEditor.setSelectionRange(9, 9);
  $codeEditor.focus();
  updateLineNumbers();

  // Reset pond
  $pond.style.cssText = "";
  if (level.pondStyle) {
    Object.entries(level.pondStyle).forEach(([k, v]) => {
      $pond.style[k] = v;
    });
  }

  // Reset frogs container
  $frogs.style.cssText = "";
  $frogs.className = "frogs";

  // Draw lily pads
  $lilyPads.innerHTML = "";
  level.lilyPads.forEach((pad) => {
    const el = document.createElement("div");
    el.className = "lily-pad";
    el.style.left = pad.x;
    el.style.top = pad.y;
    $lilyPads.appendChild(el);
  });

  // Draw frogs
  $frogs.innerHTML = "";
  level.frogs.forEach((frog) => {
    const el = document.createElement("div");
    el.className = "frog";
    el.style.background = `radial-gradient(circle at 38% 32%, ${lighten(frog.color, 30)}, ${frog.color})`;
    el.style.setProperty("--frog-color", frog.color);
    el.style.boxShadow = `0 3px 14px ${frog.color}44, inset 0 1px 0 rgba(255,255,255,0.25)`;

    const emoji = document.createElement("span");
    emoji.className = "frog-emoji";
    emoji.textContent = "🐸";
    el.appendChild(emoji);
    $frogs.appendChild(el);
  });

  // Button state
  $btnNext.disabled = !completedLevels.has(index);
  $btnPrev.style.visibility = index === 0 ? "hidden" : "visible";
  $btnNextNav.style.visibility = index === LEVELS.length - 1 ? "hidden" : "visible";

  updateLevelDots();
  updateProgress();
}

// =============================================
// Attempts UI
// =============================================
function updateAttemptsUI(attempts) {
  const remaining = Math.max(0, 5 - attempts);
  $attemptsCount.textContent = `${attempts} / 5`;
  $attemptsCount.classList.toggle("maxed", attempts >= 5);

  if (attempts >= 5) {
    $hintToggle.disabled = false;
  } else {
    $hintToggle.disabled = true;
    $hintBox.classList.remove("visible");
  }
}

// =============================================
// Parse CSS Input
// Handles: .pond { justify-content: flex-end; } or bare property: value;
// =============================================
function parseCSSInput(code) {
  code = code.replace(/\/\*[\s\S]*?\*\//g, "");
  const props = {};

  // Match property: value pairs (with or without selector block)
  const propRegex = /([\w-]+)\s*:\s*([^;}{\n]+);?/g;
  let m;
  while ((m = propRegex.exec(code)) !== null) {
    const prop = m[1].trim().toLowerCase();
    const val = m[2].trim().toLowerCase();
    // Skip non-CSS properties (like font-family values that have colons)
    if (isValidCSSProperty(prop)) {
      props[prop] = val;
    }
  }
  return props;
}

function isValidCSSProperty(prop) {
  const valid = [
    "display", "flex-direction", "flex-wrap", "flex-flow", "flex-grow",
    "flex-shrink", "flex-basis", "flex", "justify-content", "align-items",
    "align-self", "align-content", "order", "gap", "row-gap", "column-gap",
    "width", "height", "min-height", "max-height", "min-width", "max-width",
    "padding", "margin", "background", "color", "font-size", "border"
  ];
  return valid.includes(prop);
}

// =============================================
// Apply CSS to Frogs (REAL-TIME)
// =============================================
function applyCSSToFrogs(code) {
  const props = parseCSSInput(code);

  // Reset frog container
  $frogs.style.cssText = "";
  $frogs.className = "frogs";

  // Apply each property to the frogs container
  Object.entries(props).forEach(([k, v]) => {
    $frogs.style.setProperty(k, v);
  });
}

// =============================================
// Run Code
// =============================================
function runCode() {
  const code = $codeEditor.value.trim();
  if (!code) return;

  if (levelComplete) return;

  const level = LEVELS[currentLevel];
  const props = parseCSSInput(code);

  // Apply CSS to frogs container
  applyCSSToFrogs(code);

  // Hop animation
  const frogEls = $frogs.querySelectorAll(".frog");
  frogEls.forEach((f) => {
    f.classList.remove("hopping", "correct");
    void f.offsetWidth;
    f.classList.add("hopping");
    setTimeout(() => f.classList.remove("hopping"), 600);
  });

  // Validate
  setTimeout(() => {
    if (validate(props)) {
      onLevelComplete();
    } else {
      onWrongAnswer();
    }
  }, 500);
}

// =============================================
// Validate
// =============================================
function validate(userProps) {
  const level = LEVELS[currentLevel];
  const containsProps = new Set(["gap", "row-gap", "column-gap"]);

  for (const [prop, expected] of Object.entries(level.answer)) {
    const userVal = userProps[prop] || "";
    if (containsProps.has(prop)) {
      if (!userVal.includes(expected)) return false;
    } else {
      if (userVal !== expected) return false;
    }
  }
  return true;
}

// =============================================
// Wrong Answer
// =============================================
function onWrongAnswer() {
  const levelIdx = currentLevel;
  attemptCounts[levelIdx] = (attemptCounts[levelIdx] || 0) + 1;
  updateAttemptsUI(attemptCounts[levelIdx]);

  // Show error
  $errorMsg.textContent = getErrorMessage(attemptCounts[levelIdx]);
  $errorMsg.classList.remove("hidden");
  setTimeout(() => $errorMsg.classList.add("hidden"), 3000);

  // Shake editor
  const wrapper = document.querySelector(".editor-wrapper");
  wrapper.style.animation = "none";
  void wrapper.offsetWidth;
  wrapper.style.animation = "shake 0.4s ease";
  setTimeout(() => wrapper.style.animation = "", 400);

  // Reset frog positions
  $frogs.style.cssText = "";
  $frogs.className = "frogs";

  // Save progress
  saveUserProgress();
}

function getErrorMessage(attempts) {
  const messages = [
    "Not quite. Check the CSS property and value carefully.",
    "Almost! Make sure the property name and value are correct.",
    "That's not right. Try a different approach.",
    "Keep trying! Double-check the spelling.",
    "Wrong answer. Hint will be available after this attempt."
  ];
  return messages[Math.min(attempts - 1, messages.length - 1)];
}

// =============================================
// Level Complete
// =============================================
function onLevelComplete() {
  levelComplete = true;
  completedLevels.add(currentLevel);
  updateLevelDots();
  updateProgress();
  $btnNext.disabled = false;
  $errorMsg.classList.add("hidden");

  // Frog celebration
  const frogEls = $frogs.querySelectorAll(".frog");
  frogEls.forEach((f, i) => {
    setTimeout(() => f.classList.add("correct"), i * 120);
  });

  // Glow lily pads
  const pads = $lilyPads.querySelectorAll(".lily-pad");
  pads.forEach((p, i) => {
    setTimeout(() => p.classList.add("active"), i * 120);
  });

  // Save progress
  saveUserProgress();

  // Show success
  setTimeout(() => {
    $successOverlay.classList.add("visible");
    if (currentLevel < LEVELS.length - 1) {
      $successMessage.textContent = `Level ${currentLevel + 1} completed!`;
    } else {
      $successMessage.textContent = "All 24 levels done! You are the Flexbox Master!";
      document.querySelector(".success-icon").textContent = "🏆";
    }
    spawnConfetti();
  }, 800);
}

// =============================================
// Reset Level
// =============================================
function resetLevel() {
  $codeEditor.value = ".pond {\n  \n}";
  $codeEditor.setSelectionRange(9, 9);
  $frogs.style.cssText = "";
  $frogs.className = "frogs";
  $errorMsg.classList.add("hidden");
  $hintBox.classList.remove("visible");
  updateLineNumbers();
  loadLevel(currentLevel);
}

// =============================================
// Next Level
// =============================================
function nextLevel() {
  if (currentLevel < LEVELS.length - 1) {
    loadLevel(currentLevel + 1);
  }
}

// =============================================
// Line Numbers
// =============================================
function updateLineNumbers() {
  const count = ($codeEditor.value || "").split("\n").length;
  $lineNumbers.innerHTML = Array.from({ length: Math.max(count, 8) }, (_, i) =>
    `<div>${i + 1}</div>`
  ).join("");
}

// =============================================
// Real-time CSS Application
// =============================================
function onEditorInput() {
  updateLineNumbers();
  const code = $codeEditor.value;
  if (code.trim()) {
    applyCSSToFrogs(code);
  } else {
    $frogs.style.cssText = "";
    $frogs.className = "frogs";
  }
}

// =============================================
// Confetti
// =============================================
function spawnConfetti() {
  const colors = ["#4ecdc4", "#f87171", "#fbbf24", "#a78bfa", "#4ade80", "#fb923c", "#34d399"];
  for (let i = 0; i < 50; i++) {
    const el = document.createElement("div");
    el.className = "confetti-piece";
    el.style.left = Math.random() * 100 + "vw";
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.width = (Math.random() * 8 + 4) + "px";
    el.style.height = (Math.random() * 8 + 4) + "px";
    el.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    el.style.animation = `confettiFall ${Math.random() * 1.5 + 1}s ease-in ${Math.random() * 0.6}s forwards`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  }
}

// =============================================
// Helpers
// =============================================
function lighten(hex, amt) {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, (num >> 16) + amt);
  const g = Math.min(255, ((num >> 8) & 0xff) + amt);
  const b = Math.min(255, (num & 0xff) + amt);
  return `rgb(${r},${g},${b})`;
}

// =============================================
// Event Listeners
// =============================================
$btnRun.addEventListener("click", runCode);
$btnReset.addEventListener("click", resetLevel);
$btnNext.addEventListener("click", nextLevel);
$btnNextLarge.addEventListener("click", () => {
  $successOverlay.classList.remove("visible");
  nextLevel();
});

$btnPrev.addEventListener("click", () => {
  if (currentLevel > 0) loadLevel(currentLevel - 1);
});
$btnNextNav.addEventListener("click", () => {
  if (currentLevel < LEVELS.length - 1) loadLevel(currentLevel + 1);
});

$hintToggle.addEventListener("click", () => {
  $hintBox.classList.toggle("visible");
});

$codeEditor.addEventListener("input", onEditorInput);
$codeEditor.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
    const s = $codeEditor.selectionStart;
    const end = $codeEditor.selectionEnd;
    $codeEditor.value = $codeEditor.value.substring(0, s) + "  " + $codeEditor.value.substring(end);
    $codeEditor.selectionStart = $codeEditor.selectionEnd = s + 2;
    onEditorInput();
  }
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    e.preventDefault();
    runCode();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    $successOverlay.classList.remove("visible");
  }
});

// =============================================
// Initialize
// =============================================
initAuth();
