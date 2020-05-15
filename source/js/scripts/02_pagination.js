"use strict";

(function (){

  const pagination = document.querySelector(".pagination");

  function paginationInit() {

    const setActive = window.util.setActive;
    const setInactive = window.util.setInactive;
    const checkToAddClass = window.util.checkToAddClass;
    const checkToRemoveClass = window.util.checkToRemoveClass;

    // количество элементов в списке над пагинацией

    const list = pagination.previousElementSibling.children;

    const item = [];

    for ( let i = 0; i < list.length; i++) {
      checkToAddClass(list[i], 'hidden');

      if ( list[i].hasAttribute('pagination-ready') ) {
        list[i].classList.remove('hidden');
        item.push(list[i]);
      }
    }

    let itemCountToDraw = 12; // количество показываемых элементов на странице (можно менять)
    let itemsToShowFrom = 0;
    let itemsToShowTo = itemsToShowFrom + itemCountToDraw;
    let curBtnId = 0;
    let storage = null; // рабочая переменная
    const btnCountStep = 10; // количество показываемых кнопок на странице (можно менять)
    let btnCount = btnCountStep;

    // вычисляю сколько должно быть кнопок в пагинации
    const paginationBtnCount = Math.ceil(item.length / itemCountToDraw);

    // скрытие лишних элементов списка,

    const startDrawing = function () {
      if(item.length > itemCountToDraw) {
        for (let i = 0; i < item.length; i++) {
          item[i].classList.add("hidden");
        }

        for (let i = 0; i < itemCountToDraw; i++) {
          item[i].classList.remove("hidden");
        }
      }
    }();

//стартовое создание и отрисовка кнопок пагинации

    function createPagination() {

      const fragment = document.createDocumentFragment();
      const template = document.getElementById('pagination-template');
      const templateClone = template.cloneNode(true);
      templateClone.style.display = "flex";
      templateClone.removeAttribute("id");

      const paginationBtnsPlace = templateClone.querySelector('.pagination__btn-after');

        for (let i = 0; i < paginationBtnCount; i++) {
          const btn = document.createElement("a");

          btn.setAttribute("href", "#");
          btn.setAttribute("data-id", i);
          btn.className = "pagination__btn";
          btn.textContent = i + 1;
          paginationBtnsPlace.before(btn);
        }

      fragment.appendChild(templateClone);
      pagination.appendChild(fragment)

      if (paginationBtnCount <= 1) { // меньше или равно одной , тк зачем показывать если всего одна кнопка
        pagination.classList.add("hidden");
      } else {
        pagination.classList.remove("hidden");
      }
    }

    createPagination();

    const showMoreBtn = pagination.querySelector(".pagination__show-btn");
    const btnAfter = document.querySelector(".pagination__btn-after");
    const btnPrev = document.querySelector(".pagination__btn-prev");
    const btnNext = document.querySelector(".pagination__btn-next");
    const paginationBtn = pagination.querySelectorAll(".pagination__btn");

    // вешаю слушателей на созданные кнопки и показываю первый ряд кнопок

    const startDrawPagBtns =  function () {
      btnPrev.setAttribute("disabled", "disabled");
      for (let i = 0; i < paginationBtn.length; i++) {
        paginationBtn[0].classList.add("active");
        paginationBtn[i].addEventListener("click", onPaginationBtnClickHandler);
      }

      if (paginationBtn.length > btnCountStep) {
        for (let i = btnCount; i < paginationBtn.length; i++) {
          paginationBtn[i].classList.add("hidden");
          btnAfter.textContent = '... ' + ( i + 1);
          btnAfter.classList.remove("hidden");
        }
      }
    };

    // функции отрисовки нужного интервала

    const updateItemsToDraw = function (from, to) {
      for (let i = 0; i < item.length; i++) {
        if(!item[i].classList.contains("hidden")) {
          item[i].classList.add("hidden")
        }
      }

      if (item.length - to < 0) {
        let residue = item.length - (to - itemCountToDraw);
        to = (to - itemCountToDraw) + residue;
        drawFunc(from, to, item);
      } else {
        drawFunc(from, to, item);
      }
    }

    function drawFunc (from, to, el) {
      for (let i = from; i < to; i++) {
        el[i].classList.remove("hidden");
      }
    }

    function hideFunc (from, to, el) {
      for (let i = from; i < to; i++) {
        el[i].classList.add("hidden");
      }
    }

    function setActivePaginationBtn(id) {
      for(let i = 0; i < paginationBtn.length; i++) {
        checkToRemoveClass(paginationBtn[i], "active");
      }
      paginationBtn[id].classList.add("active");
    }

    // ф-и фильтрации рядов кнопок

    function nextBtnRow() {
      // ф-я скрытия предыдущего ряда
      let startBtnToHide = 0;
      let lastBtnToHide = btnCount

      if( btnCount - btnCountStep > 0 ) {
        startBtnToHide = btnCount - btnCountStep;
      } else {
        let residue = btnCountStep - btnCount;
        startBtnToHide = (btnCount + residue) - btnCountStep;
      }

      hideFunc(startBtnToHide, lastBtnToHide, paginationBtn);

      // ф-я отрисовки нового ряда
      let startBtnToDraw = btnCount;
      btnCount += btnCountStep;

      let lastBtnToDraw = btnCount;

      if (paginationBtn.length - lastBtnToDraw < 0 ) {
        lastBtnToDraw = paginationBtn.length;

        checkToAddClass(btnAfter, "hidden");
        drawFunc(startBtnToDraw, lastBtnToDraw, paginationBtn);
      } else {
        drawFunc(startBtnToDraw, lastBtnToDraw, paginationBtn);
      }
    }

    function prevBtnRow() {
      let startBtnToHide = btnCount - btnCountStep;
      let lastBtnToHide = btnCount;

      if( paginationBtn.length - btnCount < 0 ) {
        lastBtnToHide = paginationBtn.length;
        setActive(showMoreBtn);
        checkToRemoveClass(btnAfter, "hidden");
      }

      hideFunc(startBtnToHide, lastBtnToHide, paginationBtn);

      let startBtnToDraw = (curBtnId - btnCountStep) + 1;
      let lastBtnToDraw = startBtnToDraw + btnCountStep;

      btnCount -= btnCountStep;

      if (startBtnToDraw < 0) {
        startBtnToDraw = 0;
        btnCount = btnCountStep - 1;
      }

      drawFunc(startBtnToDraw, lastBtnToDraw, paginationBtn);
    }

    // eventListeners

    let showMoreBtnClicked = false;

    const onShowMoreBtnClickHandler = function () {
       // показывает + itemCountToDraw  эл-в на стр

       let startItemToDraw = itemsToShowFrom;
       showMoreBtnClicked = true;
       curBtnId++;

       setActivePaginationBtn(curBtnId);
       setActive(btnPrev);

       if (btnCount === curBtnId) { // проверка ряда
         nextBtnRow();
       }

       if(curBtnId === paginationBtn.length - 1) {
         setInactive(btnNext);
         setInactive(showMoreBtn);
       }

       storage = itemsToShowTo;
       itemsToShowTo += itemCountToDraw;

       if(itemsToShowTo > item.length) {
         itemsToShowTo = item.length;
         storage = item.length - itemCountToDraw;
       }

       updateItemsToDraw(startItemToDraw, itemsToShowTo);
    }

    const onAfterBtnClickHandler = function (evt) {
      evt.preventDefault();
      // листает на последнюю стр-цу

      let startBtnToDraw = (Math.floor(paginationBtn.length / 10) * btnCountStep) - 1;
      let lastBtnToDraw = paginationBtn.length;
      let startBtnToHide = 0;
      let lastBtnToHide = startBtnToDraw;

      curBtnId = paginationBtn.length - 1;
      setActivePaginationBtn(curBtnId);

      btnCount  =  (Math.floor(paginationBtn.length / 10) * btnCountStep) + (btnCountStep - 1);

      hideFunc(startBtnToHide, lastBtnToHide, paginationBtn);
      drawFunc(startBtnToDraw, lastBtnToDraw, paginationBtn);

      checkToAddClass(btnAfter, "hidden");
      setInactive(btnNext);
      setInactive(showMoreBtn);
      setActive(btnPrev);

      if (showMoreBtnClicked) {
        showMoreBtnClicked = false;
        itemsToShowFrom = storage;
      }

      if (item.length % itemCountToDraw === 0) {
        itemsToShowFrom = ( (item.length / itemCountToDraw) * itemCountToDraw ) - itemCountToDraw;
      } else {
        itemsToShowFrom = Math.floor(item.length / itemCountToDraw) * itemCountToDraw;
      }

      itemsToShowTo = itemsToShowFrom + itemCountToDraw;

      let lastItemToShow = itemsToShowTo;
      if (item.length < itemsToShowTo) {
        lastItemToShow = item.length
      }

      updateItemsToDraw(itemsToShowFrom, lastItemToShow);
    }

    const onPrevBtnClickHandler = function () {
      // листает на 1 стр назад

      curBtnId--;
      setActivePaginationBtn(curBtnId);

      if(curBtnId === 0) {
        setInactive(btnPrev);
      }

      setActive(btnNext);
      setActive(showMoreBtn);

      if ((btnCount - curBtnId) === btnCountStep + 1) { // проверка ряда
        prevBtnRow();
      }

      if (showMoreBtnClicked) {
        showMoreBtnClicked = false;
        itemsToShowFrom = storage;
      }

      itemsToShowFrom -= itemCountToDraw;
      itemsToShowTo -= itemCountToDraw;

      updateItemsToDraw(itemsToShowFrom, itemsToShowTo);
    }

    const onNextBtnClickHandler = function () {
      // листает на 1 стр вперед

      curBtnId++;
      setActivePaginationBtn(curBtnId);

      if(curBtnId === paginationBtn.length - 1) {
        setInactive(btnNext);
        setInactive(showMoreBtn);
      } else {
        setActive(showMoreBtn);
      }

      setActive(btnPrev);

      if (btnCount === curBtnId) { // проверка ряда
        nextBtnRow();
      }

      if (showMoreBtnClicked) {
        showMoreBtnClicked = false;
        itemsToShowFrom = storage;
      }

      itemsToShowFrom += itemCountToDraw;
      itemsToShowTo += itemCountToDraw;

      updateItemsToDraw(itemsToShowFrom, itemsToShowTo);
    }

    const onPaginationBtnClickHandler = function (evt) {
      evt.preventDefault();
      // листает на выбранную стр

      if (showMoreBtnClicked) {
        showMoreBtnClicked = false;
      }

      curBtnId = this.getAttribute("data-id");
      setActivePaginationBtn(curBtnId);

      if (this.getAttribute("data-id") == 0) {
        setInactive(btnPrev);
      } else {
        setActive(btnPrev);
      }

      if (curBtnId == paginationBtn.length - 1) {
        setInactive(showMoreBtn);
        setInactive(btnNext);
      } else {
        setActive(showMoreBtn);
        setActive(btnNext);
      }

      itemsToShowTo = (curBtnId * itemCountToDraw) + itemCountToDraw;
      itemsToShowFrom = curBtnId * itemCountToDraw;

      updateItemsToDraw(itemsToShowFrom, itemsToShowTo);
    }

    showMoreBtn.addEventListener('click', onShowMoreBtnClickHandler);
    btnAfter.addEventListener('click', onAfterBtnClickHandler);
    btnPrev.addEventListener('click', onPrevBtnClickHandler);
    btnNext.addEventListener('click', onNextBtnClickHandler);

    startDrawPagBtns();
  }

  if (pagination) {
    paginationInit();
  }


  const paginationDestroy = function () {
    const pagination = document.querySelector(".pagination__wrapper");

    pagination.remove();
  }

  window.pagination = {
    paginationInit: paginationInit,
    paginationDestroy: paginationDestroy
  }
})();
