
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('#menu');
  const navList = document.querySelector('.navigation');

  if (!menuButton || !navList) return;

  menuButton.addEventListener('click', () => {
    navList.classList.toggle('show');  // reveals/hides links
    menuButton.classList.toggle('show'); // switches ≡ to X via CSS
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
  });
});
