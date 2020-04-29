"use strict";

(function () {
  const ESC_KEYCODE = 27;

  const orderBtn = document.querySelectorAll('.order-btn');
  const modal = document.querySelector(".order-modal");
  const overflow = document.querySelector('.order-modal');

  const removeEventListeners = function () {
    document.removeEventListener('click', hideByClick);
    document.removeEventListener('keydown', hideByEsc);
  }

  const showByClick = function (event) {
    event.preventDefault();
    modal.classList.remove('hidden')

    document.addEventListener('click', hideByClick);
    document.addEventListener('keydown', hideByEsc);
  }

  const hideByClick = function (evt) {
    if(evt.target === overflow) {
      modal.classList.add('hidden');

      removeEventListeners();
    }
  }

  const hideByEsc = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      modal.classList.add('hidden');

      removeEventListeners();
    }
  };

  for (let i = 0; i < orderBtn.length; i++) {
    orderBtn[i].addEventListener('click', showByClick)
  }

  const fileInput = document.getElementById('file-upload');
  const fileName = document.querySelector('.order-modal__upload-files');

  if (fileInput) {
    fileInput.addEventListener('change', function(event) {
      const input = event.target;

      for (let i = 0; i < input.files.length; i++) {
        fileName.textContent = input.files[i].name;
      }
    });
  }
})();
