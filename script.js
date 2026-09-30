const langButtons = document.querySelectorAll('.lang');

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-fr][data-en]').forEach(el => {
    el.innerHTML = el.dataset[lang];
  });
  langButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  localStorage.setItem('zephyr-lang', lang);
}

langButtons.forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
setLanguage(localStorage.getItem('zephyr-lang') || 'fr');

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  nav.style.display = open ? 'flex' : '';
  nav.style.position = open ? 'absolute' : '';
  nav.style.top = open ? '74px' : '';
  nav.style.left = open ? '0' : '';
  nav.style.right = open ? '0' : '';
  nav.style.padding = open ? '22px' : '';
  nav.style.background = open ? '#fbfaf7' : '';
  nav.style.flexDirection = open ? 'column' : '';
});

document.querySelectorAll('input[type="date"]').forEach(input => {
  input.addEventListener('change', () => {
    if (input.value) input.style.color = 'white';
  });
});
