'use strict';

(function () {
  const isDealershipSlider = document.querySelector('.dealership-swiper-container');

  if (isDealershipSlider) {

    const indexPageSwiper = new Swiper ('.dealership-swiper-container', {
      // Optional parameters

      slidesPerView: 2,
      initialSlide: 2,
      centeredSlides: true,
      grabCursor: true,
      slideToClickedSlide: true,

      // Navigation arrows

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        // when window width is >= 836px
        836: {
          slidesPerView: 3,
        },
        // when window width is >= 1160px
        1160: {
          slidesPerView: 5,
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

  const isCertificateSlider = document.querySelector('.certificate-swiper-container');

  if (isCertificateSlider) {
    const certificatePageSwiper = new Swiper ('.certificate-swiper-container', {
      slidesPerView: 2,
      initialSlide: 2,
      centeredSlides: true,
      grabCursor: true,
      slideToClickedSlide: true,

      breakpoints: {
        // when window width is >= 836px
        836: {
          slidesPerView: 3,
        },
        // when window width is >= 1160px
        1160: {
          slidesPerView: 5,
        }
      }
    });
  }

  const isArticlesSlider = document.querySelector('.articles-swiper-container');

  if (isArticlesSlider) {
    const articlePageSwiper = new Swiper ('.articles-swiper-container', {
      slidesPerView: 2,
      spaceBetween: 12,
      freeMode: true,

      breakpoints: {
        600: {
          slidesPerView: 3,
        },
        // when window width is >= 836px
        836: {
          slidesPerView: 5,
        },
        // when window width is >= 1160px
        1439: {
          slidesPerView: 3,
        }
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
    });
  }

  const isCableDescriptionSlider = document.querySelector('.cable-description-swiper-container');

  if (isCableDescriptionSlider) {
    const articlePageSwiper = new Swiper (isCableDescriptionSlider, {
      grabCursor: true,

      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
})();
