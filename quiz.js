// ==========================================
// quiz.js - Main Quiz Logic
// ==========================================

let quizDatabase = [];
let filteredQuestions = [];
let currentQuiz = [];
let currentIndex = 0;
let userAnswers = [];
let timerInterval;
let timeSeconds = 0;
let wrongQuestionsForRetry = [];

let settings = { pyOnly: false, randomQ: true, randomO: true, flagFilter: null };
const filterGroups = ['subject', 'chapter', 'section', 'topic', 'subtopic', 'exam', 'diff'];

// Store question flags in localStorage
let questionFlags = {};
loadSavedFlags();

function loadSavedFlags() {
  const savedFlags = localStorage.getItem('questionFlags');
  if (savedFlags) questionFlags = JSON.parse(savedFlags);
}

function getQuestionFlag(questionId) {
  return questionFlags[questionId] || 'clear';
}

// --- 1. DATA FLATTENING ---
function flattenData(rawData) {
  let flatList = [];
  rawData.forEach(subObj => {
    subObj.subtopics.forEach(subTopObj => {
      subTopObj.questions.forEach(q => {
        let optsArray = [];
        if (q.options.A) optsArray.push({ key: 'A', text: q.options.A });
        if (q.options.B) optsArray.push({ key: 'B', text: q.options.B });
        if (q.options.C) optsArray.push({ key: 'C', text: q.options.C });
        if (q.options.D) optsArray.push({ key: 'D', text: q.options.D });

        flatList.push({
          id: q.question_id,
          subject: subObj.subject,
          chapter: subObj.chapter,
          section: subObj.section,
          topic: subObj.topic,
          subtopic: subTopObj.subtopic,
          q: q.question,
          optionsData: optsArray,
          ansKey: q.correct_answer,
          exp: q.explanation,
          exam: q.exam,
          diff: q.difficulty,
          py: q.prev_year ? q.prev_year.asked : false
        });
      });
    });
  });
  return flatList;
}

// --- 2. INITIALIZATION ---
window.onload = () => {
  if (typeof RAW_DATA !== 'undefined') {
    quizDatabase = flattenData(RAW_DATA);
    console.log(`✅ Loaded ${quizDatabase.length} questions from data.js`);
  } else {
    console.error("❌ RAW_DATA not found. Make sure data.js is loaded before quiz.js");
  }
  setupMultiSelects();
  updateAvailableCount();
  checkSavedProgress();
};

// --- PROGRESS SAVE / RESUME ---
function checkSavedProgress() {
  const saved = localStorage.getItem('lucentQuizProgress');
  if (saved) {
    const startBar = document.querySelector('.start-bar');
    if (!document.getElementById('btn-resume')) {
      const resumeBtn = document.createElement('button');
      resumeBtn.id = 'btn-resume';
      resumeBtn.className = 'btn';
      resumeBtn.style.backgroundColor = 'var(--warning)';
      resumeBtn.style.color = 'white';
      resumeBtn.style.marginRight = '10px';
      resumeBtn.innerText = 'Resume Previous Quiz ↺';
      resumeBtn.onclick = resumeQuiz;
      startBar.insertBefore(resumeBtn, document.getElementById('btn-start'));
    }
  }
}

function saveProgress() {
  const state = { currentQuiz, currentIndex, userAnswers, timeSeconds };
  localStorage.setItem('lucentQuizProgress', JSON.stringify(state));
}

function clearProgress() {
  localStorage.removeItem('lucentQuizProgress');
  const resumeBtn = document.getElementById('btn-resume');
  if (resumeBtn) resumeBtn.remove();
}

function resumeQuiz() {
  const saved = localStorage.getItem('lucentQuizProgress');
  if (saved) {
    const state = JSON.parse(saved);
    currentQuiz = state.currentQuiz;
    currentIndex = state.currentIndex;
    userAnswers = state.userAnswers;
    timeSeconds = state.timeSeconds;
    document.getElementById('live-total').innerText = currentQuiz.length;
    let currentScore = userAnswers.filter(a => a.isCorrect).length;
    document.getElementById('live-score').innerText = currentScore;
    startTimer();
    showScreen('quiz');
    loadQuestion();
  }
}

// --- MULTI-SELECT UI ---
function setupMultiSelects() {
  const getUnique = (key) => [...new Set(quizDatabase.map(q => q[key]))].filter(Boolean).sort();
  createMultiSelect('subject', getUnique('subject'));
  createMultiSelect('chapter', getUnique('chapter'));
  createMultiSelect('section', getUnique('section'));
  createMultiSelect('topic', getUnique('topic'));
  createMultiSelect('subtopic', getUnique('subtopic'));
  createMultiSelect('exam', getUnique('exam'));
  createMultiSelect('diff', getUnique('diff'));

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.multi-select')) {
      document.querySelectorAll('.ms-list').forEach(list => list.classList.remove('show'));
      document.querySelectorAll('.ms-header').forEach(header => header.classList.remove('active'));
    }
  });
}

function createMultiSelect(group, options) {
  let wrapper = document.getElementById(`ms-wrapper-${group}`);
  if (!wrapper) return;
  let html = `<div class="multi-select" id="ms-${group}">
    <div class="ms-header" onclick="toggleMS('${group}')"><span class="ms-header-text" id="ms-text-${group}">All Selected</span></div>
    <div class="ms-list" id="ms-list-${group}">
      <label class="ms-label"><input type="checkbox" id="cb-all-${group}" value="All" checked onchange="handleCheckboxChange('${group}', 'All')"><strong>All</strong></label>`;
  options.forEach(opt => {
    let cbId = `cb-${group}-${opt.replace(/[^a-zA-Z0-9]/g, '-')}`;
    html += `<label class="ms-label"><input type="checkbox" class="cb-item-${group}" id="${cbId}" value="${opt}" onchange="handleCheckboxChange('${group}', '${opt}')">${opt}</label>`;
  });
  html += `</div></div>`;
  wrapper.innerHTML = html;
}

function toggleMS(group) {
  document.querySelectorAll('.ms-list').forEach(list => { if (list.id !== `ms-list-${group}`) list.classList.remove('show'); });
  document.querySelectorAll('.ms-header').forEach(header => { if (header.parentElement.id !== `ms-${group}`) header.classList.remove('active'); });
  document.getElementById(`ms-list-${group}`).classList.toggle('show');
  document.querySelector(`#ms-${group} .ms-header`).classList.toggle('active');
}

function handleCheckboxChange(group, changedValue) {
  const allCb = document.getElementById(`cb-all-${group}`);
  const itemCbs = document.querySelectorAll(`.cb-item-${group}`);
  if (changedValue === 'All') {
    if (allCb.checked) itemCbs.forEach(cb => cb.checked = false);
    else allCb.checked = true;
  } else {
    const anyChecked = Array.from(itemCbs).some(cb => cb.checked);
    allCb.checked = !anyChecked;
  }
  updateHeaderAndChips(group);
  refreshHierarchicalFilters();
  updateAvailableCount();
}

function removeFilter(group, value, cbId) {
  document.getElementById(cbId).checked = false;
  const anyChecked = Array.from(document.querySelectorAll(`.cb-item-${group}`)).some(cb => cb.checked);
  if (!anyChecked) document.getElementById(`cb-all-${group}`).checked = true;
  updateHeaderAndChips(group);
  refreshHierarchicalFilters();
  updateAvailableCount();
}

function updateHeaderAndChips(group) {
  const allCb = document.getElementById(`cb-all-${group}`);
  const itemCbs = document.querySelectorAll(`.cb-item-${group}`);
  let textSpan = document.getElementById(`ms-text-${group}`);
  if (allCb.checked) textSpan.innerText = "All Selected";
  else textSpan.innerText = `${Array.from(itemCbs).filter(cb => cb.checked).length} Selected`;
  renderAllChips();
}

// --- HIERARCHICAL / CASCADING FILTERS ---
function refreshHierarchicalFilters() {
  const hierarchy = ['subject', 'chapter', 'section', 'topic', 'subtopic'];
  // exam & diff are independent, no cascading needed for them

  for (let i = 0; i < hierarchy.length; i++) {
    const currentGroup = hierarchy[i];

    // Build filter from all parent levels
    const parentFilters = {};
    for (let j = 0; j < i; j++) {
      const selected = getSelectedFilters(hierarchy[j]);
      if (selected.length > 0) parentFilters[hierarchy[j]] = selected;
    }

    // Find valid values for this level given parent selections
    let validValues = new Set();
    quizDatabase.forEach(q => {
      let matches = true;
      for (const [key, vals] of Object.entries(parentFilters)) {
        if (!vals.includes(q[key])) { matches = false; break; }
      }
      if (matches) validValues.add(q[currentGroup]);
    });

    // Show/hide options + uncheck hidden ones
    document.querySelectorAll(`.cb-item-${currentGroup}`).forEach(cb => {
      if (validValues.has(cb.value)) {
        cb.parentElement.style.display = 'flex';
      } else {
        cb.checked = false;
        cb.parentElement.style.display = 'none';
      }
    });

    // If nothing is checked after hiding, reset to "All"
    const anyChecked = Array.from(document.querySelectorAll(`.cb-item-${currentGroup}`)).some(cb => cb.checked);
    if (!anyChecked) {
      document.getElementById(`cb-all-${currentGroup}`).checked = true;
      document.getElementById(`ms-text-${currentGroup}`).innerText = 'All Selected';
    }
  }
}

function renderAllChips() {
  const container = document.getElementById('active-filters');
  let chipsHtml = '';
  filterGroups.forEach(group => {
    if (!document.getElementById(`cb-all-${group}`).checked) {
      document.querySelectorAll(`.cb-item-${group}:checked`).forEach(cb => {
        let gName = group.charAt(0).toUpperCase() + group.slice(1);
        chipsHtml += `<div class="filter-chip"><span class="chip-group-name">${gName}:</span> ${cb.value} <div class="chip-remove" onclick="removeFilter('${group}', '${cb.value}', '${cb.id}')">✕</div></div>`;
      });
    }
  });
  if (settings.pyOnly) chipsHtml += `<div class="filter-chip" style="background:var(--warning);color:white;border:none;"><span class="chip-group-name" style="color:white;">MODE:</span> PYQ Only <div class="chip-remove" style="background:rgba(255,255,255,0.3);color:white;" onclick="togglePY()">✕</div></div>`;
  if (settings.flagFilter) chipsHtml += `<div class="filter-chip"><span class="chip-group-name">FLAG:</span> ${settings.flagFilter} <div class="chip-remove" onclick="toggleFlagFilter(null)">✕</div></div>`;
  container.innerHTML = chipsHtml;
}

function togglePY() {
  settings.pyOnly = !settings.pyOnly;
  document.getElementById('py-row').classList.toggle('active');
  renderAllChips();
  updateAvailableCount();
}

function toggleFlagFilter(flagLevel) {
  settings.flagFilter = flagLevel;
  document.querySelectorAll('.flag-btn').forEach(b => {
    b.classList.remove('active');
    if (flagLevel && b.dataset.flag === flagLevel) b.classList.add('active');
  });
  renderAllChips();
  updateAvailableCount();
}

function toggleMode(mode) {
  if (mode === 'rq') { settings.randomQ = !settings.randomQ; document.getElementById('t-rq').classList.toggle('active'); }
  else { settings.randomO = !settings.randomO; document.getElementById('t-ro').classList.toggle('active'); }
}

function getSelectedFilters(group) {
  if (document.getElementById(`cb-all-${group}`).checked) return [];
  return Array.from(document.querySelectorAll(`.cb-item-${group}:checked`)).map(cb => cb.value);
}

function updateAvailableCount() {
  const filters = {};
  filterGroups.forEach(g => filters[g] = getSelectedFilters(g));

  filteredQuestions = quizDatabase.filter(q => {
    let match = true;
    filterGroups.forEach(g => { if (filters[g].length > 0 && !filters[g].includes(q[g])) match = false; });
    if (settings.pyOnly && !q.py) match = false;
    if (settings.flagFilter && getQuestionFlag(q.id) !== settings.flagFilter) match = false;
    return match;
  });

  const countEl = document.getElementById('q-count');
  const btn = document.getElementById('btn-start');
  countEl.innerText = filteredQuestions.length;
  if (filteredQuestions.length === 0) {
    btn.disabled = true; btn.innerText = "No Questions Available"; countEl.style.color = "var(--text-muted)";
  } else {
    btn.disabled = false; btn.innerText = "Start Quiz →"; countEl.style.color = "var(--primary)";
  }
}

function resetFilters() {
  filterGroups.forEach(group => {
    document.getElementById(`cb-all-${group}`).checked = true;
    document.querySelectorAll(`.cb-item-${group}`).forEach(cb => { cb.checked = false; cb.parentElement.style.display = 'flex'; });
    updateHeaderAndChips(group);
  });
  if (settings.pyOnly) { settings.pyOnly = false; document.getElementById('py-row').classList.remove('active'); }
  if (settings.flagFilter) { settings.flagFilter = null; document.querySelectorAll('.flag-btn').forEach(b => b.classList.remove('active')); }
  renderAllChips();
  updateAvailableCount();
}

// --- 3. QUIZ LOGIC ---
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeSeconds++;
    let m = Math.floor(timeSeconds / 60).toString().padStart(2, '0');
    let s = (timeSeconds % 60).toString().padStart(2, '0');
    document.getElementById('timer').innerText = `${m}:${s}`;
    // Save only every 10 seconds to avoid performance issues
    if (timeSeconds % 10 === 0) saveProgress();
  }, 1000);
}

function startQuiz() {
  currentQuiz = [...filteredQuestions];
  if (settings.randomQ) currentQuiz.sort(() => Math.random() - 0.5);
  userAnswers = []; currentIndex = 0; timeSeconds = 0;
  document.getElementById('live-total').innerText = currentQuiz.length;
  document.getElementById('live-score').innerText = '0';
  startTimer();
  showScreen('quiz');
  loadQuestion();
}

// Store original texts for translation revert
let originalQuestionText = '';
let originalOptionTexts = [];

function loadQuestion() {
  const q = currentQuiz[currentIndex];
  document.getElementById('q-breadcrumb').innerText = `${q.subject} > ${q.chapter}`;
  document.getElementById('progress-text').innerText = `${currentIndex + 1} / ${currentQuiz.length}`;
  document.getElementById('progress-fill').style.width = `${((currentIndex + 1) / currentQuiz.length) * 100}%`;

  let tagsHtml = `<span style="border-color:var(--primary);color:var(--primary)">${q.diff}</span>`;
  if (q.py) tagsHtml += `<span style="background:var(--warning);color:#fff;border:none">PYQ</span>`;
  tagsHtml += `<span>${q.exam}</span>`;
  const qFlag = getQuestionFlag(q.id);
  if (qFlag !== 'clear') tagsHtml += `<span style="border:1px solid #ccc;">[${qFlag}]</span>`;
  document.getElementById('q-tags').innerHTML = tagsHtml;

  document.getElementById('q-text').innerText = q.q;
  originalQuestionText = q.q;

  let currentOptions = [...q.optionsData];
  if (settings.randomO) currentOptions.sort(() => Math.random() - 0.5);

  const letters = ['A', 'B', 'C', 'D'];
  let optsHtml = '';
  originalOptionTexts = [];
  currentOptions.forEach((opt, idx) => {
    optsHtml += `
      <button class="opt-btn" id="opt-${idx}" data-key="${opt.key}" onclick="selectOption(${idx}, '${opt.key}', '${q.ansKey}')">
        <div class="opt-letter">${letters[idx]}</div>
        <div>${opt.text}</div>
      </button>`;
    originalOptionTexts[idx] = opt.text;
  });

  document.getElementById('options-grid').innerHTML = optsHtml;
  document.getElementById('btn-skip').style.display = 'block';
  document.getElementById('btn-next').style.display = 'none';
  document.getElementById('exp-box').style.display = 'none';
  document.getElementById('marathi-panel').style.display = 'none';

  // Reset flag dropdown to current flag
  const flagDropdown = document.getElementById('flag-dropdown');
  if (flagDropdown) flagDropdown.value = qFlag === 'clear' ? '' : qFlag;

  // Reset discussion panel
  const discussionPanel = document.getElementById('discussion-panel');
  if (discussionPanel) discussionPanel.style.display = 'none';
  loadDiscussionMessages();
  const discInput = document.getElementById('discussion-input');
  if (discInput) discInput.value = '';

  saveProgress();
}

function selectOption(uiIndex, selectedKey, correctKey) {
  document.querySelectorAll('.opt-btn').forEach(btn => btn.disabled = true);
  const q = currentQuiz[currentIndex];
  const isCorrect = selectedKey === correctKey;

  userAnswers.push({ q, selectedKey, isCorrect, skipped: false });

  if (isCorrect) {
    document.getElementById(`opt-${uiIndex}`).classList.add('correct');
    document.getElementById('live-score').innerText = parseInt(document.getElementById('live-score').innerText) + 1;
  } else {
    document.getElementById(`opt-${uiIndex}`).classList.add('wrong');
    let correctBtn = document.querySelector(`.opt-btn[data-key="${correctKey}"]`);
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
  document.getElementById('btn-skip').style.display = 'none';
  document.getElementById('btn-next').style.display = 'block';
  document.getElementById('exp-label').innerText = 'Explanation';
  document.getElementById('exp-text').innerText = text || "No detailed explanation available.";
  document.getElementById('exp-box').style.display = 'block';
}

function nextQ() {
  currentIndex++;
  if (currentIndex < currentQuiz.length) loadQuestion();
  else finishQuiz();
}

function confirmExit() {
  if (confirm("Are you sure you want to exit? Your progress will be saved.")) {
    clearInterval(timerInterval);
    saveProgress(); // Save before exit so user can resume
    showScreen('select');
  }
}

// --- 4. RESULTS ---
function finishQuiz() {
  clearInterval(timerInterval);
  clearProgress();

  let correct = 0, wrong = 0, skip = 0;
  let subjectScores = {};
  wrongQuestionsForRetry = [];

  userAnswers.forEach(ans => {
    if (!subjectScores[ans.q.subject]) subjectScores[ans.q.subject] = { total: 0, correct: 0 };
    subjectScores[ans.q.subject].total++;
    if (ans.skipped) { skip++; wrongQuestionsForRetry.push(ans.q); }
    else if (ans.isCorrect) { correct++; subjectScores[ans.q.subject].correct++; }
    else { wrong++; wrongQuestionsForRetry.push(ans.q); }
  });

  const total = currentQuiz.length;
  const acc = total > 0 ? Math.round((correct / (total - skip)) * 100) || 0 : 0;

  document.getElementById('res-score').innerText = correct;
  document.getElementById('res-total').innerText = total;
  document.getElementById('res-correct').innerText = correct;
  document.getElementById('res-wrong').innerText = wrong;
  document.getElementById('res-skip').innerText = skip;
  document.getElementById('res-acc').innerText = `${acc}%`;

  let msg = "Keep practicing!";
  if (wrongQuestionsForRetry.length === 0) msg = "Perfect Score! 🎉";
  else if (acc > 80) msg = "Excellent performance! 🌟";
  else if (acc > 50) msg = "Good job! 👍";
  document.getElementById('res-msg').innerText = msg;

  let bdHtml = '';
  for (const [subj, data] of Object.entries(subjectScores)) {
    bdHtml += `<div style="display:flex;justify-content:space-between;margin-bottom:8px;border-bottom:1px solid var(--border);padding-bottom:4px;">
      <span>${subj}</span><strong>${data.correct} / ${data.total}</strong></div>`;
  }
  document.getElementById('breakdown-rows').innerHTML = bdHtml;

  const actionContainer = document.querySelector('.result-actions');
  actionContainer.style.flexWrap = 'wrap';
  let actionButtonsHtml = `
    <button class="btn btn-ghost btn-lg" style="min-width:45%;" onclick="showScreen('select')">← New Quiz</button>
    <button class="btn btn-primary btn-lg" style="min-width:45%;" onclick="showReview()">Review Answers →</button>`;
  if (wrongQuestionsForRetry.length > 0) {
    actionButtonsHtml += `<button class="btn btn-lg" style="background:var(--warning);color:white;width:100%;margin-top:10px;" onclick="retryWrongAnswers()">Retry Wrong Questions 🔄</button>`;
  }
  actionContainer.innerHTML = actionButtonsHtml;
  showScreen('result');
}

function retryWrongAnswers() {
  currentQuiz = [...wrongQuestionsForRetry];
  if (settings.randomQ) currentQuiz.sort(() => Math.random() - 0.5);
  userAnswers = []; currentIndex = 0; timeSeconds = 0;
  document.getElementById('live-total').innerText = currentQuiz.length;
  document.getElementById('live-score').innerText = '0';
  startTimer();
  showScreen('quiz');
  loadQuestion();
}

// --- FLAGGING ---
function setQuestionFlag(flagValue) {
  const q = currentQuiz[currentIndex];
  if (!q) return;
  if (!flagValue) flagValue = 'clear';
  questionFlags[q.id] = flagValue;
  localStorage.setItem('questionFlags', JSON.stringify(questionFlags));
  // Update tag display
  const qFlag = getQuestionFlag(q.id);
  console.log(`📌 Question ${q.id} flagged as: ${flagValue}`);
}

// --- GEMINI AI FUNCTIONS ---
async function showHint() {
  const q = currentQuiz[currentIndex];
  if (!q) return;
  const hintBtn = document.getElementById('btn-hint');
  const originalText = hintBtn.innerText;
  hintBtn.disabled = true;
  hintBtn.innerText = '⏳ Getting hint...';
  try {
    const hint = await getHint(q.q, q.optionsData);
    document.getElementById('exp-label').innerText = '💡 Hint';
    document.getElementById('exp-text').innerText = hint;
    document.getElementById('exp-box').style.display = 'block';
  } catch (error) {
    document.getElementById('exp-text').innerText = 'Error getting hint: ' + error.message;
    document.getElementById('exp-box').style.display = 'block';
  } finally {
    hintBtn.disabled = false;
    hintBtn.innerText = originalText;
  }
}

async function showDetailedExplanation() {
  const q = currentQuiz[currentIndex];
  if (!q) return;
  const explainBtn = document.getElementById('btn-explain');
  const originalText = explainBtn.innerText;
  explainBtn.disabled = true;
  explainBtn.innerText = '⏳ Getting explanation...';
  try {
    const correctOptObj = q.optionsData.find(o => o.key === q.ansKey);
    const correctAnswerText = correctOptObj ? correctOptObj.text : 'Unknown';
    const explanation = await getExplanation(q.q, correctAnswerText, q.exp);
    document.getElementById('exp-label').innerText = '📖 Detailed Explanation';
    document.getElementById('exp-text').innerText = explanation;
    document.getElementById('exp-box').style.display = 'block';
  } catch (error) {
    document.getElementById('exp-text').innerText = 'Error: ' + error.message;
    document.getElementById('exp-box').style.display = 'block';
  } finally {
    explainBtn.disabled = false;
    explainBtn.innerText = originalText;
  }
}

function toggleDiscussionPanel() {
  const panel = document.getElementById('discussion-panel');
  const btn = document.getElementById('btn-discussion-toggle');
  if (panel.style.display === 'none') {
    panel.style.display = 'block';
    btn.style.background = '#3b82f6';
    btn.style.color = 'white';
    loadDiscussionMessages();
    const input = document.getElementById('discussion-input');
    input.focus();
    input.onkeypress = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendDiscussionMessage(); } };
  } else {
    panel.style.display = 'none';
    btn.style.background = '';
    btn.style.color = '';
  }
}

async function translateToMarathi() {
  const q = currentQuiz[currentIndex];
  if (!q) return;
  const btn = document.getElementById('btn-translate');
  const panel = document.getElementById('marathi-panel');
  if (panel.style.display === 'block') { panel.style.display = 'none'; return; }
  const originalTxt = btn.innerText;
  btn.disabled = true;
  btn.innerText = '⏳ Translating...';
  document.getElementById('marathi-question').innerText = '⏳ Translating question...';
  document.getElementById('marathi-options').innerHTML = '';
  try {
    const displayedOpts = [];
    document.querySelectorAll('.opt-btn').forEach(optBtn => {
      displayedOpts.push(optBtn.querySelector('div:nth-child(2)').innerText);
    });
    const result = await getMarathiTranslation(q.q, displayedOpts);
    document.getElementById('marathi-question').innerText = result.question || '❌ Translation not available';
    if (result.options && result.options.length > 0) {
      document.getElementById('marathi-options').innerHTML = result.options.map((optText, idx) =>
        `<div style="padding:10px 8px;background:white;border-radius:3px;border-left:3px solid #f59e0b;margin-bottom:6px;">
          <strong>${String.fromCharCode(65 + idx)})</strong> ${optText}
        </div>`
      ).join('');
    }
    panel.style.display = 'block';
  } catch (err) {
    document.getElementById('marathi-question').innerText = '❌ Error: ' + err.message;
  } finally {
    btn.disabled = false;
    btn.innerText = '🔁 Marathi';
  }
}

function loadDiscussionMessages() {
  const q = currentQuiz[currentIndex];
  if (!q) return;
  const key = `discussion_${q.id}`;
  const messages = JSON.parse(localStorage.getItem(key) || '[]');
  const messagesDiv = document.getElementById('discussion-messages');
  if (!messagesDiv) return;
  let html = '';
  messages.forEach(msg => {
    const isUser = msg.sender === 'You';
    const bgColor = isUser ? '#e0f2fe' : '#f0fdf4';
    const borderColor = isUser ? '#0284c7' : '#16a34a';
    html += `<div style="margin-bottom:10px;padding:10px;background:${bgColor};border-left:3px solid ${borderColor};border-radius:4px;">
      <div style="font-size:12px;color:#666;font-weight:600;margin-bottom:4px;">${msg.sender}</div>
      <div style="font-size:13px;color:#333;line-height:1.5;">${msg.text}</div>
    </div>`;
  });
  messagesDiv.innerHTML = html || '<div style="text-align:center;color:#999;padding:20px;">Ask anything about this question!</div>';
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

async function sendDiscussionMessage() {
  const q = currentQuiz[currentIndex];
  if (!q) return;
  const input = document.getElementById('discussion-input');
  const userMessage = input.value.trim();
  if (!userMessage) return;
  const sendBtn = document.getElementById('btn-send-message');
  const originalText = sendBtn.innerText;
  sendBtn.disabled = true;
  sendBtn.innerText = '⏳ Sending...';
  try {
    const key = `discussion_${q.id}`;
    const messages = JSON.parse(localStorage.getItem(key) || '[]');
    messages.push({ sender: 'You', text: userMessage });
    const aiResponse = await getDiscussionResponse(q.q, userMessage);
    messages.push({ sender: 'Teacher AI', text: aiResponse });
    localStorage.setItem(key, JSON.stringify(messages));
    input.value = '';
    loadDiscussionMessages();
  } catch (error) {
    alert('Error: ' + error.message);
  } finally {
    sendBtn.disabled = false;
    sendBtn.innerText = originalText;
  }
}

// --- 5. REVIEW ---
function showReview() { setRevFilter('all'); showScreen('review'); }

function setRevFilter(filterType) {
  document.querySelectorAll('.rev-pill').forEach(p => p.classList.remove('active'));
  document.querySelector(`.rev-pill[data-f="${filterType}"]`).classList.add('active');
  const list = document.getElementById('review-list');
  let html = '';
  userAnswers.forEach((ans, i) => {
    if (filterType === 'correct' && !ans.isCorrect) return;
    if (filterType === 'wrong' && ans.isCorrect) return;
    let statusClass = ans.isCorrect ? 'c' : (ans.skipped ? 's' : 'w');
    let statusText = ans.isCorrect ? '✅ Correct' : (ans.skipped ? '⚠️ Skipped' : '❌ Wrong');
    let userOptObj = ans.q.optionsData.find(o => o.key === ans.selectedKey);
    let corrOptObj = ans.q.optionsData.find(o => o.key === ans.q.ansKey);
    let userAnswerText = ans.skipped ? "Not Attempted" : (userOptObj ? userOptObj.text : "");
    let correctAnswerText = corrOptObj ? corrOptObj.text : "";
    html += `<div class="rev-item ${statusClass}">
      <div style="font-size:12px;color:var(--text-muted);margin-bottom:4px;font-weight:600;">Q${i + 1} • ${statusText}</div>
      <div class="rev-q">${ans.q.q}</div>
      ${!ans.isCorrect ? `<div class="rev-ans user">Your Answer: ${userAnswerText}</div>` : ''}
      <div class="rev-ans correct">Correct Answer: ${correctAnswerText}</div>
      <div class="rev-exp"><strong>Explanation:</strong> ${ans.q.exp}</div>
    </div>`;
  });
  list.innerHTML = html || "<p style='text-align:center;color:var(--text-muted);margin-top:20px'>No questions in this filter.</p>";
}

// --- EXPOSE TO GLOBAL SCOPE ---
window.toggleMS = toggleMS;
window.handleCheckboxChange = handleCheckboxChange;
window.removeFilter = removeFilter;
window.updateHeaderAndChips = updateHeaderAndChips;
window.togglePY = togglePY;
window.toggleFlagFilter = toggleFlagFilter;
window.toggleMode = toggleMode;
window.resetFilters = resetFilters;
window.startQuiz = startQuiz;
window.confirmExit = confirmExit;
window.selectOption = selectOption;
window.skipQ = skipQ;
window.nextQ = nextQ;
window.showScreen = showScreen;
window.setRevFilter = setRevFilter;
window.showReview = showReview;
window.retryWrongAnswers = retryWrongAnswers;
window.showHint = showHint;
window.showDetailedExplanation = showDetailedExplanation;
window.toggleDiscussionPanel = toggleDiscussionPanel;
window.translateToMarathi = translateToMarathi;
window.sendDiscussionMessage = sendDiscussionMessage;
window.setQuestionFlag = setQuestionFlag;