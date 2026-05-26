const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const toTop = document.getElementById('toTop');
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    toTop.style.display = 'flex';
  } else {
    toTop.style.display = 'none';
  }
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

contactForm.addEventListener('submit', () => {
  formNote.textContent = 'E-Mail-Programm wird geöffnet. Falls nichts passiert, schreiben Sie direkt an info@bea3shpk.com.';
});
