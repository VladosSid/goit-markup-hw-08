// (() => {
//   const openMenuBtnRef = document.querySelector('[open-menu-button]');

//   const crossMenuBtnRef = document.querySelector('[cross-menu-button]');

//   const mobileMenuRef = document.querySelector('[data-menu]');

//   openMenuBtnRef.addEventListener('click', () => {
//     const expanded = openMenuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     openMenuBtnRef.classList.toggle('is-open');
//     openMenuBtnRef.setAttribute('aria-expanded', !expanded);

//     mobileMenuRef.classList.toggle('is-open');

//     crossMenuBtnRef.classList.toggle('is-open');
//     crossMenuBtnRef.setAttribute('aria-expanded', !expanded);
//   });

//   crossMenuBtnRef.addEventListener('click', () => {
//     const expanded = openMenuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     openMenuBtnRef.classList.toggle('is-open');
//     openMenuBtnRef.setAttribute('aria-expanded', !expanded);

//     mobileMenuRef.classList.toggle('is-open');

//     crossMenuBtnRef.classList.toggle('is-open');
//     crossMenuBtnRef.setAttribute('aria-expanded', !expanded);

//     const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   });
// })();

//  ----- js от Александра
(() => {
  const mobileMenu = document.querySelector('.header__container');
  const openMenuBtn = document.querySelector('.header__batton-menu');
  const closeMenuBtn = document.querySelector('.header__batton-cross');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'enableBodyScroll' : 'disableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

//  -------- js от Григория

// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('.menu-open-btn'),
//     closeMenuBtn: document.querySelector('.menu-close-btn'),
//     menu: document.querySelector('.mob-menu'),
//     body: document.querySelector('body'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle('is-hidden');
//     refs.body.classList.toggle('no-scroll');
//   }
// })();
