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
})();
