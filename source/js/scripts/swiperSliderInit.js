'use strict';

(function () {
  const mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters

    // loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    grabCursor: true,
    slideToClickedSlide: true,
    initialSlide: 0,

    // Navigation arrows

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 2,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 40,
        initialSlide: 2,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 50,
        initialSlide: 2,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 80,
        initialSlide: 2,
      }
    }
  });
})();
