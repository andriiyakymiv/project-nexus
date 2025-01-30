(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
      const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');

      if (!isMenuOpen) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = '';
      }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
  });
})();

document.querySelectorAll('.header-link').forEach(link => {
  link.addEventListener('click', () => {
      document.querySelector('.js-menu-container').classList.remove('is-open');
      document.body.style.overflow = '';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const threshold = window.visualViewport.height * 0.25;

  window.addEventListener("scroll", function () {
      if (window.scrollY > threshold) {
          header.classList.add("sticky-header");
          header.classList.remove("fixed-header");
      } else {
          header.classList.add("fixed-header");
          header.classList.remove("sticky-header");
      }
  });
});