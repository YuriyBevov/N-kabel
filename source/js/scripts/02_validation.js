"use strict";

(function () {
  const checkToRemoveClass = window.util.checkToRemoveClass;
  const checkToAddClass = window.util.checkToAddClass;

  let isValidMail = false;
  let isAcceptedRules = true;

  function validateEmail(el, color) {
    let val = el.value;

    const reg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

    if(!reg.test(val)) {
      isValidMail = false;
      el.style.color = "#f1b0b0";
      el.style.outline = "2px solid rgb(93, 16, 7)";

      checkToAddClass(el, "form-invalid");
      setTimeout(checkToRemoveClass, 1000, el, "form-invalid");
    } else {
      isValidMail = true;
      el.style.color = color;
      el.style.outline = "none";
      checkToRemoveClass(el, "form-invalid");
    }
  }

  function onCheckedValidate(el, color) {
    const label = el.nextElementSibling;

    if(!el.checked) {
      isAcceptedRules = false;
      label.style.color = "#f1b0b0";
      label.style.outline = "2px solid rgb(93, 16, 7)";

      checkToAddClass(label, "form-invalid");
      setTimeout(checkToRemoveClass, 1000, label, "form-invalid");
    }

    function removeInvalidColor() {
      if(el.checked) {
        isAcceptedRules = true;
        label.style.color = color;
        label.style.outline = "none";
        checkToRemoveClass(label, "form-invalid");
      }
      el.removeEventListener("change", removeInvalidColor);
    }

    el.addEventListener("change", removeInvalidColor)
  }

  function checking(mail, check, color, form) {
    validateEmail(mail, color);
    onCheckedValidate(check, color);

    if (isValidMail == true && isAcceptedRules ==  true) {
      form.submit();
    }
  }

  window.validation = {
    checking: checking,
    validateEmail: validateEmail
  }
})();
