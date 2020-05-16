"use-strict";

(function() {
  const fileUpload = window.util.fileUpload;

  const input = document.getElementById('footer-form-file-upload');
  const fileName = document.querySelector('.footer-form__upload-btn');

  if (input) {
    fileUpload(input, fileName);
  }
})();
