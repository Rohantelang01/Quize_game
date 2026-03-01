// ==========================================
// ai-features.js - AI Powered Features
// Hint, Explain, Marathi Translation, Discussion
// ==========================================

// --- HINT ---
async function showHint() {
  const q = currentQuiz[currentIndex];
  if (!q) return;

  const btn = document.getElementById('btn-hint');
  const orig = btn.innerText;
  btn.disabled = true;
  btn.innerText = '⏳ Getting hint...';

  try {
    const hint = await getHint(q.q, q.optionsData);
    document.getElementById('exp-label').innerText = '💡 Hint';
    document.getElementById('exp-text').innerText  = hint;
    document.getElementById('exp-box').style.display = 'block';
  } catch (err) {
    document.getElementById('exp-text').innerText = 'Error getting hint: ' + err.message;
    document.getElementById('exp-box').style.display = 'block';
  } finally {
    btn.disabled  = false;
    btn.innerText = orig;
  }
}

// --- DETAILED EXPLANATION ---
async function showDetailedExplanation() {
  const q = currentQuiz[currentIndex];
  if (!q) return;

  const btn = document.getElementById('btn-explain');
  const orig = btn.innerText;
  btn.disabled = true;
  btn.innerText = '⏳ Getting explanation...';

  try {
    const correctOpt = q.optionsData.find(o => o.key === q.ansKey);
    const explanation = await getExplanation(q.q, correctOpt ? correctOpt.text : 'Unknown', q.exp);
    document.getElementById('exp-label').innerText = '📖 Detailed Explanation';
    document.getElementById('exp-text').innerText  = explanation;
    document.getElementById('exp-box').style.display = 'block';
  } catch (err) {
    document.getElementById('exp-text').innerText = 'Error: ' + err.message;
    document.getElementById('exp-box').style.display = 'block';
  } finally {
    btn.disabled  = false;
    btn.innerText = orig;
  }
}

// --- MARATHI TRANSLATION ---
async function translateToMarathi() {
  const q = currentQuiz[currentIndex];
  if (!q) return;

  const btn   = document.getElementById('btn-translate');
  const panel = document.getElementById('marathi-panel');

  // Toggle off if already open
  if (panel.style.display === 'block') { panel.style.display = 'none'; return; }

  const orig = btn.innerText;
  btn.disabled = true;
  btn.innerText = '⏳ Translating...';
  document.getElementById('marathi-question').innerText = '⏳ Translating...';
  document.getElementById('marathi-options').innerHTML  = '';

  try {
    const displayedOpts = [];
    document.querySelectorAll('.opt-btn').forEach(optBtn => {
      displayedOpts.push(optBtn.querySelector('div:nth-child(2)').innerText);
    });

    const result = await getMarathiTranslation(q.q, displayedOpts);

    document.getElementById('marathi-question').innerText = result.question || '❌ Translation not available';

    if (result.options && result.options.length > 0) {
      document.getElementById('marathi-options').innerHTML = result.options.map((text, idx) => `
        <div style="padding:10px 8px;background:white;border-radius:3px;
                    border-left:3px solid #f59e0b;margin-bottom:6px;">
          <strong>${String.fromCharCode(65 + idx)})</strong> ${text}
        </div>`).join('');
    }

    panel.style.display = 'block';
  } catch (err) {
    document.getElementById('marathi-question').innerText = '❌ Error: ' + err.message;
  } finally {
    btn.disabled  = false;
    btn.innerText = orig;
  }
}

// --- DISCUSSION PANEL ---
function toggleDiscussionPanel() {
  const panel = document.getElementById('discussion-panel');
  const btn   = document.getElementById('btn-discussion-toggle');

  if (panel.style.display === 'none') {
    panel.style.display    = 'block';
    btn.style.background   = '#3b82f6';
    btn.style.color        = 'white';
    loadDiscussionMessages();
    const input = document.getElementById('discussion-input');
    input.focus();
    input.onkeypress = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendDiscussionMessage(); }
    };
  } else {
    panel.style.display  = 'none';
    btn.style.background = '';
    btn.style.color      = '';
  }
}

function loadDiscussionMessages() {
  const q = currentQuiz[currentIndex];
  if (!q) return;

  const messages    = JSON.parse(localStorage.getItem(`discussion_${q.id}`) || '[]');
  const messagesDiv = document.getElementById('discussion-messages');
  if (!messagesDiv) return;

  messagesDiv.innerHTML = messages.length
    ? messages.map(msg => {
        const isUser      = msg.sender === 'You';
        const bgColor     = isUser ? '#e0f2fe' : '#f0fdf4';
        const borderColor = isUser ? '#0284c7' : '#16a34a';
        return `<div style="margin-bottom:10px;padding:10px;background:${bgColor};
                            border-left:3px solid ${borderColor};border-radius:4px;">
          <div style="font-size:12px;color:#666;font-weight:600;margin-bottom:4px;">${msg.sender}</div>
          <div style="font-size:13px;color:#333;line-height:1.5;">${msg.text}</div>
        </div>`;
      }).join('')
    : '<div style="text-align:center;color:#999;padding:20px;">Ask anything about this question!</div>';

  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

async function sendDiscussionMessage() {
  const q = currentQuiz[currentIndex];
  if (!q) return;

  const input   = document.getElementById('discussion-input');
  const userMsg = input.value.trim();
  if (!userMsg) return;

  const sendBtn = document.getElementById('btn-send-message');
  const orig    = sendBtn.innerText;
  sendBtn.disabled  = true;
  sendBtn.innerText = '⏳ Sending...';

  try {
    const key      = `discussion_${q.id}`;
    const messages = JSON.parse(localStorage.getItem(key) || '[]');
    messages.push({ sender: 'You', text: userMsg });

    const aiResponse = await getDiscussionResponse(q.q, userMsg);
    messages.push({ sender: 'Teacher AI', text: aiResponse });

    localStorage.setItem(key, JSON.stringify(messages));
    input.value = '';
    loadDiscussionMessages();
  } catch (err) {
    alert('Error: ' + err.message);
  } finally {
    sendBtn.disabled  = false;
    sendBtn.innerText = orig;
  }
}

// Global expose
window.showHint               = showHint;
window.showDetailedExplanation = showDetailedExplanation;
window.translateToMarathi     = translateToMarathi;
window.toggleDiscussionPanel  = toggleDiscussionPanel;
window.sendDiscussionMessage  = sendDiscussionMessage;
window.loadDiscussionMessages = loadDiscussionMessages;