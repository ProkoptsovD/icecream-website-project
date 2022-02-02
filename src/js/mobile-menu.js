// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelectorAll('[data-modal-close]'),
//     modal: document.querySelector('.menu-container'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.forEach(btn => btn.addEventListener('click', toggleModal));

//   function toggleModal() {
//     refs.modal.classList.toggle('menu-container--is-hidden');
//     document.body.classList.toggle('is-hidden');
//   }
// })();

(() => {
  const mobileMenu = document.querySelector('.menu-container');
  const openMenuBtn = document.querySelector('[data-modal-open]');
  const closeMenuBtn = document.querySelectorAll('[data-modal-close]');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('menu-container--is-hidden');
    // headerMenuIcon.classList.toggle('is-hidden');
    // headerBuyButton.classList.toggle('is-hidden');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  const mediaQuery = window.matchMedia('(min-width: 1279px)');

  if (!mediaQuery.matches) {
    openMenuBtn.addEventListener('click', toggleMenu);
    console.log(mediaQuery);
    closeMenuBtn.forEach(btn => btn.addEventListener('click', toggleMenu));
  }

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 1279px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.disableBodyScroll(document.body);
    document.body.style.overflow = 'auto';
  });
})();
