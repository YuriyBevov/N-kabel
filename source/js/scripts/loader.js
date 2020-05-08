"use strict";

(function () {
  const loader = document.querySelector('.loader');

  const hideLoader = function () {
    setTimeout(endLoading, 500)
    function endLoading () {
      loader.style.display = 'none';
      clearTimeout(hideLoader);
      document.removeEventListener('DOMContentLoaded', hideLoader);
    }
  };

  document.addEventListener("DOMContentLoaded", hideLoader);
})();
