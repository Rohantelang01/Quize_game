// ==========================================
// quiz.js / main.js KA PART 
// ==========================================

// Import Firestore service
import { loadQuestionsFromFirestore } from './firestore-service.js';

let quizDatabase = []; 
let filteredQuestions = [];
let currentQuiz = [];
let currentIndex = 0;
let userAnswers = []; 
let timerInterval;
let timeSeconds = 0;
let wrongQuestionsForRetry = []; // Galat jawabo ko store karne ke liye

let settings = { pyOnly: false, randomQ: true, randomO: true };
const filterGroups = ['subject', 'chapter', 'section', 'topic', 'subtopic', 'exam', 'diff'];

// --- 1. DATA FLATTENING LOGIC (Ab Firestore service mein handle ho raha hai) ---
// Ye function ab use nahi hoga kyunki firestore-service.js apne aap flatten kar deta hai


// --- 2. INITIALIZATION & CACHE MEMORY ---
window.onload = async () => {
  try {
    // Firestore se questions load karna
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
    alert("Data load karte time error aya. Console dekho.");
  }
};

// LocalStorage se pichla state check karna
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
      resumeBtn.innerText = 'Pichla Quiz Resume ↺';
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

// Pichla quiz wahi se shuru karna
function resumeQuiz() {
  const saved = localStorage.getItem('lucentQuizProgress');
  if(saved) {
    const state = JSON.parse(saved);
    currentQuiz = state.currentQuiz;
    currentIndex = state.currentIndex;
    userAnswers = state.userAnswers;
    timeSeconds = state.timeSeconds;
    
    document.getElementById('live-total').innerText = currentQuiz.length;
    // Score wapas calculate karna
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
  container.innerHTML = chipsHtml;
}

function togglePY() { settings.pyOnly = !settings.pyOnly; document.getElementById('py-row').classList.toggle('active'); renderAllChips(); updateAvailableCount(); }
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
    return match;
  });

  const countEl = document.getElementById('q-count');
  const btn = document.getElementById('btn-start');
  countEl.innerText = filteredQuestions.length;
  if (filteredQuestions.length === 0) { btn.disabled = true; btn.innerText = "No Questions Available"; countEl.style.color = "var(--text-muted)"; } 
  else { btn.disabled = false; btn.innerText = "Quiz Shuru Karein →"; countEl.style.color = "var(--primary)"; }
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
    saveProgress(); // Har second timer ka state save ho raha hai
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
  document.getElementById('q-tags').innerHTML = tagsHtml;
  document.getElementById('q-text').innerText = q.q;
  
  let currentOptions = [...q.optionsData];
  if (settings.randomO) currentOptions.sort(() => Math.random() - 0.5); 

  const letters = ['A', 'B', 'C', 'D'];
  let optsHtml = '';
  currentOptions.forEach((opt, idx) => {
    // FIX 1: data-key="${opt.key}" yahan lagaya gaya hai exact match ke liye
    optsHtml += `
      <button class="opt-btn" id="opt-${idx}" data-key="${opt.key}" onclick="selectOption(${idx}, '${opt.key}', '${q.ansKey}')">
        <div class="opt-letter">${letters[idx]}</div>
        <div>${opt.text}</div>
      </button>
    `;
  });
  
  document.getElementById('options-grid').innerHTML = optsHtml;
  document.getElementById('btn-skip').style.display = 'block';
  document.getElementById('btn-next').style.display = 'none';
  document.getElementById('exp-box').style.display = 'none';
  
  saveProgress(); // Question load hone par progress save
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
  saveProgress(); // Answer dene ke baad progress save
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
  if(confirm("Kya aap sach mein exit karna chahte hain? Aapki progress delete ho jayegi.")) {
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
        wrongQuestionsForRetry.push(ans.q); // Galat wale retry me jayenge
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
  
  // Agar koi galat jawab diya hai tabhi ye retry button aayega
  if(wrongQuestionsForRetry.length > 0) {
      actionButtonsHtml += `
      <button class="btn btn-lg" style="background: var(--warning); color: white; width: 100%; margin-top: 10px;" onclick="retryWrongAnswers()">
        Retry Wrong Questions 🔄
      </button>`;
  }
  
  actionContainer.innerHTML = actionButtonsHtml;
  showScreen('result');
}

// FIX 3 CONTINUED: Galat Jawabo ko firse khelna
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
        ${!ans.isCorrect ? `<div class="rev-ans user">Aapka Jawab: ${userAnswerText}</div>` : ''}
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