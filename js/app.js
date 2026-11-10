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

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const header = document.querySelector('.site-header');
const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// Only opt elements into reveal after the observer is successfully initialized.
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.08 });
  document.querySelectorAll('.section-heading, .research-row, .project, .toolkit > div, .education, .publication').forEach(element => {
    element.classList.add('reveal-ready', 'reveal-pending');
    observer.observe(element);
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) {
      document.querySelectorAll('.reveal-pending').forEach(element => element.classList.add('is-visible'));
      observer.disconnect();
    }
  });
}

const typing = document.querySelector('.typing-text');
if (typing && !reducedMotion.matches) {
  const roles = ['Materials scientist', 'Researcher', 'Scientific software builder'];
  let role = 0;
  let deleting = true;
  let timer;
  const type = () => {
    if (reducedMotion.matches) {
      typing.textContent = roles[0];
      return;
    }
    const current = roles[role];
    if (deleting) {
      typing.textContent = typing.textContent.slice(0, -1);
      if (!typing.textContent) {
        deleting = false;
        role = (role + 1) % roles.length;
      }
    } else {
      typing.textContent = current.slice(0, typing.textContent.length + 1);
      if (typing.textContent === current) {
        deleting = true;
        timer = setTimeout(type, 2200);
        return;
      }
    }
    timer = setTimeout(type, deleting ? 40 : 80);
  };
  timer = setTimeout(type, 2200);
  reducedMotion.addEventListener('change', event => {
    if (event.matches) {
      clearTimeout(timer);
      typing.textContent = roles[0];
    }
  });
}
