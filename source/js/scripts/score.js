"use strict";

(function () {
  const STARS_BOX_WIDTH = 80; // ширина контейнера со звезами
  const STAR_WIDTH = 16; // ширина одной звезды

  const scoreInput = document.getElementById('feedback-score'); // инпут с оценкой
  const starsBox  = document.querySelector('.modal__group-score-box .stars'); // контейнер со звезами
  const starsPosition  = document.querySelector('.modal__group-score-box .stars__wrapper'); // блок-обертка со всеми звездами

  const getCoords = function(e) {
    const starsBoxCoordsLeft = starsBox.getBoundingClientRect().left; // координаты контейнера со звездами относительно экрана
    const userClickCoords = e.clientX; // координаты клика пользователя по горизонтали

    let clickValue = userClickCoords - starsBoxCoordsLeft; // координаты клика от левого края контейнера со звездами
    let starsCount = Math.floor(clickValue / STAR_WIDTH) + 1; // делю координаты клика на ширину звезды и прибавляю единицу, тк мин оценка равна 1;

    scoreInput.value = starsCount; // записываю оценку в value инпута
    starsPosition.style.transform = 'translateX(-' + (STARS_BOX_WIDTH - (starsCount * STAR_WIDTH)) +'px)'; // передвигаю блок со звездами в видимую часть блока контейнера
  }

  if(starsBox) {
    starsBox.addEventListener('click', getCoords);
  }
})();
