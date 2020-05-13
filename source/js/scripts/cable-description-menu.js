"use strict";

(function () {

  const picker = document.querySelectorAll(".cable-description__pick-list input");
  const descriptionItem = document.querySelectorAll(".cable-description__description-item");

  for (let i = 1; i < descriptionItem.length; i++) {
    descriptionItem[i].style.display = 'none';
  }

  const onClickHandler = function () {
    const itemId = this.getAttribute('data-id');

    for (let i = 0; i < descriptionItem.length; i++) {
      descriptionItem[i].style.display = 'none';
      descriptionItem[itemId].style.display = 'block';
    }
  }

  for (let i = 0; i < picker.length; i++) {
    picker[i].addEventListener('click', onClickHandler);
  }
})();
