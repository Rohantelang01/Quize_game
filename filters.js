// ==========================================
// filters.js - Filter & Multi-Select Logic
// ==========================================

const filterGroups = ['subject', 'chapter', 'section', 'topic', 'subtopic', 'exam', 'diff'];

function setupMultiSelects() {
  const getUnique = (key) => [...new Set(quizDatabase.map(q => q[key]))].filter(Boolean).sort();
  createMultiSelect('subject',  getUnique('subject'));
  createMultiSelect('chapter',  getUnique('chapter'));
  createMultiSelect('section',  getUnique('section'));
  createMultiSelect('topic',    getUnique('topic'));
  createMultiSelect('subtopic', getUnique('subtopic'));
  createMultiSelect('exam',     getUnique('exam'));
  createMultiSelect('diff',     getUnique('diff'));

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.multi-select')) {
      document.querySelectorAll('.ms-list').forEach(l => l.classList.remove('show'));
      document.querySelectorAll('.ms-header').forEach(h => h.classList.remove('active'));
    }
  });
}

function createMultiSelect(group, options) {
  const wrapper = document.getElementById(`ms-wrapper-${group}`);
  if (!wrapper) return;

  let html = `<div class="multi-select" id="ms-${group}">
    <div class="ms-header" onclick="toggleMS('${group}')">
      <span class="ms-header-text" id="ms-text-${group}">All Selected</span>
    </div>
    <div class="ms-list" id="ms-list-${group}">
      <label class="ms-label">
        <input type="checkbox" id="cb-all-${group}" value="All" checked
               onchange="handleCheckboxChange('${group}', 'All')">
        <strong>All</strong>
      </label>`;

  options.forEach(opt => {
    const cbId = `cb-${group}-${opt.replace(/[^a-zA-Z0-9]/g, '-')}`;
    html += `<label class="ms-label">
      <input type="checkbox" class="cb-item-${group}" id="${cbId}" value="${opt}"
             onchange="handleCheckboxChange('${group}', '${opt}')">
      ${opt}
    </label>`;
  });

  html += `</div></div>`;
  wrapper.innerHTML = html;
}

function toggleMS(group) {
  document.querySelectorAll('.ms-list').forEach(l => {
    if (l.id !== `ms-list-${group}`) l.classList.remove('show');
  });
  document.querySelectorAll('.ms-header').forEach(h => {
    if (h.parentElement.id !== `ms-${group}`) h.classList.remove('active');
  });
  document.getElementById(`ms-list-${group}`).classList.toggle('show');
  document.querySelector(`#ms-${group} .ms-header`).classList.toggle('active');
}

function handleCheckboxChange(group, changedValue) {
  const allCb   = document.getElementById(`cb-all-${group}`);
  const itemCbs = document.querySelectorAll(`.cb-item-${group}`);

  if (changedValue === 'All') {
    if (allCb.checked) itemCbs.forEach(cb => cb.checked = false);
    else allCb.checked = true;
  } else {
    const anyChecked = Array.from(itemCbs).some(cb => cb.checked);
    allCb.checked = !anyChecked;
  }

  updateHeaderText(group);
  refreshHierarchicalFilters();
  updateAvailableCount();
}

function removeFilter(group, value, cbId) {
  document.getElementById(cbId).checked = false;
  const anyChecked = Array.from(document.querySelectorAll(`.cb-item-${group}`)).some(cb => cb.checked);
  if (!anyChecked) document.getElementById(`cb-all-${group}`).checked = true;
  updateHeaderText(group);
  refreshHierarchicalFilters();
  updateAvailableCount();
}

function updateHeaderText(group) {
  const allCb   = document.getElementById(`cb-all-${group}`);
  const itemCbs = document.querySelectorAll(`.cb-item-${group}`);
  const textEl  = document.getElementById(`ms-text-${group}`);
  if (allCb.checked) textEl.innerText = "All Selected";
  else textEl.innerText = `${Array.from(itemCbs).filter(cb => cb.checked).length} Selected`;
  renderAllChips();
}

// Cascading / Hierarchical Filter
function refreshHierarchicalFilters() {
  const hierarchy = ['subject', 'chapter', 'section', 'topic', 'subtopic'];

  for (let i = 0; i < hierarchy.length; i++) {
    const currentGroup = hierarchy[i];
    const parentFilters = {};

    for (let j = 0; j < i; j++) {
      const selected = getSelectedFilters(hierarchy[j]);
      if (selected.length > 0) parentFilters[hierarchy[j]] = selected;
    }

    const validValues = new Set();
    quizDatabase.forEach(q => {
      let matches = true;
      for (const [key, vals] of Object.entries(parentFilters)) {
        if (!vals.includes(q[key])) { matches = false; break; }
      }
      if (matches) validValues.add(q[currentGroup]);
    });

    document.querySelectorAll(`.cb-item-${currentGroup}`).forEach(cb => {
      if (validValues.has(cb.value)) {
        cb.parentElement.style.display = 'flex';
      } else {
        cb.checked = false;
        cb.parentElement.style.display = 'none';
      }
    });

    const anyChecked = Array.from(document.querySelectorAll(`.cb-item-${currentGroup}`)).some(cb => cb.checked);
    if (!anyChecked) {
      document.getElementById(`cb-all-${currentGroup}`).checked = true;
      document.getElementById(`ms-text-${currentGroup}`).innerText = 'All Selected';
    }
  }
}

function renderAllChips() {
  const container = document.getElementById('active-filters');
  let html = '';

  filterGroups.forEach(group => {
    if (!document.getElementById(`cb-all-${group}`).checked) {
      document.querySelectorAll(`.cb-item-${group}:checked`).forEach(cb => {
        const gName = group.charAt(0).toUpperCase() + group.slice(1);
        html += `<div class="filter-chip">
          <span class="chip-group-name">${gName}:</span> ${cb.value}
          <div class="chip-remove" onclick="removeFilter('${group}', '${cb.value}', '${cb.id}')">✕</div>
        </div>`;
      });
    }
  });

  if (settings.pyOnly) {
    html += `<div class="filter-chip" style="background:var(--warning);color:white;border:none;">
      <span class="chip-group-name" style="color:white;">MODE:</span> PYQ Only
      <div class="chip-remove" style="background:rgba(255,255,255,0.3);color:white;" onclick="togglePY()">✕</div>
    </div>`;
  }

  if (settings.flagFilter) {
    html += `<div class="filter-chip">
      <span class="chip-group-name">FLAG:</span> ${settings.flagFilter}
      <div class="chip-remove" onclick="toggleFlagFilter(null)">✕</div>
    </div>`;
  }

  container.innerHTML = html;
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
    filterGroups.forEach(g => {
      if (filters[g].length > 0 && !filters[g].includes(q[g])) match = false;
    });
    if (settings.pyOnly && !q.py) match = false;
    if (settings.flagFilter && getQuestionFlag(q.id) !== settings.flagFilter) match = false;
    return match;
  });

  const countEl = document.getElementById('q-count');
  const btn     = document.getElementById('btn-start');
  countEl.innerText = filteredQuestions.length;

  if (filteredQuestions.length === 0) {
    btn.disabled = true;
    btn.innerText = "No Questions Available";
    countEl.style.color = "var(--text-muted)";
  } else {
    btn.disabled = false;
    btn.innerText = "Start Quiz →";
    countEl.style.color = "var(--primary)";
  }
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
  else               { settings.randomO = !settings.randomO; document.getElementById('t-ro').classList.toggle('active'); }
}

function resetFilters() {
  filterGroups.forEach(group => {
    document.getElementById(`cb-all-${group}`).checked = true;
    document.querySelectorAll(`.cb-item-${group}`).forEach(cb => {
      cb.checked = false;
      cb.parentElement.style.display = 'flex';
    });
    updateHeaderText(group);
  });
  if (settings.pyOnly)    { settings.pyOnly = false;    document.getElementById('py-row').classList.remove('active'); }
  if (settings.flagFilter){ settings.flagFilter = null; document.querySelectorAll('.flag-btn').forEach(b => b.classList.remove('active')); }
  renderAllChips();
  updateAvailableCount();
}

// Global expose
window.toggleMS             = toggleMS;
window.handleCheckboxChange = handleCheckboxChange;
window.removeFilter         = removeFilter;
window.togglePY             = togglePY;
window.toggleFlagFilter     = toggleFlagFilter;
window.toggleMode           = toggleMode;
window.resetFilters         = resetFilters;