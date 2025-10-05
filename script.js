// Update year in footer
const yearElem = document.getElementById('year');
if (yearElem) yearElem.textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    if (!nav) return;
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
  });
}

// Basic contact form submission handler
function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    alert('Please complete all fields');
    return false;
  }
  alert('Thanks — your message has been queued. For direct inquiries, please email malikLLC.usa@gmail.com.');
  event.target.reset();
  return false;
}

// AI assistant widget
const aiToggle = document.getElementById('ai-toggle');
const aiPanel = document.getElementById('ai-panel');
const aiForm = document.getElementById('ai-form');
const aiInput = document.getElementById('ai-input');
const aiMessages = document.getElementById('ai-messages');

if (aiToggle && aiPanel) {
  aiToggle.addEventListener('click', () => {
    const isHidden = aiPanel.hasAttribute('hidden');
    if (isHidden) {
      aiPanel.removeAttribute('hidden');
      aiToggle.setAttribute('aria-expanded', 'true');
      aiInput?.focus();
    } else {
      aiPanel.setAttribute('hidden', '');
      aiToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function addMsg(text, role = 'bot') {
  const div = document.createElement('div');
  div.className = `msg ${role}`;
  div.textContent = text;
  aiMessages.appendChild(div);
  aiMessages.scrollTop = aiMessages.scrollHeight;
}

function aiReply(userText) {
  // Simple on-page intents for a helpful demo (no external calls)
  const t = userText.toLowerCase();
  if (t.includes('project') || t.includes('portfolio')) {
    return 'I’ve led audit automation pilots, Quran.ai concept, and Malik LLC rental ops. See Projects.';
  }
  if (t.includes('availability') || t.includes('book') || t.includes('consult')) {
    return 'I’m available for select consulting and pilots. Email malikLLC.usa@gmail.com to schedule.';
  }
  if (t.includes('research') || t.includes('bias') || t.includes('dba')) {
    return 'My DBA research explores cognitive biases in auditor judgment and mitigation approaches.';
  }
  if (t.includes('ai') || t.includes('rag') || t.includes('risk')) {
    return 'I design RAG and auditable AI for risk/compliance with strong governance controls.';
  }
  return 'Thanks! I’ll get back to you via email if you leave your contact in the form.';
}

function aiSubmit(e) {
  e.preventDefault();
  const q = aiInput.value.trim();
  if (!q) return false;
  addMsg(q, 'user');
  // Simulate thinking delay for UX
  setTimeout(() => addMsg(aiReply(q), 'bot'), 300);
  aiInput.value = '';
  return false;
}
