"use strict";

(function () {
  const openBtn = document.getElementById("menu-show-btn");
  const closeBtn = document.getElementById("menu-close-btn");
  const nav = document.querySelector(".nav");

  nav.classList.add("closed");

  const openMenuByClick = function () {
    nav.classList.remove("closed");
    nav.classList.add("opened");
    openBtn.removeEventListener('click', openMenuByClick);
    closeBtn.addEventListener('click', closeMenuByClick);
  }

  const closeMenuByClick = function () {
    nav.classList.remove("opened");
    nav.classList.add("closed");
    closeBtn.removeEventListener('click', closeMenuByClick);
    openBtn.addEventListener('click', openMenuByClick);
  }

  openBtn.addEventListener('click', openMenuByClick);

  const companyItem = nav.querySelector(".nav__item--company");
  const companyBtn = companyItem.querySelector(".nav__link--company");
  const companyList = companyItem.querySelector('ul');

  companyList.classList.add('closed');

  const showCompanyList = function() {
    companyList.classList.toggle('closed');
  }

  companyBtn.addEventListener('click', showCompanyList);
})();
