const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Zamknij menu' : 'Otwórz menu');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

const form = document.querySelector('#contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const message = String(data.get('message') || '').trim();
  // Zmień ten adres na właściwy przed publikacją.
  const recipient = 'mchachowski@tlen.pl';
  if (!recipient || recipient.includes('TU_WPISZ')) {
    alert('Przed użyciem formularza właściciel strony musi wpisać właściwy adres e-mail w pliku script.js.');
    return;
  }
  const subject = encodeURIComponent('Zapytanie ze strony — ' + name);
  const body = encodeURIComponent('Imię i nazwisko: ' + name + '\nE-mail: ' + email + '\n\nWiadomość:\n' + message);
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
