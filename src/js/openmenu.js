(() => {
  const burger = {
    BurgerBtnOpen: document.querySelector('#header-burger-open'),
    BurgerBtnClose: document.querySelector('#header-burger-close'),
    modal: document.querySelector('.modal'),
    burger: document.querySelector('.navigation-wrapper'),
    body: document.querySelector('body'),
  };
  burger.BurgerBtnOpen.addEventListener('click', togleBurger);
  burger.BurgerBtnClose.addEventListener('click', togleBurger);
  function togleBurger() {
    burger.burger.classList.toggle('is-open');
    burger.modal.classList.toggle('is-open-modal');
  }
})();
