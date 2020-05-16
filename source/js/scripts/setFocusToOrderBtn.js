"use strict";

(function (){
  // добавление фокуса к анимированным кнопкам заказа, для возможности заказа с клавиатуры

  const btn = document.querySelectorAll(".order-btn");

  function setBtnBoxInFocus () {
    this.parentNode.classList.add("active");
    this.addEventListener("blur", function() {
      this.parentNode.classList.remove("active")
    });
  }

  if (btn) {
    for (let i = 0; i < btn.length; i++) {
      if(btn[i].parentNode.classList.contains("analogs__item-box") || btn[i].parentNode.classList.contains("stock__item-box")) {
        btn[i].addEventListener("focus", setBtnBoxInFocus)
      }
    }
  }
})();
