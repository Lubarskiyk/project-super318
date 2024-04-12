(() => {
  const burger = {
    BurgerBtnOpen: document.querySelector('#header-burger-open'),
    BurgerBtnClose: document.querySelector('#header-burger-close'),
    modal: document.querySelector('.modal'),
    body: document.querySelector('body'),
    burger: document.querySelector('.navigation-wrapper'),
  };
  burger.BurgerBtnOpen.addEventListener('click', togleBurger);
  burger.BurgerBtnClose.addEventListener('click', togleBurger);
  function togleBurger() {
    burger.burger.classList.toggle('is-open');
    burger.modal.classList.toggle('is-open-modal');
    burger.body.classList.toggle('lock');
  }
})();
