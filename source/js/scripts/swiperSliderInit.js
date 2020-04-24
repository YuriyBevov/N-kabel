'use strict';

(function () {
  const isDealershipSlider = document.querySelector('.dealership-swiper-container');

  if (isDealershipSlider) {

    const indexPageSwiper = new Swiper ('.dealership-swiper-container', {
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
  }

  const isUrgentSlider = document.querySelector('.urgent-swiper-container');

  if (isUrgentSlider) {
    const urgentPageSwiper = new Swiper ('.urgent-swiper-container', {
      slidesPerView: 1,

      navigation: {
        nextEl: '.urgent-swiper-button-next',
        prevEl: '.urgent-swiper-button-prev',
      },

      breakpoints: {
        // when window width is >= 836px
        836: {
          slidesPerView: 2,
        },
        // when window width is >= 1160px
        1160: {
          slidesPerView: 3,
        }
      }
    });
  }
})();
