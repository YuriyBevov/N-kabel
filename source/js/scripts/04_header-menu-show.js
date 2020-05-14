"use strict";

(function () {
  const esc_keycode = window.util.esc_keycode;
  const checkToAddClass = window.util.checkToAddClass;

  const openBtn = document.getElementById("menu-show-btn");
  const closeBtn = document.getElementById("menu-close-btn");
  const nav = document.querySelector(".nav");
  const overflow = document.querySelector(".nav__wrapper");

  const companyItem = document.querySelector(".nav__item--company");
  const companyBtn = companyItem.querySelector(".nav__link--company");
  const companyList = companyItem.querySelector('ul');

  nav.classList.add("closed"); // закрываю меню после загрузки страницы
  companyList.classList.add('closed'); // закрываю подменю после загрузки страницы

  // удаление слушателей с документа, возвращение первоначального вида

  const removeEventListeners = function () {
    document.removeEventListener('click', hideByClick);
    document.removeEventListener('keydown', hideByEsc);

    checkToAddClass(companyList, 'closed');
    openBtn.addEventListener('click', openMenuByClick);
  }

  const showCompanyList = function() {
    companyList.classList.toggle('closed');
  }

  const openMenuByClick = function (evt) {
    evt.stopPropagation();
    nav.classList.remove("closed");
    document.addEventListener('click', hideByClick);
    document.addEventListener('keydown', hideByEsc);

    openBtn.removeEventListener('click', openMenuByClick);
    closeBtn.addEventListener('click', closeMenuByClick);
  }

  const closeMenuByClick = function () {
    nav.classList.add("closed");
    closeBtn.removeEventListener('click', closeMenuByClick);

    removeEventListeners();
  }

  //--- функции закрытия по клику и пустому месту

  const hideByClick = function (evt) {
    const nav__menu = evt.target == nav || nav.contains(evt.target);

    if (!nav__menu) {
      nav.classList.add('closed');

      removeEventListeners();
    }
  }

  const hideByEsc = function (evt) {
    if (evt.keyCode === esc_keycode) {
      nav.classList.add('closed');

      removeEventListeners();
    }
  };

  openBtn.addEventListener('click', openMenuByClick);
  companyBtn.addEventListener('click', showCompanyList);
})();
