"use strict";

(function () {

  const esc_keycode = 27;

  function checkToRemoveClass(el, cls) {
    if(el.classList.contains(cls)) {
      el.classList.remove(cls);
    }
  }

  function checkToAddClass(el, cls) {
    if(!el.classList.contains(cls)) {
      el.classList.add(cls);
    }
  }

  function setActive(el) {
    if(el.hasAttribute("disabled")) {
      el.removeAttribute("disabled")
    }
  }

  function setInactive(el) {
    if(!el.hasAttribute("disabled")) {
      el.setAttribute("disabled", "disabled")
    }
  }

  function setInFocus (el) {
    el.focus();
  }

  function fileUpload(el, textPLace) {
    el.addEventListener('change', function(event) {
    const input = event.target;

    textPLace.textContent = input.files[0].name;
    });
  }

  window.util = {
    esc_keycode: esc_keycode,
    checkToRemoveClass: checkToRemoveClass,
    checkToAddClass: checkToAddClass,
    setActive: setActive,
    setInactive: setInactive,
    setInFocus: setInFocus,
    fileUpload: fileUpload
  };
})();
