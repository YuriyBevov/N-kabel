"use strict";

"use strict";

(function() {
  function remove() { this.parentNode && this.parentNode.removeChild(this); }
  if (!Element.prototype.remove) Element.prototype.remove = remove;
  if (Text && !Text.prototype.remove) Text.prototype.remove = remove;
})();

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('before')) {
      return;
    }
    Object.defineProperty(item, 'before', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function before() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.parentNode.insertBefore(docFrag, this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

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
