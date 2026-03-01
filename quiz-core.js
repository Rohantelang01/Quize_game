// ==========================================
// quiz-core.js - Core Quiz Logic
// ==========================================

let quizDatabase      = [];
let filteredQuestions = [];
let currentQuiz       = [];
let currentIndex      = 0;
let userAnswers       = [];
let timerInterval;
let timeSeconds       = 0;

let settings = { pyOnly: false, randomQ: true, randomO: true, flagFilter: null };

// Flag system
let questionFlags = {};

function loadSavedFlags() {
  const saved = localStorage.getItem('questionFlags');
  if (saved) questionFlags = JSON.parse(saved);
}

function getQuestionFlag(questionId) {
  return questionFlags[questionId] || 'clear';
}

function setQuestionFlag(flagValue) {
  const q = currentQuiz[currentIndex];
  if (!q) return;
  if (!flagValue) flagValue = 'clear';
  questionFlags[q.id] = flagValue;
  localStorage.setItem('questionFlags', JSON.stringify(questionFlags));
  console.log(`📌 Question ${q.id} flagged as: ${flagValue}`);
}

// --- DATA FLATTENING ---
function flattenData(rawData) {
  const flatList = [];
  rawData.forEach(subObj => {
    subObj.subtopics.forEach(subTopObj => {
      subTopObj.questions.forEach(q => {
        const optsArray = [];
        if (q.options.A) optsArray.push({ key: 'A', text: q.options.A });
        if (q.options.B) optsArray.push({ key: 'B', text: q.options.B });
        if (q.options.C) optsArray.push({ key: 'C', text: q.options.C });
        if (q.options.D) optsArray.push({ key: 'D', text: q.options.D });

        flatList.push({
          id:       q.question_id,
          subject:  subObj.subject,
          chapter:  subObj.chapter,
          section:  subObj.section,
          topic:    subObj.topic,
          subtopic: subTopObj.subtopic,
          q:        q.question,
          optionsData: optsArray,
          ansKey:   q.correct_answer,
          exp:      q.explanation,
          exam:     q.exam,
          diff:     q.difficulty,
          py:       q.prev_year ? q.prev_year.asked : false
        });
      });
    });
  });
  return flatList;
}

// --- INITIALIZATION ---
window.onload = () => {
  loadSavedFlags();

  if (typeof RAW_DATA !== 'undefined') {
    quizDatabase = flattenData(RAW_DATA);
    console.log(`✅ Loaded ${quizDatabase.length} questions from data.js`);
  } else {
    console.error("❌ RAW_DATA not found. Make sure data.js is loaded before quiz-core.js");
  }

  setupMultiSelects();   // filters.js
  updateAvailableCount(); // filters.js
  checkSavedProgress();
};

// --- PROGRESS SAVE / RESUME ---
function checkSavedProgress() {
  const saved = localStorage.getItem('lucentQuizProgress');
  if (saved) {
    const startBar = document.querySelector('.start-bar');
    if (!document.getElementById('btn-resume')) {
      const btn = document.createElement('button');
      btn.id        = 'btn-resume';
      btn.className = 'btn';
      btn.style.backgroundColor = 'var(--warning)';
      btn.style.color            = 'white';
      btn.style.marginRight      = '10px';
      btn.innerText = 'Resume Previous Quiz ↺';
      btn.onclick   = resumeQuiz;
      startBar.insertBefore(btn, document.getElementById('btn-start'));
    }
  }
}

function saveProgress() {
  localStorage.setItem('lucentQuizProgress', JSON.stringify({
    currentQuiz, currentIndex, userAnswers, timeSeconds
  }));
}

function clearProgress() {
  localStorage.removeItem('lucentQuizProgress');
  const btn = document.getElementById('btn-resume');
  if (btn) btn.remove();
}

function resumeQuiz() {
  const saved = localStorage.getItem('lucentQuizProgress');
  if (!saved) return;
  const state    = JSON.parse(saved);
  currentQuiz    = state.currentQuiz;
  currentIndex   = state.currentIndex;
  userAnswers    = state.userAnswers;
  timeSeconds    = state.timeSeconds;
  document.getElementById('live-total').innerText = currentQuiz.length;
  document.getElementById('live-score').innerText = userAnswers.filter(a => a.isCorrect).length;
  startTimer();
  showScreen('quiz');
  loadQuestion();
}

// --- SCREEN ---
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
}

// --- TIMER ---
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeSeconds++;
    const m = Math.floor(timeSeconds / 60).toString().padStart(2, '0');
    const s = (timeSeconds % 60).toString().padStart(2, '0');
    document.getElementById('timer').innerText = `${m}:${s}`;
    // Save every 10 seconds only
    if (timeSeconds % 10 === 0) saveProgress();
  }, 1000);
}

// --- QUIZ START ---
function startQuiz() {
  currentQuiz = [...filteredQuestions];
  if (settings.randomQ) currentQuiz.sort(() => Math.random() - 0.5);
  userAnswers  = [];
  currentIndex = 0;
  timeSeconds  = 0;
  document.getElementById('live-total').innerText = currentQuiz.length;
  document.getElementById('live-score').innerText = '0';
  startTimer();
  showScreen('quiz');
  loadQuestion();
}

// Store original texts for translation revert
let originalQuestionText = '';
let originalOptionTexts  = [];

// --- LOAD QUESTION ---
function loadQuestion() {
  const q = currentQuiz[currentIndex];

  document.getElementById('q-breadcrumb').innerText  = `${q.subject} > ${q.chapter}`;
  document.getElementById('progress-text').innerText  = `${currentIndex + 1} / ${currentQuiz.length}`;
  document.getElementById('progress-fill').style.width = `${((currentIndex + 1) / currentQuiz.length) * 100}%`;

  // Tags
  let tagsHtml = `<span style="border-color:var(--primary);color:var(--primary)">${q.diff}</span>`;
  if (q.py) tagsHtml += `<span style="background:var(--warning);color:#fff;border:none">PYQ</span>`;
  tagsHtml += `<span>${q.exam}</span>`;
  const qFlag = getQuestionFlag(q.id);
  if (qFlag !== 'clear') tagsHtml += `<span style="border:1px solid #ccc;">[${qFlag}]</span>`;
  document.getElementById('q-tags').innerHTML = tagsHtml;

  // Question text
  document.getElementById('q-text').innerText = q.q;
  originalQuestionText = q.q;

  // Options
  let currentOptions = [...q.optionsData];
  if (settings.randomO) currentOptions.sort(() => Math.random() - 0.5);

  const letters = ['A', 'B', 'C', 'D'];
  originalOptionTexts = [];
  document.getElementById('options-grid').innerHTML = currentOptions.map((opt, idx) => {
    originalOptionTexts[idx] = opt.text;
    return `<button class="opt-btn" id="opt-${idx}" data-key="${opt.key}"
              onclick="selectOption(${idx}, '${opt.key}', '${q.ansKey}')">
              <div class="opt-letter">${letters[idx]}</div>
              <div>${opt.text}</div>
            </button>`;
  }).join('');

  // Reset UI state
  document.getElementById('btn-skip').style.display  = 'block';
  document.getElementById('btn-next').style.display  = 'none';
  document.getElementById('exp-box').style.display   = 'none';
  document.getElementById('marathi-panel').style.display = 'none';

  const flagDropdown = document.getElementById('flag-dropdown');
  if (flagDropdown) flagDropdown.value = qFlag === 'clear' ? '' : qFlag;

  const discussionPanel = document.getElementById('discussion-panel');
  if (discussionPanel) discussionPanel.style.display = 'none';
  const discBtn = document.getElementById('btn-discussion-toggle');
  if (discBtn) { discBtn.style.background = ''; discBtn.style.color = ''; }

  loadDiscussionMessages(); // ai-features.js
  const discInput = document.getElementById('discussion-input');
  if (discInput) discInput.value = '';

  saveProgress();
}

// --- ANSWER SELECTION ---
function selectOption(uiIndex, selectedKey, correctKey) {
  document.querySelectorAll('.opt-btn').forEach(btn => btn.disabled = true);
  const q         = currentQuiz[currentIndex];
  const isCorrect = selectedKey === correctKey;

  userAnswers.push({ q, selectedKey, isCorrect, skipped: false });

  if (isCorrect) {
    document.getElementById(`opt-${uiIndex}`).classList.add('correct');
    document.getElementById('live-score').innerText =
      parseInt(document.getElementById('live-score').innerText) + 1;
  } else {
    document.getElementById(`opt-${uiIndex}`).classList.add('wrong');
    const correctBtn = document.querySelector(`.opt-btn[data-key="${correctKey}"]`);
    if (correctBtn) correctBtn.classList.add('correct');
  }

  showExplanation(q.exp);
  saveProgress();
}

function skipQ() {
  userAnswers.push({ q: currentQuiz[currentIndex], selectedKey: null, isCorrect: false, skipped: true });
  showExplanation(currentQuiz[currentIndex].exp);
  saveProgress();
}

function showExplanation(text) {
  document.getElementById('btn-skip').style.display  = 'none';
  document.getElementById('btn-next').style.display  = 'block';
  document.getElementById('exp-label').innerText     = 'Explanation';
  document.getElementById('exp-text').innerText      = text || "No detailed explanation available.";
  document.getElementById('exp-box').style.display   = 'block';
}

function nextQ() {
  currentIndex++;
  if (currentIndex < currentQuiz.length) loadQuestion();
  else finishQuiz(); // results.js
}

function confirmExit() {
  if (confirm("Are you sure you want to exit? Progress will be saved.")) {
    clearInterval(timerInterval);
    saveProgress();
    showScreen('select');
  }
}

// Global expose
window.showScreen     = showScreen;
window.startQuiz      = startQuiz;
window.selectOption   = selectOption;
window.skipQ          = skipQ;
window.nextQ          = nextQ;
window.confirmExit    = confirmExit;
window.setQuestionFlag = setQuestionFlag;