// update year in footer
const yearElem = document.getElementById('year');
if (yearElem) {
  yearElem.textContent = new Date().getFullYear();
}

// handle nav toggle on mobile
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    if (!nav) return;
    // toggle display
    if (nav.style.display === 'flex') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
    }
  });
}

// basic contact form submission handler
function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    alert('Please complete all fields');
    return false;
  }
  alert(
    'Thanks — your message has been queued. For direct inquiries, please email malikLLC.usa@gmail.com.'
  );
  // reset the form
  event.target.reset();
  return false;
}
