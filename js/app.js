document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (menu && links) {
  menu.hidden = false;
  const closeMenu = () => {
    links.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
  };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    links.classList.toggle('is-open', open);
    menu.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
}
