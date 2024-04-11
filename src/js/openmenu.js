(() => {
  const burger = {
    BurgerBtn: document.querySelector('#header-burger'),
    burger: document.querySelectorAll('.header, .header-menu, .header-burger'),
    body: document.querySelector('body'),
  };

  burger.BurgerBtn.addEventListener('click', togleBurger);
  function togleBurger() {
    for (let i = 0; i < burger.burger.length; i++) {
      burger.burger[i].classList.toggle('is-open-menu');
    }
  }
})();
