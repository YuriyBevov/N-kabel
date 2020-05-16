"use strict";

(function () {
  const esc_keycode = window.util.esc_keycode;
  const fileUpload = window.util.fileUpload;

  const orderBtn = document.querySelectorAll('.order-btn');
  const orderModal = document.querySelector(".order-modal");
  const feedbackBtn = document.querySelectorAll('.feedback__btn');
  const feedbackModal = document.querySelector(".feedback-modal");

  let modal = null; // тут будет активная модалка

  const removeEventListeners = function () {
    document.removeEventListener('click', hideByClick);
    document.removeEventListener('keydown', hideByEsc);
  }

  const showByClick = function (el) {
    el.classList.remove('hidden')

    const closeBtn = modal.querySelector('.modal__closeBtn');

    document.addEventListener('click', hideByClick);
    document.addEventListener('keydown', hideByEsc);

    closeBtn.addEventListener('click', closeByBtnClick)
  }

  const hideByClick = function (evt) {
    if(evt.target === modal) {
      modal.classList.add('hidden');

      removeEventListeners();
      modal = null;
    }
  }

  const closeByBtnClick = function () {
    modal.classList.add("hidden");

    removeEventListeners();
    modal = null
    this.removeEventListener("click", closeByBtnClick);
  }

  const hideByEsc = function (evt) {
    if (evt.keyCode === esc_keycode) {
      modal.classList.add('hidden');

      removeEventListeners();
      modal = null;
    }
  };

  for (let i = 0; i < orderBtn.length; i++) {
    orderBtn[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      modal = orderModal;
      showByClick(modal);
    })
  }

  for (let i = 0; i < feedbackBtn.length; i++) {
    feedbackBtn[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      modal = feedbackModal;
      showByClick(modal);
    })
  }

  const input = document.querySelector('.modal__group--upload input');
  const fileName = document.querySelector(".modal__group--upload label");

  if (fileUpload) {
    fileUpload(input, fileName);
  }
})();
