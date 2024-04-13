const swiper = new Swiper('.mySwiper', {
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1280: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
