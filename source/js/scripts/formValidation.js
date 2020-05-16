"use strict";

(function () {
  const checkToAddClass = window.util.checkToAddClass;
  const checkToRemoveClass = window.util.checkToRemoveClass;

  let isValidMail = false;
  let isAcceptedRules = true;

  function validateEmail(el, color) {
    let val = el.value;

    const reg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

    if(!reg.test(val)) {
      isValidMail = false;
      el.style.color = "#f1b0b0";
      el.style.outline = "2px solid rgb(93, 16, 7)";

      checkToAddClass(el, 'form-invalid');
      setTimeout(checkToRemoveClass, 1000, el, 'form-invalid');
    } else {
      isValidMail = true;
      el.style.color = color;
      el.style.outline = "none";
      checkToRemoveClass(el, 'form-invalid');
    }
  }

  function onCheckedValidate(el, color) {
    const label = el.nextElementSibling;

    if(!el.checked) {
      isAcceptedRules = false;
      label.style.color = "#f1b0b0";
      label.style.outline = "2px solid rgb(93, 16, 7)";

      checkToAddClass(label, 'form-invalid');
      setTimeout(checkToRemoveClass, 1000, label, 'form-invalid');
    }

    function removeInvalidColor() {
      if(el.checked) {
        isAcceptedRules = true;
        label.style.color = color;
        label.style.outline = "none";
        checkToRemoveClass(label, 'form-invalid');
      }
      el.removeEventListener('change', removeInvalidColor);
    }

    el.addEventListener('change', removeInvalidColor)
  }

  function checking(mail, check, color, form) {
    validateEmail(mail, color);
    onCheckedValidate(check, color);

    if (isValidMail == true && isAcceptedRules ==  true) {
      form.submit();
    } else {
      console.log('wrong')
    }
  }

  const footerForm = document.querySelector('.footer-form__form');
  const footerFormMailInput = document.getElementById("footer-form__mail");
  const footerAcceptRules = document.getElementById("footer-form__accept-rules");
  const footerFormSubmit = document.querySelector('.footer-form__submit-btn');

  if (footerFormMailInput) {
    footerFormMailInput.addEventListener('change', function() {
      validateEmail(footerFormMailInput, '#ffffff');
    });

    footerFormSubmit.addEventListener("click", function(evt) {
      evt.preventDefault();
      checking(footerFormMailInput, footerAcceptRules, '#ffffff', footerForm);
    });
  }

  const aboutForm = document.querySelector('.about-form');
  const aboutFormMailInput = document.getElementById("about-form__email");
  const aboutAcceptRules = document.getElementById("about-form__accept-rules");
  const aboutModalSubmit = document.querySelector(".about-form__submit-btn");

  if (aboutFormMailInput) {
    aboutFormMailInput.addEventListener('change', function() {
      validateEmail(aboutFormMailInput, "#000000");
    });

    aboutModalSubmit.addEventListener("click", function(evt) {
      evt.preventDefault();
      checking(aboutFormMailInput, aboutAcceptRules, "#000000", aboutForm);
    });
  }

  const orderModalForm = document.querySelector('.order-modal form');
  const orderModalMailInput = document.getElementById("order-modal-mail");
  const orderAcceptRules = document.getElementById("order-modal-accept");
  const orderModalSubmit = document.querySelector(".order-modal button");

  if (orderModalMailInput) {
    orderModalMailInput.addEventListener('change', function() {
      validateEmail(orderModalMailInput, '#ffffff');
    });

    orderModalSubmit.addEventListener("click", function(evt) {
      evt.preventDefault();
      checking(orderModalMailInput, orderAcceptRules, '#ffffff', orderModalForm);
    });
  }

  const feedbackModalForm = document.querySelector('.feedback-modal form');
  const feedbackModalMailInput = document.getElementById("feedback-mail");
  const feedbackAcceptRules = document.getElementById("feedback-accept-rules");
  const feedbackModalSubmit = document.querySelector(".feedback-modal button");

  if (feedbackModalMailInput) {
    feedbackModalMailInput.addEventListener('change', function() {
      validateEmail(feedbackModalMailInput, '#ffffff');
    });

    feedbackModalSubmit.addEventListener("click", function(evt) {
      evt.preventDefault();
      checking(feedbackModalMailInput, feedbackAcceptRules, '#ffffff', feedbackModalForm);
    });
  }
})();
