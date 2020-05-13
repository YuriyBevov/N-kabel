"use strict";

(function () {
  const ESC_KEYCODE = 27;

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

  window.util = {
    ESC_KEYCODE,
    checkToRemoveClass,
    checkToAddClass,
    setActive,
    setInactive
  };
})();
