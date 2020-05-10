"use strict";

/*(function () {
  const btn = document.querySelectorAll('.stock__filter-box-btn');
  const stockItem = document.querySelectorAll('.stock__item');

  const sortItems = function () {
    console.log(this)
    console.log(this.getAttribute('id'));
    let type = this.getAttribute('id');

    for (let i = 0; i < stockItem.length; i++) {
      if(!stockItem[i].classList.contains('hidden')) {
        stockItem[i].classList.add('hidden');
      }

      if (stockItem[i].getAttribute('data-id') === type) {
        stockItem[i].classList.remove('hidden');
      }
    }
  }

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', sortItems);
  }
})();*/
