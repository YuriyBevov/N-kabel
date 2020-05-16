"use-strict";

(function() {
  const fileUpload = window.util.fileUpload;

  const input = document.getElementById("about-form-file-upload");
  const fileName = document.querySelector(".about-form__upload-btn");

  if (input) {
    fileUpload(input, fileName);
  }
})();
