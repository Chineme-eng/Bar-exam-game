/**
 * app.js — Order in the Court
 * Game logic: filters, shuffle, timer, answers, feedback, results, dark mode
 */

/* ═══════════════════════════
   STATE
═══════════════════════════ */
const state = {
  pool:           [],
  index:          0,
  correct:        0,
  wrong:          0,
  wrongItems:     [],
  timerEnabled:   true,
  timerInterval:  null,
  timeLeft:       0,
  answered:       false,
  filterTopic:    "all",
  filterDiff:     "all",
};

const TIMER_SECS        = { easy: 80, medium: 55, hard: 30 };
const RING_CIRC         = 2 * Math.PI * 17; // r=17 → ≈ 106.8
const $ = id            => document.getElementById(id);

/* ═══════════════════════════
   DARK MODE
═══════════════════════════ */
function initTheme() {
  const saved = localStorage.getItem("oitc-theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon(saved);

  $("theme-toggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next    = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("oitc-theme", next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  $("theme-icon").textContent = theme === "dark" ? "☀" : "☾";
}

/* ═══════════════════════════
   SCREENS
═══════════════════════════ */
const screens = {
  start:    $("screen-start"),
  question: $("screen-question"),
  results:  $("screen-results"),
};

function showScreen(name) {
  const incoming = screens[name];

  // Hide all
  Object.values(screens).forEach(s => {
    s.classList.remove("active", "visible");
    s.style.display = "none";
  });

  // Show target
  incoming.style.display = "flex";
  // Force reflow then animate in
  requestAnimationFrame(() => {
    incoming.classList.add("active");
    requestAnimationFrame(() => {
      incoming.classList.add("visible");
    });
  });

  window.scrollTo({ top: 0, behavior: "instant" });
}

/* ═══════════════════════════
   UTILITIES
═══════════════════════════ */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function cap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* ═══════════════════════════
   FILTERS
═══════════════════════════ */
function initPillGroup(groupId, stateKey) {
  const group = $(groupId);
  group.querySelectorAll(".pill").forEach(pill => {
    pill.addEventListener("click", () => {
      group.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state[stateKey] = pill.dataset.value;
      updateCount();
    });
  });
}

function filteredPool() {
  return QUESTIONS.filter(q => {
    const tMatch = state.filterTopic === "all" || q.topic === state.filterTopic;
    const dMatch = state.filterDiff  === "all" || q.difficulty === state.filterDiff;
    return tMatch && dMatch;
  });
}

function updateCount() {
  const n = filteredPool().length;
  $("question-count-preview").textContent =
    n === 0 ? "(no matches)" : `${n} question${n !== 1 ? "s" : ""}`;
}

/* ═══════════════════════════
   START SCREEN
═══════════════════════════ */
function initStart() {
  initPillGroup("topic-filter",      "filterTopic");
  initPillGroup("difficulty-filter", "filterDiff");
  updateCount();

  $("timer-toggle").addEventListener("change", e => {
    state.timerEnabled = e.target.checked;
  });

  $("btn-start").addEventListener("click", () => {
    const pool = filteredPool();
    if (pool.length === 0) {
      alert("No questions match those filters. Try a different combination.");
      return;
    }
    startQuiz(pool);
  });

  $("btn-quit").addEventListener("click", () => {
    clearTimer();
    showScreen("start");
  });

  $("btn-restart").addEventListener("click", () => {
    showScreen("start");
    updateCount();
  });

  $("btn-retry-wrong").addEventListener("click", () => {
    const pool = QUESTIONS.filter(q =>
      state.wrongItems.some(w => w.question === q.question)
    );
    if (pool.length > 0) startQuiz(pool);
  });

  $("btn-next").addEventListener("click", nextQuestion);

  // Choice buttons
  document.querySelectorAll(".choice").forEach(btn => {
    btn.addEventListener("click", () => {
      handleChoice(parseInt(btn.dataset.index, 10));
    });
  });
}

/* ═══════════════════════════
   QUIZ FLOW
═══════════════════════════ */
function startQuiz(pool) {
  state.pool       = shuffle(pool);
  state.index      = 0;
  state.correct    = 0;
  state.wrong      = 0;
  state.wrongItems = [];
  showScreen("question");
  renderQuestion();
}

function renderQuestion() {
  const q          = state.pool[state.index];
  state.answered   = false;

  // Counter
  $("q-counter").textContent = `${state.index + 1} / ${state.pool.length}`;

  // Badges
  $("q-topic-badge").textContent = q.topic;
  const db = $("q-diff-badge");
  db.textContent = cap(q.difficulty);
  db.className   = `q-badge diff-badge ${q.difficulty}`;

  // Question text
  $("q-text").textContent = q.question;

  // Choices
  document.querySelectorAll(".choice").forEach((btn, i) => {
    btn.textContent = q.choices[i];
    btn.className   = "choice";
    btn.disabled    = false;
  });

  // Live score
  refreshScore();

  // Hide feedback
  $("feedback-panel").hidden = true;

  // Timer
  clearTimer();
  if (state.timerEnabled) {
    $("timer-wrap").style.display = "flex";
    startTimer(q.difficulty);
  } else {
    $("timer-wrap").style.display = "none";
  }
}

function nextQuestion() {
  state.index++;
  if (state.index >= state.pool.length) {
    showResults();
  } else {
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

/* ═══════════════════════════
   TIMER
═══════════════════════════ */
function startTimer(difficulty) {
  const total       = TIMER_SECS[difficulty];
  state.timeLeft    = total;
  const ring        = $("ring-fg");
  const numEl       = $("timer-number");

  ring.classList.remove("urgent");
  ring.style.strokeDasharray  = RING_CIRC;
  ring.style.strokeDashoffset = 0;
  numEl.textContent           = total;

  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    numEl.textContent = state.timeLeft;

    const pct    = state.timeLeft / total;
    ring.style.strokeDashoffset = RING_CIRC * (1 - pct);

    if (state.timeLeft <= 10) ring.classList.add("urgent");
    if (state.timeLeft <= 0) {
      clearTimer();
      onTimeout();
    }
  }, 1000);
}

function clearTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function onTimeout() {
  if (state.answered) return;
  state.answered = true;
  state.wrong++;

  const q = state.pool[state.index];
  lockChoices();
  markReveal(q.answer);
  state.wrongItems.push({ question: q.question, correctText: q.choices[q.answer] });
  refreshScore();
  showFeedback("timeout", q);
}

/* ═══════════════════════════
   ANSWER HANDLING
═══════════════════════════ */
function handleChoice(idx) {
  if (state.answered) return;
  state.answered   = true;
  clearTimer();

  const q       = state.pool[state.index];
  const isRight = idx === q.answer;

  lockChoices();

  if (isRight) {
    document.querySelectorAll(".choice")[idx].classList.add("selected-correct");
    state.correct++;
  } else {
    document.querySelectorAll(".choice")[idx].classList.add("selected-wrong");
    markReveal(q.answer);
    state.wrong++;
    state.wrongItems.push({ question: q.question, correctText: q.choices[q.answer] });
  }

  refreshScore();
  showFeedback(isRight ? "correct" : "wrong", q);
}

function lockChoices() {
  document.querySelectorAll(".choice").forEach(b => (b.disabled = true));
}

function markReveal(idx) {
  document.querySelectorAll(".choice")[idx].classList.add("reveal-correct");
}

function refreshScore() {
  $("live-correct").textContent = state.correct;
  $("live-wrong").textContent   = state.wrong;
}

/* ═══════════════════════════
   FEEDBACK
═══════════════════════════ */
function showFeedback(type, q) {
  const verdict = $("feedback-verdict");

  if (type === "correct") {
    verdict.textContent = "Correct.";
    verdict.className   = "feedback-verdict correct";
  } else if (type === "wrong") {
    verdict.textContent = "Not quite.";
    verdict.className   = "feedback-verdict wrong";
  } else {
    verdict.textContent = "Time's up.";
    verdict.className   = "feedback-verdict timeout";
  }

  $("feedback-explanation").textContent = q.explanation;
  $("fun-fact-text").textContent        = q.funFact;

  const panel = $("feedback-panel");
  panel.hidden = false;
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ═══════════════════════════
   RESULTS
═══════════════════════════ */
function showResults() {
  clearTimer();
  showScreen("results");

  const total = state.pool.length;
  const pct   = total > 0 ? Math.round((state.correct / total) * 100) : 0;

  $("results-score").textContent = `${state.correct} / ${total}`;
  $("results-grade").textContent = gradeMessage(pct);

  buildBreakdown();

  const hasWrong = state.wrongItems.length > 0;
  $("wrong-review").hidden      = !hasWrong;
  $("btn-retry-wrong").hidden   = !hasWrong;

  if (hasWrong) buildMissedList();
}

function gradeMessage(pct) {
  if (pct === 100) return "Perfect. The bar is yours.";
  if (pct >= 90)   return "Outstanding — bar examiners would be impressed.";
  if (pct >= 75)   return "Solid — that's a passing bar score.";
  if (pct >= 60)   return "Good foundation. Keep drilling the weak spots.";
  if (pct >= 40)   return "Developing. Revisit the rules and go again.";
  return "Back to the books — you've got this.";
}

function buildBreakdown() {
  const container = $("results-breakdown");
  container.innerHTML = "";

  const total = state.pool.length;
  const pct   = total > 0 ? Math.round((state.correct / total) * 100) : 0;

  addCard(container, "Score", `${pct}%`);
  addCard(container, "Correct", state.correct);
  addCard(container, "Missed", state.wrong);

  const topics = [...new Set(state.pool.map(q => q.topic))];
  topics.forEach(topic => {
    const qs      = state.pool.filter(q => q.topic === topic);
    const correct = qs.filter(q => !state.wrongItems.some(w => w.question === q.question)).length;
    addCard(container, topic, `${correct}/${qs.length}`);
  });
}

function addCard(container, label, value) {
  const card = document.createElement("div");
  card.className = "r-card";
  card.innerHTML = `
    <span class="r-card-label">${label}</span>
    <span class="r-card-val">${value}</span>
  `;
  container.appendChild(card);
}

function buildMissedList() {
  const list = $("wrong-list");
  list.innerHTML = "";
  state.wrongItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "missed-item";
    div.innerHTML = `
      <p class="missed-q">${item.question}</p>
      <p class="missed-ans">✓ ${item.correctText}</p>
    `;
    list.appendChild(div);
  });
}

/* ═══════════════════════════
   BOOT
═══════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initStart();
  showScreen("start");
});
