"use strict";

(function (){
  const pagination = document.querySelector(".pagination");

  if(pagination) {
    const showMoreBtn = pagination.querySelector(".pagination__show-btn");
    const btnAfter = document.querySelector(".pagination__btn-after");
    const btnBefore = document.querySelector(".pagination__btn-before");
    const btnPrev = document.querySelector(".pagination__btn-prev");
    const btnNext = document.querySelector(".pagination__btn-next");

    pagination.classList.add("hidden");

    // количество элементов в списке над пагинацией
    const item = pagination.previousElementSibling.children;

    let itemCountToDraw = 12;
    let itemsToShowFrom = 0;
    let itemsToShowTo = itemsToShowFrom + itemCountToDraw;
    let curBtnId = 0;
    const btnCountStep = 10;
    let btnCount = btnCountStep - 1;

    // вычисляю сколько должно быть страниц(кнопок) в пагинации
    const paginationBtnCount = Math.ceil(item.length / itemCountToDraw);

    // скрытие лишних элементов списка, стартовое создание и отрисовка кнопок пагинации

    const startDrawing = function () {
      if(item.length > itemCountToDraw) {
        pagination.classList.remove("hidden");

        for (let i = 0; i < item.length; i++) {
          item[i].classList.add("hidden");
        }

        for (let i = 0; i < itemCountToDraw; i++) {
          item[i].classList.remove("hidden");
        }

        for (let i = 0; i < paginationBtnCount; i++) {
          const btn = document.createElement("a");

          btn.setAttribute("href", "#");
          btn.setAttribute("data-id", i);
          btn.className = "pagination__btn";
          btn.textContent = i + 1;
          btnAfter.before(btn);
        }

        btnPrev.setAttribute("disabled", "disabled");
      }
    }();

    const paginationBtn = pagination.querySelectorAll(".pagination__btn");

    const startDrawPagBtns =  function () {
      for (let i = 0; i < paginationBtn.length; i++) {
        paginationBtn[0].classList.add("active");
        paginationBtn[i].addEventListener("click", onPaginationBtnClickHandler);
      }

      if(paginationBtn.length > btnCountStep) {
        for (let i = btnCount; i < paginationBtn.length; i++) {
          paginationBtn[i].classList.add("hidden");
        }
      }
    };

    // функции фильтрации

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
      console.log('drawFunc')
      for (let i = from; i < to; i++) {
        el[i].classList.remove("hidden");
      }
    }

    function hideFunc (from, to, el) {
      console.log('hideFunc')
      for (let i = from; i < to; i++) {
        el[i].classList.add("hidden");
      }
    }

    // ф-и активности и отрисовки кнопок

    function setActive(el) {
      if(el.hasAttribute("disabled")) {
        el.removeAttribute("disabled")
      }
    }

    function setInactive(el) {
      if(!el.hasAttribute("disabled")) {
        el.setAttribute("disabled", "disabled")
      }
    }

    function showElem(el) {
      if(el.classList.contains("hidden")) {
        el.classList.remove("hidden");
      }
    }

    function hideElem(el) {
      if(!el.classList.contains("hidden")) {
        el.classList.add("hidden");
      }
    }

    function setActivePaginationBtn(id) {
      for(let i = 0; i < paginationBtn.length; i++) {
        if(paginationBtn[i].classList.contains("active")) {
          paginationBtn[i].classList.remove("active");
        }
      }
      paginationBtn[id].classList.add("active");
    }

    // ф-я фильтрации рядов кнопок(btnCount)

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
        hideElem(btnAfter);
        setInactive(showMoreBtn);
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
        showElem(btnAfter);
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

    const onShowMoreBtnClickHandler = function () {
      console.log("onShowMoreBtnClickHandler")

       // листает на след count


       console.log(" itemsToShowFrom--" + itemsToShowFrom);
       console.log(" itemsToShowTo--" + itemsToShowTo);
       console.log(" btnCount--" + btnCount);
       console.log("curBtnId --" + curBtnId);

       /*itemsToShowFrom += itemCountToDraw;
       itemsToShowTo += itemCountToDraw;

       updateItemsToDraw(firstItemToShow, itemsToShowTo);*/
    }

    const onAfterBtnClickHandler = function (evt) {
      evt.preventDefault();
      console.log("onAfterBtnClickHandler")

      // листает на последнюю стр-цу

      let startBtnToDraw = (Math.floor(paginationBtn.length / 10) * btnCountStep) - 1;
      let lastBtnToDraw = paginationBtn.length;
      let startBtnToHide = 0;
      let lastBtnToHide = startBtnToDraw;

      curBtnId = paginationBtn.length - 1;

      btnCount  =  (Math.floor(paginationBtn.length / 10) * btnCountStep) + (btnCountStep - 1);

      hideFunc(startBtnToHide, lastBtnToHide, paginationBtn);
      drawFunc(startBtnToDraw, lastBtnToDraw, paginationBtn);

      setActivePaginationBtn(curBtnId);
      hideElem(btnAfter);
      setInactive(btnNext);
      setInactive(showMoreBtn);
      setActive(btnPrev);

      itemsToShowFrom = Math.floor(item.length / itemCountToDraw) * itemCountToDraw;
      itemsToShowTo = itemsToShowFrom + itemCountToDraw;

      let lastItemToShow = itemsToShowTo;
      if (item.length < itemsToShowTo) {
        lastItemToShow = item.length
      }

      updateItemsToDraw(itemsToShowFrom, lastItemToShow);
    }

    const onBeforeBtnClickHandler = function (evt) {
      evt.preventDefault();
      console.log("onBeforeBtnClickHandler")

      // dont need
    }

    const onPrevBtnClickHandler = function () {
      console.log("onPrevBtnClickHandler")

      // должен листать 1 стр назад

      curBtnId--;
      setActivePaginationBtn(curBtnId);

      if(curBtnId === 0) {
        setInactive(btnPrev);
        setInactive(showMoreBtn);
      }

      setActive(btnNext);
      setActive(showMoreBtn);

      // проверка ряда

      if ((btnCount - curBtnId) === btnCountStep + 1) {
        prevBtnRow();
      }

      itemsToShowFrom -= itemCountToDraw;
      itemsToShowTo -= itemCountToDraw;

      updateItemsToDraw(itemsToShowFrom, itemsToShowTo);
    }

    const onNextBtnClickHandler = function () {
      console.log("onNextBtnClickHandler")

      // должен листать 1 стр вперед

      curBtnId++;
      setActivePaginationBtn(curBtnId);


      if(curBtnId === paginationBtn.length - 1) {
        console.log(curBtnId, paginationBtn.length)
        setInactive(btnNext);
        setInactive(showMoreBtn);
      } else {
        setActive(showMoreBtn);
      }

      setActive(btnPrev);

      if (btnCount === curBtnId) { // проверка ряда
        nextBtnRow();
      }

      /*console.log(" itemsToShowFrom--" + itemsToShowFrom);
      console.log(" itemsToShowTo--" + itemsToShowTo);
      console.log(" btnCount--" + btnCount);
      console.log("curBtnId --" + curBtnId);*/
      console.log("curBtnId --" + curBtnId);

      itemsToShowFrom += itemCountToDraw;
      itemsToShowTo += itemCountToDraw;

      updateItemsToDraw(itemsToShowFrom, itemsToShowTo);
    }

    const onPaginationBtnClickHandler = function (evt) {
      evt.preventDefault();
      console.log("onPaginationBtnClickHandler");

      // должен листать на тек-ю стр

      curBtnId = this.getAttribute("data-id");

      if (this.getAttribute("data-id") == 0) {
        setInactive(btnPrev);
      }

      console.log(paginationBtn.length)
      console.log(curBtnId)

      if (this.getAttribute("data-id") == paginationBtn.length - 1) {
        setInactive(showMoreBtn);
        setInactive(btnNext);
      } else {
        setActive(showMoreBtn);
        setActive(btnNext);
      }


      itemsToShowTo = (curBtnId * itemCountToDraw) + itemCountToDraw;
      itemsToShowFrom = curBtnId * itemCountToDraw;

      setActivePaginationBtn(curBtnId);

      updateItemsToDraw(itemsToShowFrom, itemsToShowTo);
    }



    showMoreBtn.addEventListener('click', onShowMoreBtnClickHandler);
    btnAfter.addEventListener('click', onAfterBtnClickHandler);
    btnBefore.addEventListener('click', onBeforeBtnClickHandler);
    btnPrev.addEventListener('click', onPrevBtnClickHandler);
    btnNext.addEventListener('click', onNextBtnClickHandler);

    startDrawPagBtns();
  }
})();