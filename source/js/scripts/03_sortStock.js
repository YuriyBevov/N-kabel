"use strict";

(function () {
  const checkToAddClass = window.util.checkToAddClass;
  const checkToRemoveClass = window.util.checkToRemoveClass;
  const paginationInit = window.pagination.paginationInit;
  const paginationDestroy = window.pagination.paginationDestroy;

  const btn = document.querySelectorAll(".stock__filter-box-btn");
  const stockItem = document.querySelectorAll(".stock__item");

  const sortItems = function () {

    paginationDestroy();

    let type = this.getAttribute("id");

    for (let i = 0; i < stockItem.length; i++) {
      checkToAddClass(stockItem[i], "hidden");
      if(stockItem[i].hasAttribute("data-pagination")) {
        console.log("has")
        stockItem[i].removeAttribute("data-pagination")
      } else {
        console.log("hasno")
      }

      if (stockItem[i].getAttribute("data-id") === type) {
        stockItem[i].classList.remove("hidden");
        stockItem[i].setAttribute("data-pagination", "ready");
      }
    }

    paginationInit();
  }

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", sortItems);
  }
})();
