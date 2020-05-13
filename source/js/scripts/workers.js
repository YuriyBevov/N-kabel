"use strict";

(function () {

  const tab = document.querySelectorAll('.workers__toggle-label');
  const list = document.querySelectorAll('.workers__list');

  const onClickHandler = function () {
    const attr = this.getAttribute('id');

    for (let i = 0; i < list.length; i++) {
      list[i].style.display = 'none';
      list[attr].style.display = 'flex';
    }
  }

  for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', onClickHandler);
  }

})();
