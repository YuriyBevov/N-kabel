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

  window.util = {
    esc_keycode: esc_keycode,
    checkToRemoveClass: checkToRemoveClass,
    checkToAddClass: checkToAddClass,
    setActive: setActive,
    setInactive: setInactive,
    setInFocus: setInFocus
  };
})();
