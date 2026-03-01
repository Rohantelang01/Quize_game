// ==========================================
// quiz.js / main.js KA PART 
// ==========================================

// Import Firestore service
import { loadQuestionsFromFirestore } from './firestore-service.js';
import { getHint, getExplanation, getDiscussionResponse, getMarathiTranslation, validateJSONWithAI } from './gemini-service.js';

let quizDatabase = []; 
let filteredQuestions = [];
let currentQuiz = [];
let currentIndex = 0;
let userAnswers = []; 
let timerInterval;
let timeSeconds = 0;
let wrongQuestionsForRetry = []; // store wrong or skipped questions for retry


let settings = { pyOnly: false, randomQ: true, randomO: true, flagFilter: null };  // flagFilter: null, 'clear', 'confusing', 'hard'
const filterGroups = ['subject', 'chapter', 'section', 'topic', 'subtopic', 'exam', 'diff'];

// Store question flags: { questionId: 'clear' | 'confusing' | 'hard' }
let questionFlags = {};

// Load saved flags from localStorage
loadSavedFlags();
function loadSavedFlags(){
  const savedFlags = localStorage.getItem('questionFlags');
  if(savedFlags) questionFlags = JSON.parse(savedFlags);
}

// Helper function to get question flag
function getQuestionFlag(questionId) {
  return questionFlags[questionId] || 'clear';  // Default is clear
}

// --- 1. DATA FLATTENING LOGIC (now handled inside firestore-service) ---
// This function is no longer used because firestore-service.js flattens records automatically


// --- 2. INITIALIZATION & CACHE MEMORY ---
window.onload = async () => {
  try {
    // load questions from Firestore
    quizDatabase = await loadQuestionsFromFirestore();
    
    if(quizDatabase.length === 0) {
      console.warn("⚠️ No questions loaded from Firestore");
      document.getElementById('q-count').innerText = "No data available";
    }
    
    setupMultiSelects();
    updateAvailableCount();
    checkSavedProgress();
  } catch (error) {
    console.error("❌ Error in window.onload:", error);
    alert("Error occurred loading data. Check console for details.");
  }
};

// check for previous quiz state in LocalStorage

function checkSavedProgress() {
  const saved = localStorage.getItem('lucentQuizProgress');
  if(saved) {
    const startBar = document.querySelector('.start-bar');
    if(!document.getElementById('btn-resume')) {
      const resumeBtn = document.createElement('button');
      resumeBtn.id = 'btn-resume';
      resumeBtn.className = 'btn';
      resumeBtn.style.backgroundColor = 'var(--warning)';
      resumeBtn.style.color = 'white';
      resumeBtn.style.marginRight = '10px';
      resumeBtn.innerText = 'Resume Previous Quiz ↺';
      resumeBtn.onclick = resumeQuiz;
      
      // Start button se pehle add karein
      startBar.insertBefore(resumeBtn, document.getElementById('btn-start'));
    }
  }
}

// State ko save karna
function saveProgress() {
  const state = {
    currentQuiz,
    currentIndex,
    userAnswers,
    timeSeconds
  };
  localStorage.setItem('lucentQuizProgress', JSON.stringify(state));
}

// State ko delete karna (Jab quiz complete ho jaye ya exit karein)
function clearProgress() {
  localStorage.removeItem('lucentQuizProgress');
  const resumeBtn = document.getElementById('btn-resume');
  if(resumeBtn) resumeBtn.remove();
}

// resume quiz from where user left off

function resumeQuiz() {
  const saved = localStorage.getItem('lucentQuizProgress');
  if(saved) {
    const state = JSON.parse(saved);
    currentQuiz = state.currentQuiz;
    currentIndex = state.currentIndex;
    userAnswers = state.userAnswers;
    timeSeconds = state.timeSeconds;
    
    document.getElementById('live-total').innerText = currentQuiz.length;
    // recalculate score
    let currentScore = userAnswers.filter(a => a.isCorrect).length;
    document.getElementById('live-score').innerText = currentScore;
    
    startTimer();
    showScreen('quiz');
    loadQuestion();
  }
}


// --- MULTI-SELECT UI LOGIC WITH HIERARCHICAL FILTERING ---
function setupMultiSelects() {
  const getUnique = (key) => [...new Set(quizDatabase.map(q => q[key]))];
  createMultiSelect('subject', getUnique('subject'));
  createMultiSelect('chapter', getUnique('chapter'));
  createMultiSelect('section', getUnique('section'));
  createMultiSelect('topic', getUnique('topic'));
  createMultiSelect('subtopic', getUnique('subtopic'));
  createMultiSelect('exam', getUnique('exam'));
  createMultiSelect('diff', getUnique('diff'));

  document.addEventListener('click', function(event) {
    if (!event.target.closest('.multi-select')) {
      document.querySelectorAll('.ms-list').forEach(list => list.classList.remove('show'));
      document.querySelectorAll('.ms-header').forEach(header => header.classList.remove('active'));
    }
  });
}

function createMultiSelect(group, options) {
  let wrapper = document.getElementById(`ms-wrapper-${group}`);
  if(!wrapper) return;
  
  let html = `<div class="multi-select" id="ms-${group}">
      <div class="ms-header" onclick="toggleMS('${group}')"><span class="ms-header-text" id="ms-text-${group}">All Selected</span></div>
      <div class="ms-list" id="ms-list-${group}">
        <label class="ms-label"><input type="checkbox" id="cb-all-${group}" value="All" checked onchange="handleCheckboxChange('${group}', 'All')"><strong>All</strong></label>`;
  options.forEach((opt) => {
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
    if (anyChecked) allCb.checked = false; 
    else allCb.checked = true; 
  }
  updateHeaderAndChips(group);
  updateAvailableCount();
  refreshHierarchicalFilters(); // Update dependent filters
}

function removeFilter(group, value, cbId) {
  document.getElementById(cbId).checked = false;
  const anyChecked = Array.from(document.querySelectorAll(`.cb-item-${group}`)).some(cb => cb.checked);
  if (!anyChecked) document.getElementById(`cb-all-${group}`).checked = true;
  updateHeaderAndChips(group);
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

// Hierarchical Filter Logic - Update dependent filters
function refreshHierarchicalFilters() {
  const hierarchy = ['subject', 'chapter', 'section', 'topic', 'subtopic', 'exam', 'diff'];
  
  for (let i = 0; i < hierarchy.length; i++) {
    const currentGroup = hierarchy[i];
    
    // Get all filters above current level (already selected)
    const filterAbove = {};
    for (let j = 0; j < i; j++) {
      const group = hierarchy[j];
      const selected = getSelectedFilters(group);
      if (selected.length > 0) filterAbove[group] = selected;
    }
    
    // Get all valid values for current group based on filters above
    let validValues = new Set();
    quizDatabase.forEach(q => {
      let matchAbove = true;
      for (const [key, values] of Object.entries(filterAbove)) {
        if (!values.includes(q[key])) matchAbove = false;
      }
      if (matchAbove) validValues.add(q[currentGroup]);
    });
    
    // Update checkboxes for current group
    const itemCbs = document.querySelectorAll(`.cb-item-${currentGroup}`);
    itemCbs.forEach(cb => {
      if (validValues.has(cb.value)) {
        cb.parentElement.style.display = 'flex';
      } else {
        cb.checked = false;
        cb.parentElement.style.display = 'none';
      }
    });
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
  if (settings.pyOnly) chipsHtml += `<div class="filter-chip" style="background:var(--warning); color:white; border:none;"><span class="chip-group-name" style="color:white;">MODE:</span> PYQ Only <div class="chip-remove" style="background:rgba(255,255,255,0.3); color:white;" onclick="togglePY()">✕</div></div>`;
  if (settings.flagFilter) {
    chipsHtml += `<div class="filter-chip"><span class="chip-group-name">FLAG:</span> ${settings.flagFilter} <div class="chip-remove" onclick="toggleFlagFilter(null)">✕</div></div>`;
  }
  container.innerHTML = chipsHtml;
}

function togglePY() { settings.pyOnly = !settings.pyOnly; document.getElementById('py-row').classList.toggle('active'); renderAllChips(); updateAvailableCount(); }

function toggleFlagFilter(flagLevel) { 
  // Cycle through: null -> green -> blue -> red -> null
  if (flagLevel === null) {
    settings.flagFilter = null;
    document.querySelectorAll('.flag-btn').forEach(b => b.classList.remove('active'));
  } else {
    settings.flagFilter = flagLevel;
    document.querySelectorAll('.flag-btn').forEach(b => {
      b.classList.remove('active');
      if (b.dataset.flag === flagLevel) b.classList.add('active');
    });
  }
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
    
    // Filter by flag level
    if (settings.flagFilter) {
      const qFlag = getQuestionFlag(q.id);
      if (qFlag !== settings.flagFilter) match = false;
    }
    
    return match;
  });

  const countEl = document.getElementById('q-count');
  const btn = document.getElementById('btn-start');
  countEl.innerText = filteredQuestions.length;
  if (filteredQuestions.length === 0) { btn.disabled = true; btn.innerText = "No Questions Available"; countEl.style.color = "var(--text-muted)"; } 
    else { btn.disabled = false; btn.innerText = "Start Quiz →"; countEl.style.color = "var(--primary)"; }
}

function resetFilters() {
  filterGroups.forEach(group => {
    document.getElementById(`cb-all-${group}`).checked = true;
    document.querySelectorAll(`.cb-item-${group}`).forEach(cb => cb.checked = false);
    updateHeaderAndChips(group);
  });
  if(settings.pyOnly) { settings.pyOnly = false; document.getElementById('py-row').classList.remove('active'); }
  renderAllChips(); updateAvailableCount();
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
    saveProgress(); // saving timer state every second
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

function loadQuestion() {
  const q = currentQuiz[currentIndex];
  document.getElementById('q-breadcrumb').innerText = `${q.subject} > ${q.chapter}`;
  document.getElementById('progress-text').innerText = `${currentIndex + 1} / ${currentQuiz.length}`;
  document.getElementById('progress-fill').style.width = `${((currentIndex + 1) / currentQuiz.length) * 100}%`;
  
  let tagsHtml = `<span style="border-color:var(--primary);color:var(--primary)">${q.diff}</span>`;
  if(q.py) tagsHtml += `<span style="background:var(--warning);color:#fff;border:none">PYQ</span>`;
  tagsHtml += `<span>${q.exam}</span>`;
  
  // Show flag status without colors
  const qFlag = getQuestionFlag(q.id);
  tagsHtml += `<span style="border:1px solid #ccc; padding:2px 8px; border-radius:3px;">[${qFlag}]</span>`;
  
  document.getElementById('q-tags').innerHTML = tagsHtml;
  document.getElementById('q-text').innerText = q.q;
  
  // store originals for potential revert
  originalQuestionText = q.q;

  let currentOptions = [...q.optionsData];
  if (settings.randomO) currentOptions.sort(() => Math.random() - 0.5); 

  const letters = ['A', 'B', 'C', 'D'];
  let optsHtml = '';
  currentOptions.forEach((opt, idx) => {
    optsHtml += `
      <button class="opt-btn" id="opt-${idx}" data-key="${opt.key}" onclick="selectOption(${idx}, '${opt.key}', '${q.ansKey}')">
        <div class="opt-letter">${letters[idx]}</div>
        <div>${opt.text}</div>
      </button>
    `;
    originalOptionTexts[idx] = opt.text; // keep track
  });
  
  document.getElementById('options-grid').innerHTML = optsHtml;
  document.getElementById('btn-skip').style.display = 'block';
  document.getElementById('btn-next').style.display = 'none';
  document.getElementById('exp-box').style.display = 'none';
  document.getElementById('marathi-panel').style.display = 'none';
  
  // Update flag button appearance based on current flag level
  updateFlagButtonState(q.id);
  
  // If discussion panel is open, reload its messages for the new question
  loadDiscussionMessages();
  // clear any leftover text in the input box
  const discInput = document.getElementById('discussion-input');
  if (discInput) discInput.value = '';
  
  saveProgress(); // save progress after loading question
}

function selectOption(uiIndex, selectedKey, correctKey) {
  document.querySelectorAll('.opt-btn').forEach(btn => btn.disabled = true);
  const q = currentQuiz[currentIndex];
  const isCorrect = selectedKey === correctKey;
  
  userAnswers.push({ q: q, selectedKey: selectedKey, isCorrect: isCorrect, skipped: false });

  if (isCorrect) {
    document.getElementById(`opt-${uiIndex}`).classList.add('correct');
    document.getElementById('live-score').innerText = parseInt(document.getElementById('live-score').innerText) + 1;
  } else {
    document.getElementById(`opt-${uiIndex}`).classList.add('wrong');
    // FIX 1 CONTINUED: Ab sirf aur sirf wahi button highlight hoga jiska data-key sahi hai
    let correctBtn = document.querySelector(`.opt-btn[data-key="${correctKey}"]`);
    if(correctBtn) correctBtn.classList.add('correct');
  }
  
  showExplanation(q.exp);
  saveProgress(); // save progress after answering
}

function skipQ() {
  userAnswers.push({ q: currentQuiz[currentIndex], selectedKey: null, isCorrect: false, skipped: true });
  showExplanation(currentQuiz[currentIndex].exp);
  saveProgress();
}

function showExplanation(text) {
  document.getElementById('btn-skip').style.display = 'none';
  document.getElementById('btn-next').style.display = 'block';
  document.getElementById('exp-text').innerText = text || "No detailed explanation available.";
  document.getElementById('exp-box').style.display = 'block';
}

function nextQ() {
  currentIndex++;
  if (currentIndex < currentQuiz.length) loadQuestion();
  else finishQuiz();
}

function confirmExit() {
  if(confirm("Are you sure you want to exit? Your progress will be lost.")) {
    clearInterval(timerInterval); 
    clearProgress(); // Exit karne par cache clear
    showScreen('select');
  }
}

// --- 4. RESULTS ---
function finishQuiz() {
  clearInterval(timerInterval);
  clearProgress(); // Quiz khatam, cache clear
  
  let correct = 0, wrong = 0, skip = 0; 
  let subjectScores = {};
  wrongQuestionsForRetry = []; // Reset retry array

  userAnswers.forEach(ans => {
    if(!subjectScores[ans.q.subject]) subjectScores[ans.q.subject] = { total: 0, correct: 0 };
    subjectScores[ans.q.subject].total++;
    
    if (ans.skipped) {
        skip++;
        wrongQuestionsForRetry.push(ans.q); // Skipped wale bhi retry me jayenge
    } else if (ans.isCorrect) { 
        correct++; 
        subjectScores[ans.q.subject].correct++; 
    } else { 
        wrong++;
        wrongQuestionsForRetry.push(ans.q); // wrong ones will go to retry

    }
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
  if(acc > 80) msg = "Excellent performance! 🌟";
  else if (acc > 50) msg = "Good job! 👍";
  if (wrongQuestionsForRetry.length === 0) msg = "Perfect Score! 🎉";
  
  document.getElementById('res-msg').innerText = msg;

  let bdHtml = '';
  for (const [subj, data] of Object.entries(subjectScores)) {
    bdHtml += `<div style="display:flex; justify-content:space-between; margin-bottom:8px; border-bottom:1px solid var(--border); padding-bottom:4px;">
      <span>${subj}</span> <strong>${data.correct} / ${data.total}</strong></div>`;
  }
  document.getElementById('breakdown-rows').innerHTML = bdHtml;

  // FIX 3: Result Action Buttons Dynamically banana taaki Retry button daal sakein
  const actionContainer = document.querySelector('.result-actions');
  actionContainer.style.flexWrap = 'wrap'; // Allow buttons to wrap to next line
  
  let actionButtonsHtml = `
    <button class="btn btn-ghost btn-lg" style="min-width: 45%;" onclick="showScreen('select')">← New Quiz</button>
    <button class="btn btn-primary btn-lg" style="min-width: 45%;" onclick="showReview()">Review Answers →</button>
  `;
  
  // retry button appears only if there was at least one wrong answer
  if(wrongQuestionsForRetry.length > 0) {
      actionButtonsHtml += `
      <button class="btn btn-lg" style="background: var(--warning); color: white; width: 100%; margin-top: 10px;" onclick="retryWrongAnswers()">
        Retry Wrong Questions 🔄
      </button>`;
  }
  
  actionContainer.innerHTML = actionButtonsHtml;
  showScreen('result');
}

// FIX 3 CONTINUED: retry wrong/skipped questions

function retryWrongAnswers() {
  currentQuiz = [...wrongQuestionsForRetry];
  if (settings.randomQ) currentQuiz.sort(() => Math.random() - 0.5);
  
  userAnswers = []; 
  currentIndex = 0; 
  timeSeconds = 0;
  
  document.getElementById('live-total').innerText = currentQuiz.length;
  document.getElementById('live-score').innerText = '0';
  
  startTimer();
  showScreen('quiz');
  loadQuestion();
}

// ===== FLAGGING LOGIC (WITHOUT COLORS) =====
function setQuestionFlag(flagValue) {
  const q = currentQuiz[currentIndex];
  if(!q || !flagValue) return;
  
  questionFlags[q.id] = flagValue;
  localStorage.setItem('questionFlags', JSON.stringify(questionFlags));
  console.log(`📌 Question flagged as: ${flagValue}`);
}

// ===== GEMINI AI FUNCTIONS =====

// Show Hint
async function showHint() {
  const q = currentQuiz[currentIndex];
  if(!q) return;
  
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

// Show Detailed Explanation
async function showDetailedExplanation() {
  const q = currentQuiz[currentIndex];
  if(!q) return;
  
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
    document.getElementById('exp-text').innerText = 'Error getting explanation: ' + error.message;
    document.getElementById('exp-box').style.display = 'block';
  } finally {
    explainBtn.disabled = false;
    explainBtn.innerText = originalText;
  }
}

// Toggle Discussion Panel
function toggleDiscussionPanel() {
  const panel = document.getElementById('discussion-panel');
  const btn = document.getElementById('btn-discussion-toggle');
  
  if (panel.style.display === 'none') {
    panel.style.display = 'block';
    btn.style.background = '#3b82f6';
    btn.style.color = 'white';
    loadDiscussionMessages();
    // focus on input and set up Enter key listener
    const input = document.getElementById('discussion-input');
    input.focus();
    setupEnterKeyListener();
  } else {
    panel.style.display = 'none';
    btn.style.background = '';
    btn.style.color = '';
  }
}

// Add Enter key support for discussion input
function setupEnterKeyListener() {
  const input = document.getElementById('discussion-input');
  if (input) {
    input.onkeypress = function(event) {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendDiscussionMessage();
      }
    };
  }
}

// Translate current question + options to Marathi
async function translateToMarathi() {
  const q = currentQuiz[currentIndex];
  if (!q) return;

  const btn = document.getElementById('btn-translate');
  const panel = document.getElementById('marathi-panel');

  // toggle panel visibility
  if (panel.style.display === 'block') {
    panel.style.display = 'none';
    return;
  }

  const originalTxt = btn.innerText;
  btn.disabled = true;
  btn.innerText = '⏳ Translating...';

  const questionDiv = document.getElementById('marathi-question');
  const optionsDiv = document.getElementById('marathi-options');
  questionDiv.innerText = '⏳ Translating question...';
  optionsDiv.innerHTML = '';
  
  try {
    // gather options in their correct display order
    const displayedOpts = [];
    document.querySelectorAll('.opt-btn').forEach((optBtn) => {
      const optText = optBtn.querySelector('div:nth-child(2)').innerText;
      displayedOpts.push(optText);
    });
    
    const result = await getMarathiTranslation(q.q, displayedOpts);
    
    // display question
    if (result && result.question && result.question.trim() !== '') {
      questionDiv.innerText = result.question;
    } else {
      questionDiv.innerText = '❌ Question translation not available';
    }
    
    // display options
    if (result && result.options && result.options.length > 0) {
      let optsHtml = '';
      result.options.forEach((optText, idx) => {
        if (optText && optText.trim() !== '') {
          optsHtml += `<div style="padding:10px 8px; background:white; border-radius:3px; border-left:3px solid #f59e0b; margin-bottom:6px;">
            <strong>${String.fromCharCode(65+idx)})</strong> ${optText}
          </div>`;
        }
      });
      if (optsHtml === '') {
        optsHtml = '<div style="color:#666; padding:10px;">Options not translated</div>';
      }
      optionsDiv.innerHTML = optsHtml;
    }
    
    panel.style.display = 'block';
  } catch (err) {
    console.error('Translation error', err);
    questionDiv.innerText = '❌ Error: ' + err.message;
    optionsDiv.innerHTML = '';
  } finally {
    btn.disabled = false;
    btn.innerText = '🔁 Marathi';
  }
}

// Load Discussion Messages with better formatting
function loadDiscussionMessages() {
  const q = currentQuiz[currentIndex];
  if(!q) return;
  
  const key = `discussion_${q.id}`;
  const messages = JSON.parse(localStorage.getItem(key) || '[]');
  const messagesDiv = document.getElementById('discussion-messages');
  
  let html = '';
  messages.forEach(msg => {
    const isUser = msg.sender === 'You';
    const bgColor = isUser ? '#e0f2fe' : '#f0fdf4';
    const borderColor = isUser ? '#0284c7' : '#16a34a';
    html += `<div style="margin-bottom:10px; padding:10px; background:${bgColor}; border-left:3px solid ${borderColor}; border-radius:4px;">
      <div style="font-size:12px; color:#666; font-weight:600; margin-bottom:4px;">${msg.sender}</div>
      <div style="font-size:13px; color:#333; line-height:1.5;">${msg.text}</div>
    </div>`;
  });
  
  messagesDiv.innerHTML = html || '<div style="text-align:center; color:#999; padding:20px;">Start chatting - ask anything about this question!</div>';
  // auto scroll to bottom
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
// store original texts so we can revert translations if needed
let originalQuestionText = '';
let originalOptionTexts = [];
// Send Discussion Message
async function sendDiscussionMessage() {
  const q = currentQuiz[currentIndex];
  if(!q) return;
  
  const input = document.getElementById('discussion-input');
  const userMessage = input.value.trim();
  if(!userMessage) return;
  
  const sendBtn = document.getElementById('btn-send-message');
  const originalText = sendBtn.innerText;
  sendBtn.disabled = true;
  sendBtn.innerText = '⏳ Sending...';
  
  try {
    // Save user message
    const key = `discussion_${q.id}`;
    const messages = JSON.parse(localStorage.getItem(key) || '[]');
    messages.push({ sender: 'You', text: userMessage });
    
    // Get AI response
    const aiResponse = await getDiscussionResponse(q.q, userMessage);
    messages.push({ sender: 'Teacher AI', text: aiResponse });
    
    // Save all messages
    localStorage.setItem(key, JSON.stringify(messages));
    
    // Clear input and reload
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
    if (filterType === 'wrong' && (ans.isCorrect)) return;

    let statusClass = ans.isCorrect ? 'c' : (ans.skipped ? 's' : 'w');
    let statusText = ans.isCorrect ? '✅ Correct' : (ans.skipped ? '⚠️ Skipped' : '❌ Wrong');
    
    let userOptObj = ans.q.optionsData.find(o => o.key === ans.selectedKey);
    let corrOptObj = ans.q.optionsData.find(o => o.key === ans.q.ansKey);

    let userAnswerText = ans.skipped ? "Not Attempted" : (userOptObj ? userOptObj.text : "");
    let correctAnswerText = corrOptObj ? corrOptObj.text : "";

    html += `
      <div class="rev-item ${statusClass}">
        <div style="font-size:12px; color:var(--text-muted); margin-bottom:4px; font-weight:600;">Q${i+1} • ${statusText}</div>
        <div class="rev-q">${ans.q.q}</div>
        ${!ans.isCorrect ? `<div class="rev-ans user">Your Answer: ${userAnswerText}</div>` : ''}
        <div class="rev-ans correct">Correct Answer: ${correctAnswerText}</div>
        <div class="rev-exp"><strong>Explanation:</strong> ${ans.q.exp}</div>
      </div>
    `;
  });

  list.innerHTML = html || "<p style='text-align:center;color:var(--text-muted);margin-top:20px'>No questions in this filter.</p>";
}

// ==========================================
// EXPORT ALL FUNCTIONS TO GLOBAL WINDOW SCOPE
// (HTML onclick handlers se call hone ke liye)
// ==========================================
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