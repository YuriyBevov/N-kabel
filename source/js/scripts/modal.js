"use strict";

(function () {
  const ESC_KEYCODE = window.util.ESC_KEYCODE;

  const orderBtn = document.querySelectorAll('.order-btn');
  const orderModal = document.querySelector(".order-modal");
  const feedbackBtn = document.querySelectorAll('.feedback__btn');
  const feedbackModal = document.querySelector(".feedback-modal");

  let modal = null;

  const removeEventListeners = function () {
    document.removeEventListener('click', hideByClick);
    document.removeEventListener('keydown', hideByEsc);
  }

  const showByClick = function (el) {
    el.classList.remove('hidden')

    document.addEventListener('click', hideByClick);
    document.addEventListener('keydown', hideByEsc);
  }

  const hideByClick = function (evt) {
    if(evt.target === modal) {
      modal.classList.add('hidden');

      removeEventListeners();
      modal = null;
    }
  }

  const hideByEsc = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
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

  const fileUpload = document.querySelector('.modal__group--upload input');
  const fileName = document.querySelector('.modal__group--upload p');

  if (fileUpload) {
    fileUpload.addEventListener('change', function(event) {
      const input = event.target;

      for (let i = 0; i < input.files.length; i++) {
        fileName.textContent = input.files[i].name;
      }
    });
  }
})();
