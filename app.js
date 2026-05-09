/**
 * app.js — Bar Exam Quiz Game Logic
 *
 * Depends on:
 *   questions.js  → global QUESTIONS array
 *   style.css     → visual classes applied here
 *   index.html    → element IDs referenced here
 */

/* ═══════════════════════════════════════════
   STATE
═══════════════════════════════════════════ */
const state = {
  pool:          [],   // questions for this session
  index:         0,    // current question index
  correct:       0,
  wrong:         0,
  wrongItems:    [],   // { question, correctText } for review
  timerEnabled:  true,
  timerInterval: null,
  timeLeft:      0,
  answered:      false,
  retryMode:     false,

  // User filter selections
  filterTopic:      "all",
  filterDifficulty: "all",
};

/* ═══════════════════════════════════════════
   TIMER DURATIONS
═══════════════════════════════════════════ */
const TIMER_SECONDS = { easy: 80, medium: 55, hard: 30 };
const RING_CIRCUMFERENCE = 2 * Math.PI * 18; // r=18, ≈ 113.1

/* ═══════════════════════════════════════════
   DOM REFERENCES
═══════════════════════════════════════════ */
const $ = id => document.getElementById(id);

const screens = {
  start:    $("screen-start"),
  question: $("screen-question"),
  results:  $("screen-results"),
};

/* ═══════════════════════════════════════════
   SCREEN NAVIGATION
═══════════════════════════════════════════ */
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "instant" });
}

/* ═══════════════════════════════════════════
   UTILITY
═══════════════════════════════════════════ */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* ═══════════════════════════════════════════
   PILL FILTER GROUPS
═══════════════════════════════════════════ */
function initPillGroup(groupId, stateKey) {
  const group = $(groupId);
  group.querySelectorAll(".pill").forEach(pill => {
    pill.addEventListener("click", () => {
      group.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state[stateKey] = pill.dataset.value;
      updateQuestionCountPreview();
    });
  });
}

function updateQuestionCountPreview() {
  const count = filterQuestions().length;
  $("question-count-preview").textContent =
    count === 0
      ? "No questions match — try different filters"
      : `${count} question${count !== 1 ? "s" : ""} in this session`;
}

function filterQuestions() {
  return QUESTIONS.filter(q => {
    const topicMatch =
      state.filterTopic === "all" || q.topic === state.filterTopic;
    const diffMatch =
      state.filterDifficulty === "all" || q.difficulty === state.filterDifficulty;
    return topicMatch && diffMatch;
  });
}

/* ═══════════════════════════════════════════
   START SCREEN INIT
═══════════════════════════════════════════ */
function initStartScreen() {
  initPillGroup("topic-filter",      "filterTopic");
  initPillGroup("difficulty-filter", "filterDifficulty");
  updateQuestionCountPreview();

  // Timer toggle
  const toggle = $("timer-toggle");
  toggle.addEventListener("change", () => {
    state.timerEnabled = toggle.checked;
    $("timer-note").style.opacity = toggle.checked ? "1" : "0.4";
  });

  // Begin button
  $("btn-start").addEventListener("click", startQuiz);
}

/* ═══════════════════════════════════════════
   QUIZ START
═══════════════════════════════════════════ */
function startQuiz(pool) {
  // pool can be passed directly (retry mode) or built from filters
  if (Array.isArray(pool)) {
    state.pool = shuffle(pool);
    state.retryMode = true;
  } else {
    const filtered = filterQuestions();
    if (filtered.length === 0) {
      alert("No questions match your filters. Please adjust and try again.");
      return;
    }
    state.pool = shuffle(filtered);
    state.retryMode = false;
  }

  state.index   = 0;
  state.correct = 0;
  state.wrong   = 0;
  state.wrongItems = [];

  showScreen("question");
  renderQuestion();
}

/* ═══════════════════════════════════════════
   RENDER QUESTION
═══════════════════════════════════════════ */
function renderQuestion() {
  const q = state.pool[state.index];
  state.answered = false;

  // Counter
  $("q-counter").textContent = `${state.index + 1} / ${state.pool.length}`;

  // Badges
  $("q-topic-badge").textContent = q.topic;
  const diffBadge = $("q-diff-badge");
  diffBadge.textContent  = capitalize(q.difficulty);
  diffBadge.className    = `q-diff-badge ${q.difficulty}`;

  // Rule + question text
  $("rule-of-law").textContent = q.rule;
  $("q-text").textContent      = q.question;

  // Choices
  const choiceBtns = document.querySelectorAll(".choice");
  choiceBtns.forEach((btn, i) => {
    btn.textContent  = q.choices[i];
    btn.className    = "choice";
    btn.disabled     = false;
  });

  // Live score
  updateLiveScore();

  // Hide feedback
  $("feedback-panel").hidden = true;

  // Timer
  clearTimer();
  if (state.timerEnabled) {
    $("timer-wrap").style.display = "block";
    startTimer(q.difficulty);
  } else {
    $("timer-wrap").style.display = "none";
  }
}

/* ═══════════════════════════════════════════
   TIMER
═══════════════════════════════════════════ */
function startTimer(difficulty) {
  const total   = TIMER_SECONDS[difficulty];
  state.timeLeft = total;

  const ring    = $("ring-fg");
  const numEl   = $("timer-number");

  ring.classList.remove("urgent");
  ring.style.strokeDasharray    = `${RING_CIRCUMFERENCE}`;
  ring.style.strokeDashoffset   = "0";
  numEl.textContent             = total;

  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    numEl.textContent = state.timeLeft;

    // Update ring
    const pct    = state.timeLeft / total;
    const offset = RING_CIRCUMFERENCE * (1 - pct);
    ring.style.strokeDashoffset = offset;

    // Urgent color when under 10 seconds
    if (state.timeLeft <= 10) ring.classList.add("urgent");

    if (state.timeLeft <= 0) {
      clearTimer();
      handleTimeout();
    }
  }, 1000);
}

function clearTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function handleTimeout() {
  if (state.answered) return;
  // Treat timeout as wrong answer
  state.answered = true;
  state.wrong++;

  const q = state.pool[state.index];
  disableChoices();
  revealCorrectChoice(q.answer);

  state.wrongItems.push({
    question:    q.question,
    correctText: q.choices[q.answer],
  });

  showFeedback(false, q, true);
}

/* ═══════════════════════════════════════════
   CHOICE SELECTION
═══════════════════════════════════════════ */
function handleChoiceClick(index) {
  if (state.answered) return;
  state.answered = true;
  clearTimer();

  const q       = state.pool[state.index];
  const correct = index === q.answer;
  const btns    = document.querySelectorAll(".choice");

  disableChoices();

  if (correct) {
    btns[index].classList.add("selected-correct");
    state.correct++;
  } else {
    btns[index].classList.add("selected-wrong");
    revealCorrectChoice(q.answer);
    state.wrong++;
    state.wrongItems.push({
      question:    q.question,
      correctText: q.choices[q.answer],
    });
  }

  updateLiveScore();
  showFeedback(correct, q, false);
}

function disableChoices() {
  document.querySelectorAll(".choice").forEach(btn => (btn.disabled = true));
}

function revealCorrectChoice(answerIndex) {
  document.querySelectorAll(".choice")[answerIndex].classList.add("reveal-correct");
}

/* ═══════════════════════════════════════════
   FEEDBACK PANEL
═══════════════════════════════════════════ */
function showFeedback(isCorrect, q, isTimeout) {
  const panel   = $("feedback-panel");
  const verdict = $("feedback-verdict");

  if (isTimeout) {
    verdict.textContent  = "⏱ Time's up!";
    verdict.className    = "feedback-verdict wrong";
  } else if (isCorrect) {
    verdict.textContent  = "✓ Correct!";
    verdict.className    = "feedback-verdict correct";
  } else {
    verdict.textContent  = "✗ Not quite.";
    verdict.className    = "feedback-verdict wrong";
  }

  $("feedback-explanation").textContent = q.explanation;
  $("fun-fact-text").textContent        = q.funFact;

  panel.hidden = false;
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ═══════════════════════════════════════════
   LIVE SCORE
═══════════════════════════════════════════ */
function updateLiveScore() {
  $("live-correct").textContent = state.correct;
  $("live-wrong").textContent   = state.wrong;
}

/* ═══════════════════════════════════════════
   NEXT QUESTION / END
═══════════════════════════════════════════ */
function nextQuestion() {
  state.index++;
  if (state.index >= state.pool.length) {
    showResults();
  } else {
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

/* ═══════════════════════════════════════════
   RESULTS SCREEN
═══════════════════════════════════════════ */
function showResults() {
  clearTimer();
  showScreen("results");

  const total   = state.pool.length;
  const correct = state.correct;
  const pct     = total > 0 ? Math.round((correct / total) * 100) : 0;

  $("results-score").textContent = `${correct} / ${total} correct (${pct}%)`;
  $("results-grade").textContent = gradeMessage(pct);

  // Breakdown by topic & difficulty
  buildBreakdown();

  // Wrong answers review
  const wrongReview = $("wrong-review");
  const retryBtn    = $("btn-retry-wrong");

  if (state.wrongItems.length > 0) {
    wrongReview.hidden = false;
    retryBtn.hidden    = false;
    buildWrongList();
  } else {
    wrongReview.hidden = true;
    retryBtn.hidden    = true;
  }
}

function gradeMessage(pct) {
  if (pct === 100) return "Perfect score. The bar is yours.";
  if (pct >= 90)   return "Exceptional — bar examiners would be impressed.";
  if (pct >= 75)   return "Strong performance. A passing bar score.";
  if (pct >= 60)   return "Solid foundation. Keep drilling the weak spots.";
  if (pct >= 40)   return "Developing — revisit the rules and try again.";
  return "Back to the books — you've got this.";
}

function buildBreakdown() {
  const container = $("results-breakdown");
  container.innerHTML = "";

  // Overall accuracy card
  appendCard(container, "Overall", `${state.correct}/${state.pool.length}`);

  // Per topic
  const topics = [...new Set(state.pool.map(q => q.topic))];
  topics.forEach(topic => {
    const qs      = state.pool.filter(q => q.topic === topic);
    const correct = qs.filter((q, i) => {
      // We need to match by pool index — track this via state
      return !state.wrongItems.some(w => w.question === q.question);
    }).length;
    appendCard(container, topic, `${correct}/${qs.length}`, topic);
  });
}

function appendCard(container, label, value, sub) {
  const card = document.createElement("div");
  card.className = "breakdown-card";
  card.innerHTML = `
    <span class="bc-label">${label}</span>
    <span class="bc-value">${value}</span>
    ${sub ? `<span class="bc-sub">${sub}</span>` : ""}
  `;
  container.appendChild(card);
}

function buildWrongList() {
  const list = $("wrong-list");
  list.innerHTML = "";
  state.wrongItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "wrong-item";
    div.innerHTML = `
      <p class="wi-q">${item.question}</p>
      <p class="wi-correct">✓ Correct answer: ${item.correctText}</p>
    `;
    list.appendChild(div);
  });
}

/* ═══════════════════════════════════════════
   EVENT LISTENERS
═══════════════════════════════════════════ */
function bindEvents() {
  // Choice buttons
  document.querySelectorAll(".choice").forEach(btn => {
    btn.addEventListener("click", () => {
      handleChoiceClick(parseInt(btn.dataset.index, 10));
    });
  });

  // Next question
  $("btn-next").addEventListener("click", nextQuestion);

  // Results actions
  $("btn-restart").addEventListener("click", () => {
    showScreen("start");
    updateQuestionCountPreview();
  });

  $("btn-retry-wrong").addEventListener("click", () => {
    if (state.wrongItems.length === 0) return;
    // Build pool from wrong question objects
    const wrongPool = QUESTIONS.filter(q =>
      state.wrongItems.some(w => w.question === q.question)
    );
    startQuiz(wrongPool);
  });
}

/* ═══════════════════════════════════════════
   BOOT
═══════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initStartScreen();
  bindEvents();
  showScreen("start");
});
