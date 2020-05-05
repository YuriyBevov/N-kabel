
/*const geo = navigator.geolocation.getCurrentPosition(
  function(position) {

    console.log('широта ' + position.coords.latitude);
    console.log('долгота ' + position.coords.longitude);
    console.log('высота над уровнем моря ' + position.coords.altitude);

    console.log('погрешность в метрах ' + position.coords.accuracy );
    console.log('Погрешность высоты над уровнем моря в метрах. ' + position.coords.altitudeAccuracy);
    console.log('Направление устройства по отношению к северу. ' + position.coords.heading);
    console.log('Скорость в метрах в секунду ' + position.coords.speed);*/
    /*position = {
        coords: {
            latitude - Широта.
            longitude - Долгота.
            altitude - Высота в метрах над уровнем моря.
            accuracy - Погрешность в метрах.
            altitudeAccuracy - Погрешность высоты над уровнем моря в метрах.
            heading - Направление устройства по отношению к северу.
            speed - Скорость в метрах в секунду.
        },
      timestamp - Время извлечения информации.
    */
  /*},

  function(error) {
    console.log(error.type)
  }
)*/

"use strict";

(function () {
  const btn =  document.querySelectorAll('.geo-position__item-extra-btn');

  const closeGeoList = function () {
    for (let i = 0; i < btn.length; i++) {
      btn[i].removeEventListener('click', closeGeoList);
      btn[i].addEventListener('click', openGeoList);
    };
    this.nextElementSibling.classList.add('hidden');
  }

  const openGeoList = function () {
    for (let i = 0; i < btn.length; i++) {
      if(!(btn[i].nextElementSibling.classList.contains('hidden'))) {
        btn[i].nextElementSibling.classList.add('hidden');
      }
    };

    this.removeEventListener('click', openGeoList);
    this.nextElementSibling.classList.remove('hidden');
    this.addEventListener('click', closeGeoList);
  };

  if(btn) {
    for (let i = 0; i < btn.length; i++) {
      btn[i].nextElementSibling.classList.add('hidden');
      btn[i].addEventListener('click', openGeoList);
    };
  }
})();
