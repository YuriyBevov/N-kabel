"use strict";

(function () {
  const item = document.querySelectorAll('.stock__filter-box-btn');

  const onClickHandler = function () {

    if(!this.classList.contains('stock__filter-box-btn--active')) {

      for(let i = 0; i < item.length; i++) {
        if(item[i].classList.contains('stock__filter-box-btn--active')) {
          item[i].classList.remove('stock__filter-box-btn--active')
        }
      }

      this.classList.add('stock__filter-box-btn--active');
    }
  }

  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', onClickHandler)
  }
})();
