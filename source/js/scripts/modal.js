"use strict";

(function () {
  const ESC_KEYCODE = 27;

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


  /*const countInput = document.getElementById('count');

  if (countInput) {
    const inputMask = IMask( countInput, {
      mask: Number,  // enable number mask

      // other options are optional with defaults below
      scale: 2,  // digits after point, 0 for integers
      signed: false,  // disallow negative
      thousandsSeparator: ' ',  // any single char

      // additional number interval options (e.g.)
      min: 1,
      max: 10000000
    });
  }*/

  /*const form = document.querySelector('.order-modal form');

  if(form) {
    const mailInput = document.getElementById('mail');
    const errorMsg = form.querySelector(".order-modal__mail-error");

    let confirm = false

    form.addEventListener('submit', (evt) => {
      if(confirm) {
        return
      } else if(!confirm) {
        evt.preventDefault();
      }
    })

    form.addEventListener('change', () => {
      if(validateEmail(mailInput.value)) {
        errorMsg.style.display = "none";
        confirm = true;
      } else {
        errorMsg.style.display = "block";
        confirm = false;
      }
    })

    function validateEmail(email) {
      var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regexp.test(String(email).toLowerCase());
    }
  }*/
