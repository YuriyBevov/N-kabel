"use strict";

(function () {
  const checkToAddClass = window.util.checkToAddClass;
  const checkToRemoveClass = window.util.checkToRemoveClass;

  const headerFormMailInput = document.getElementById("about-form__email");
  const footerFormMailInput = document.getElementById("footer-form__mail");
  const orderModalMailInput = document.getElementById("order-modal-mail");

  const sbt = document.querySelector('.footer-form__submit-btn');

  const acceptRulesInput = document.getElementById("footer-form__accept-rules");

  let valid = false;

  function validateEmail() {
    let val = this.value;

    const reg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

    if(!reg.test(val)) {
      this.style.color = "#f1b0b0";
      this.style.outline = "2px solid rgb(93, 16, 7)";

      checkToAddClass(this, 'form-invalid');
      setTimeout(checkToRemoveClass, 1000, this, 'form-invalid');
    } else {
      this.style.color = "#1ed044";
      this.style.outline = "none";
      checkToRemoveClass(this, 'form-invalid');
    }
  }

  function onCheckedValidate() {
    if(!this.hasAttribute("checked")) {
      console.log('ok')
      this.style.color = "#f1b0b0";
      this.style.outline = "2px solid rgb(93, 16, 7)";

      checkToAddClass(this, 'form-invalid');
      setTimeout(checkToRemoveClass, 1000, this, 'form-invalid');
    } else {
      console.log(this)
      this.style.color = "#1ed044";
      this.style.outline = "none";
      checkToRemoveClass(this, 'form-invalid');
    }
  }

  function checking(evt) {
    evt.preventDefault();

    if(acceptRulesInput.checked) {
      console.log("have")
    } else {
      console.log("dont")
    }
  }

  headerFormMailInput.addEventListener('change', validateEmail);
  footerFormMailInput.addEventListener('change', validateEmail);
  orderModalMailInput.addEventListener('change', validateEmail);

  acceptRulesInput.addEventListener("click", onCheckedValidate)
  sbt.addEventListener("click", checking);
})();
