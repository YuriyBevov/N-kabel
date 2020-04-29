"use strict";

(function() {

  const select = document.querySelector('.contacts__select');

  const content = document.querySelectorAll('.contacts__content');
  console.log(content)

  const onChangeHandler = function () {
    let attr = this.options[select.selectedIndex].id;
    console.log(attr)

    for (let i = 0; i < content.length; i++) {
      content[i].style.display = 'none';
      content[attr].style.display = 'flex';
    }
  }

  if (select) {
    select.addEventListener('change', onChangeHandler)
  }
})();
