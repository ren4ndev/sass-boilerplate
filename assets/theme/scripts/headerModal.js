/* eslint-disable no-undef */
function handleMenu() {
  const modal = document.querySelector('.header__modal');
  return modal.classList.toggle('header__modal--closed');
}
const btnMenu = document.getElementById('btn-modal');
btnMenu.addEventListener('click', handleMenu);
