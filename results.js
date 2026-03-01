// ==========================================
// results.js - Results & Review Logic
// ==========================================

let wrongQuestionsForRetry = [];

// --- FINISH QUIZ ---
function finishQuiz() {
  clearInterval(timerInterval);
  clearProgress();

  let correct = 0, wrong = 0, skip = 0;
  const subjectScores = {};
  wrongQuestionsForRetry = [];

  userAnswers.forEach(ans => {
    if (!subjectScores[ans.q.subject])
      subjectScores[ans.q.subject] = { total: 0, correct: 0 };

    subjectScores[ans.q.subject].total++;

    if (ans.skipped) {
      skip++;
      wrongQuestionsForRetry.push(ans.q);
    } else if (ans.isCorrect) {
      correct++;
      subjectScores[ans.q.subject].correct++;
    } else {
      wrong++;
      wrongQuestionsForRetry.push(ans.q);
    }
  });

  const total = currentQuiz.length;
  const acc   = total > 0 ? Math.round((correct / (total - skip)) * 100) || 0 : 0;

  document.getElementById('res-score').innerText   = correct;
  document.getElementById('res-total').innerText   = total;
  document.getElementById('res-correct').innerText = correct;
  document.getElementById('res-wrong').innerText   = wrong;
  document.getElementById('res-skip').innerText    = skip;
  document.getElementById('res-acc').innerText     = `${acc}%`;

  // Result message
  let msg = "Keep practicing!";
  if (wrongQuestionsForRetry.length === 0) msg = "Perfect Score! 🎉";
  else if (acc > 80) msg = "Excellent performance! 🌟";
  else if (acc > 50) msg = "Good job! 👍";
  document.getElementById('res-msg').innerText = msg;

  // Subject breakdown
  document.getElementById('breakdown-rows').innerHTML = Object.entries(subjectScores)
    .map(([subj, data]) => `
      <div style="display:flex;justify-content:space-between;margin-bottom:8px;
                  border-bottom:1px solid var(--border);padding-bottom:4px;">
        <span>${subj}</span><strong>${data.correct} / ${data.total}</strong>
      </div>`)
    .join('');

  // Action buttons (retry button only if wrong answers exist)
  const actionContainer = document.querySelector('.result-actions');
  actionContainer.style.flexWrap = 'wrap';
  actionContainer.innerHTML = `
    <button class="btn btn-ghost btn-lg" style="min-width:45%;" onclick="showScreen('select')">← New Quiz</button>
    <button class="btn btn-primary btn-lg" style="min-width:45%;" onclick="showReview()">Review Answers →</button>
    ${wrongQuestionsForRetry.length > 0 ? `
    <button class="btn btn-lg"
            style="background:var(--warning);color:white;width:100%;margin-top:10px;"
            onclick="retryWrongAnswers()">
      Retry Wrong Questions 🔄
    </button>` : ''}
  `;

  showScreen('result');
}

// --- RETRY WRONG ANSWERS ---
function retryWrongAnswers() {
  currentQuiz  = [...wrongQuestionsForRetry];
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

// --- REVIEW ---
function showReview() {
  setRevFilter('all');
  showScreen('review');
}

function setRevFilter(filterType) {
  document.querySelectorAll('.rev-pill').forEach(p => p.classList.remove('active'));
  document.querySelector(`.rev-pill[data-f="${filterType}"]`).classList.add('active');

  const list = document.getElementById('review-list');
  let html = '';

  userAnswers.forEach((ans, i) => {
    if (filterType === 'correct' && !ans.isCorrect) return;
    if (filterType === 'wrong'   &&  ans.isCorrect) return;

    const statusClass = ans.isCorrect ? 'c' : (ans.skipped ? 's' : 'w');
    const statusText  = ans.isCorrect ? '✅ Correct' : (ans.skipped ? '⚠️ Skipped' : '❌ Wrong');

    const userOptObj  = ans.q.optionsData.find(o => o.key === ans.selectedKey);
    const corrOptObj  = ans.q.optionsData.find(o => o.key === ans.q.ansKey);
    const userAns     = ans.skipped ? "Not Attempted" : (userOptObj ? userOptObj.text : "");
    const correctAns  = corrOptObj ? corrOptObj.text : "";

    html += `<div class="rev-item ${statusClass}">
      <div style="font-size:12px;color:var(--text-muted);margin-bottom:4px;font-weight:600;">
        Q${i + 1} • ${statusText}
      </div>
      <div class="rev-q">${ans.q.q}</div>
      ${!ans.isCorrect ? `<div class="rev-ans user">Your Answer: ${userAns}</div>` : ''}
      <div class="rev-ans correct">Correct Answer: ${correctAns}</div>
      <div class="rev-exp"><strong>Explanation:</strong> ${ans.q.exp}</div>
    </div>`;
  });

  list.innerHTML = html || `<p style='text-align:center;color:var(--text-muted);margin-top:20px'>
    No questions in this filter.</p>`;
}

// Global expose
window.finishQuiz         = finishQuiz;
window.retryWrongAnswers  = retryWrongAnswers;
window.showReview         = showReview;
window.setRevFilter       = setRevFilter;