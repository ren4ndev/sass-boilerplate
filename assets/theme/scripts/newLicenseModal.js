/* eslint-disable no-undef */
function handleOpenModal() {
  const modal = document.querySelector('.c-new-license');
  return modal.classList.remove('c-new-license--close');
}

function handleCloseModal() {
  const modal = document.querySelector('.c-new-license');
  return modal.classList.add('c-new-license--close');
}

function setEvents() {
  const btnOpen = document.getElementById('btn-open-license');
  const btnsClose = document.querySelectorAll('.btn-close-license');
  btnOpen.addEventListener('click', handleOpenModal);
  btnsClose.forEach((btn) => {
    btn.addEventListener('click', handleCloseModal);
  });
}

window.onload = () => {
  setEvents();
};
