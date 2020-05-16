"use strict";

(function () {
  const checking = window.validation.checking;
  const validateEmail = window.validation.validateEmail;

  // форма в футере

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

  // форма на главной

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

  // форма в модалке заказа

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

  // форма в модалке отзывов

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
