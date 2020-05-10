"use strict";

(function () {
  const pagination = document.querySelector('.pagination');

  if(pagination) {
    const showMoreBtn = pagination.querySelector('.pagination__show-btn');
    pagination.classList.add("hidden");

    const list = pagination.previousElementSibling;
    const btnPrev = document.querySelector('.pagination__btn-prev');
    const btnNext = document.querySelector('.pagination__btn-next');

    const item = list.querySelectorAll('li'); // не правильный селектор
    //console.log(item.length)
    const btnCount = Math.floor(( item.length - 1 ) / 10); // вычисляю сколько должно быть страниц в пагинации

    let itemsToShowFrom = 0;
    let itemsToShow = 10;
    let btnId = 0;
    const step = 10;

    // если элементов > чем step показываю пагинацию и нужное количество элементов

    if (item.length > itemsToShow) {
      pagination.classList.remove('hidden');

      for (let i = itemsToShow; i < item.length; i++) {
        item[i].classList.add('hidden');
      }

      for (let i = 0; i <= btnCount; i++) {
        const btn = document.createElement('a');

        btn.setAttribute("href", "#");
        btn.className = "pagination__btn";
        btn.textContent = i + 1;

        btnNext.before(btn);
      }
    }

    const showItems = function () {
      item.forEach(function(it) {
        if(!it.classList.contains('hidden')) {
          it.classList.add('hidden')
        }
      });

      for (let i = itemsToShowFrom; i < itemsToShow; i++) {
        item[i].classList.remove('hidden');
      }

      // отрисовка активной страницы
      for (let i = 0; i < btn.length; i++) {
        if(btn[i].classList.contains('active')) {
          btn[i].classList.remove('active');
        }
      }
      btn[btnId].classList.add('active');
    }

    const onShowMoreBtnClickHandler = function (evt) {
      evt.preventDefault();

      if (btnPrev.hasAttribute("disabled")) {
        btnPrev.removeAttribute("disabled");
      }

      itemsToShowFrom += step;
      btnId += 1;

      let residue = item.length - itemsToShow;

      if (residue > step) {
        itemsToShow += step;

        showItems();
      } else {
        itemsToShow += residue;
        showMoreBtn.setAttribute("disabled", "disabled");
        btnNext.setAttribute("disabled", "disabled");
        showItems();
      }
    };

    const onClickShowItemsHandler = function (evt) {
      evt.preventDefault();

      btn.forEach(function(b) {
        if(b.classList.contains('active')) {
          b.classList.remove('active')
        }
      });
      this.classList.add('active');

      let itemsCount = this.getAttribute("id") * step;

      itemsToShowFrom = itemsCount;
      btnId = itemsCount/step;

      if(item.length - (itemsCount + step) >= 0) {
        if (showMoreBtn.hasAttribute("disabled")) {
          showMoreBtn.removeAttribute("disabled");
          btnNext.removeAttribute("disabled");
        }
        itemsToShow = itemsCount + step;
      } else {
        itemsToShow = itemsCount + (item.length - itemsCount);
        showMoreBtn.setAttribute("disabled", "disabled");
        btnNext.setAttribute("disabled", "disabled");
      }

      if (btnId === 0) {
        if (!btnPrev.hasAttribute("disabled")) {
          btnPrev.setAttribute("disabled", "disabled");
        }
      } else {
        if (btnPrev.hasAttribute("disabled")) {
          btnPrev.removeAttribute("disabled", "disabled");
        }
      }

      showItems();
    }

    const onBtnPrevClickHandler = function (evt) {
      evt.preventDefault();

      if (btnNext.hasAttribute("disabled")) {
        btnNext.removeAttribute("disabled");
        showMoreBtn.removeAttribute("disabled");
      }

      if (btnId > 0) {
        btnId -= 1;
      }

      if (btnId === 0) {
        btnPrev.setAttribute("disabled", "disabled");
      }

      itemsToShowFrom = btnId * step;
      itemsToShow = itemsToShowFrom + step;

      showItems();
    }

    const onBtnNextClickHandler = function (evt) {
      evt.preventDefault();

      if (btnPrev.hasAttribute("disabled")) {
        btnPrev.removeAttribute("disabled");
      }

      if (btnId < btnCount) {
        btnId += 1;

        itemsToShowFrom = btnId * step;
        itemsToShow = itemsToShowFrom + step;
      }

      if (btnId === btnCount) {
        btnNext.setAttribute("disabled", "disabled");
        showMoreBtn.setAttribute("disabled", "disabled");

        btnId = btnCount;
        itemsToShowFrom = btnId * step;
        itemsToShow = itemsToShowFrom + (item.length - itemsToShowFrom);
      }

      showItems();
    }

    showMoreBtn.addEventListener('click', onShowMoreBtnClickHandler);

    btnNext.addEventListener('click', onBtnNextClickHandler);
    btnPrev.addEventListener('click', onBtnPrevClickHandler);

    const btn = pagination.querySelectorAll('.pagination__btn');

    for ( let i = 0; i < btn.length; i++) {
      btn[0].classList.add('active');
      btn[i].setAttribute("id", i);
      btn[i].addEventListener("click", onClickShowItemsHandler);
    }
  }
})();
