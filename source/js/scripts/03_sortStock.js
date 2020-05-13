"use strict";

(function () {
  const checkToAddClass = window.util.checkToAddClass;
  const checkToRemoveClass = window.util.checkToRemoveClass;
  const paginationInit = window.pagination.paginationInit;
  const paginationDestroy = window.pagination.paginationDestroy;

  const btn = document.querySelectorAll('.stock__filter-box-btn');
  const stockItem = document.querySelectorAll('.stock__item');

  const sortItems = function () {

    paginationDestroy();

    let type = this.getAttribute('id');

    for (let i = 0; i < stockItem.length; i++) {
      checkToAddClass(stockItem[i], 'hidden');
      if(stockItem[i].hasAttribute('pagination-ready')) {
        stockItem[i].removeAttribute('pagination-ready')
      }

      if (stockItem[i].getAttribute('data-id') === type) {
        stockItem[i].classList.remove('hidden');
        stockItem[i].setAttribute('pagination-ready', 'pagination-ready');
      }
    }

    paginationInit();
  }

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', sortItems);
  }
})();
