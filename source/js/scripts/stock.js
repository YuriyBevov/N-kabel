"use strict";
// активация активной кнопки в фильтре н аглавной
(function () {
  const checkToRemoveClass = window.util.checkToRemoveClass;

  const item = document.querySelectorAll(".stock__filter-box-btn");

  const onClickHandler = function () {
    if(!this.classList.contains("stock__filter-box-btn--active")) {
      for(let i = 0; i < item.length; i++) {
        checkToRemoveClass(item[i], "stock__filter-box-btn--active");
      }
      this.classList.add("stock__filter-box-btn--active");
    }
  }

  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", onClickHandler)
  }
})();
