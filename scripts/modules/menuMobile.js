import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const hamMenu = document.querySelector('.ham-menu');

  const offScreenMenu = document.querySelector('.off-screen-menu');

  hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    outsideClick(offScreenMenu, ['click'], () => {
      hamMenu.classList.remove('active');
      offScreenMenu.classList.remove('active');
    })
  })
}

