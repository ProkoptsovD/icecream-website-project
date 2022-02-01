(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelector('.menu-container'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.forEach(btn => btn.addEventListener('click', toggleModal));

  function toggleModal() {
    refs.modal.classList.toggle('menu-container--is-hidden');
    // document.body.classList.toggle('is-hidden');
  }
})();
