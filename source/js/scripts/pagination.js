"use strict";

(function () {
  const pagination = document.querySelector(".pagination");

  if(pagination) {
    const showMoreBtn = pagination.querySelector(".pagination__show-btn");
    pagination.classList.add("hidden");

    const list = pagination.previousElementSibling;
    const btnAfter = document.querySelector(".pagination__btn-after");
    const btnBefore = document.querySelector(".pagination__btn-before");
    const btnPrev = document.querySelector(".pagination__btn-prev");
    const btnNext = document.querySelector(".pagination__btn-next");

    const item = list.querySelectorAll("li"); // не правильный селектор
    //console.log(item.length)
    const paginationBtnCount = Math.floor(( item.length - 1 ) / 10); // вычисляю сколько должно быть страниц(кнопок) в пагинации

    let itemsToShowFrom = 0;
    let itemsToShow = 10;
    let currentBtnId = 0;
    const step = 10;

    // если элементов > чем step показываю пагинацию и создаю нужное количество кнопок

    if (item.length > itemsToShow) {
      pagination.classList.remove("hidden");

      for (let i = itemsToShow; i < item.length; i++) {
        item[i].classList.add("hidden");
      }

      for (let i = 0; i <= paginationBtnCount; i++) {
        const btn = document.createElement("a");

        btn.setAttribute("href", "#");
        btn.className = "pagination__btn";
        btn.textContent = i + 1;

        btnAfter.before(btn);
      }
    }

    // функция отрисовки
    const showItems = function () {
      item.forEach(function(it) {
        if(!it.classList.contains("hidden")) {
          it.classList.add("hidden")
        }
      });

      for (let i = itemsToShowFrom; i < itemsToShow; i++) {
        item[i].classList.remove("hidden");
      }

      // отмечаю активную кнопку
      for (let i = 0; i < btn.length; i++) {
        if(btn[i].classList.contains("active")) {
          btn[i].classList.remove("active");
        }
      }
      btn[currentBtnId].classList.add("active");
    }
    // функция клика на кнопку показать еще
    const onShowMoreBtnClickHandler = function (evt) {
      evt.preventDefault();

      if (btnPrev.hasAttribute("disabled")) {
        btnPrev.removeAttribute("disabled");
      }

      itemsToShowFrom += step;
      currentBtnId += 1;

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
    // функция клика на кнопку пагинации
    const onClickShowItemsHandler = function (evt) {
      evt.preventDefault();

      btn.forEach(function(b) {
        if(b.classList.contains("active")) {
          b.classList.remove("active")
        }
      });
      this.classList.add("active");

      let itemsCount = this.getAttribute("id") * step;

      itemsToShowFrom = itemsCount;
      currentBtnId = itemsCount/step;

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

      if (currentBtnId === 0) {
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

    // функция клика на кнопку назад
    const onBtnPrevClickHandler = function (evt) {
      evt.preventDefault();

      if (btnNext.hasAttribute("disabled")) {
        btnNext.removeAttribute("disabled");
        showMoreBtn.removeAttribute("disabled");
      }

      if (currentBtnId > 0) {
        currentBtnId -= 1;
      }

      if (currentBtnId === 0) {
        btnPrev.setAttribute("disabled", "disabled");
      }

      itemsToShowFrom = currentBtnId * step;
      itemsToShow = itemsToShowFrom + step;

      showItems();
    }

    // функция клика на кнопку вперед
    const onBtnNextClickHandler = function (evt) {
      evt.preventDefault();

      if (btnPrev.hasAttribute("disabled")) {
        btnPrev.removeAttribute("disabled");
      }

      if (currentBtnId < paginationBtnCount) {
        currentBtnId += 1;

        itemsToShowFrom = currentBtnId * step;
        itemsToShow = itemsToShowFrom + step;
      }

      if (currentBtnId === paginationBtnCount) {
        btnNext.setAttribute("disabled", "disabled");
        showMoreBtn.setAttribute("disabled", "disabled");

        currentBtnId = paginationBtnCount;
        itemsToShowFrom = currentBtnId * step;
        itemsToShow = itemsToShowFrom + (item.length - itemsToShowFrom);
      }

      showItems();
    }

    // ф-и клика на многоточия

    let rowId = 0;

    const onBeforeBtnClickHandler = function (evt) {
      evt.preventDefault();

      console.log('клик по кнопке before' );

      if(btnNext.hasAttribute("disabled")) {
        btnNext.removeAttribute("disabled");
      };

      if(btnAfter.classList.contains('hidden')) {
        btnAfter.classList.remove('hidden');
      }

      if(showMoreBtn.hasAttribute("disabled")) {
        showMoreBtn.removeAttribute("disabled");
      };

      rowId -= 1;

      if(rowId === 0 && !btnBefore.classList.contains('hidden')) { // проверить условие !!!!
        btnBefore.classList.add('hidden');
        btnPrev.setAttribute("disabled", "disabled");

        currentBtnId = rowId * step;
        itemsToShowFrom = currentBtnId * step;
        itemsToShow = itemsToShowFrom + step;

        for (let i = 0; i < btn.length; i++) { // оптимизировать !!!!!!!!!!!!
          if(!btn[i].classList.contains('hidden')) {
            btn[i].classList.add('hidden');
          }
        }

        for ( let i = 0; i < step - 1; i++){
          btn[i].classList.remove('hidden');
        }
      }

      else {
        currentBtnId = rowId * step - 1;

        for (let i = 0; i < btn.length; i++) { // оптимизировать !!!!!!!!!!!!
          if(!btn[i].classList.contains('hidden')) {
            btn[i].classList.add('hidden');
          }
        }

        for ( let i = currentBtnId; i < (currentBtnId + step); i++){
          btn[i].classList.remove('hidden');
        }
      }

      showItems();
    }

    const onAfterBtnClickHandler = function (evt) {
      evt.preventDefault();

      if(btnPrev.hasAttribute("disabled")) {
        btnPrev.removeAttribute("disabled");
      };

      if (btn.length - ((rowId+1) * step) > step) {
        btnBefore.classList.remove('hidden');

        rowId += 1;
        currentBtnId = rowId * step - 1;
        itemsToShowFrom = currentBtnId * step;
        itemsToShow = itemsToShowFrom + step;

        for (let i = 0; i < btn.length; i++) { // оптимизировать !!!!!!!!!!!!
          if(!btn[i].classList.contains('hidden')) {
            btn[i].classList.add('hidden');
          }
        }

        for ( let i = currentBtnId; i < currentBtnId + step; i++){
          btn[i].classList.remove('hidden');
        }
      }

      else {
        btnAfter.classList.add('hidden');

        rowId += 1;
        currentBtnId = rowId * step - 1;
        itemsToShowFrom = currentBtnId * step;
        itemsToShow =  itemsToShowFrom + step;

        for (let i = 0; i < btn.length; i++) { // оптимизировать !!!!!!!!!!!!
          if(!btn[i].classList.contains('hidden')) {
            btn[i].classList.add('hidden');
          }
        }

        for ( let i = currentBtnId; i < btn.length; i++){
          btn[i].classList.remove('hidden');
        }
      }

      showItems();
    }

    showMoreBtn.addEventListener("click", onShowMoreBtnClickHandler);

    btnNext.addEventListener("click", onBtnNextClickHandler);
    btnPrev.addEventListener("click", onBtnPrevClickHandler);
    btnAfter.addEventListener("click", onAfterBtnClickHandler);
    btnBefore.addEventListener("click", onBeforeBtnClickHandler);

    const btn = pagination.querySelectorAll(".pagination__btn");

    for ( let i = 0; i < btn.length; i++) {
      if(btn.length < step) {
        btnAfter.classList.add("hidden");
      } else {
        for (let k = step - 1; k < btn.length; k++) {
          btn[k].classList.add("hidden");
        }
      }

      btn[0].classList.add("active");
      btn[i].setAttribute("id", i);
      btn[i].addEventListener("click", onClickShowItemsHandler);
    }
  }
})();
