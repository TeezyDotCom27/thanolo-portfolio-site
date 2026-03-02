
// Mobile nav toggle
const toggleBtn = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
if (toggleBtn && menu){
  toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('show');
  });
}
// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl){ yearEl.textContent = new Date().getFullYear(); }
