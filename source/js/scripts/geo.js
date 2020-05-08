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
