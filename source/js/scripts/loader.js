"use strict";

(function () {
  const loader = document.querySelector('.loader');

  const hideLoader = function () {
    loader.style.display = 'none';
  };

  document.addEventListener("DOMContentLoaded", hideLoader);
})();
