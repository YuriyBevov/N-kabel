"use strict";

(function() {
  const select = document.querySelector(".contacts__select");
  const content = document.querySelectorAll(".contacts__content");

  const onChangeHandler = function () {
    let attr = this.options[select.selectedIndex].id;

    for (let i = 0; i < content.length; i++) {
      content[i].style.display = "none";
      content[attr].style.display = "flex";
    }
  }

  if (select) {
    select.addEventListener("change", onChangeHandler)
  }
})();
