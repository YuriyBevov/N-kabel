"use-strict";

(function() {
  const fileInput = document.getElementById('footer-form-file-upload');
  const fileName = document.querySelector('.footer-form__upload-files');

  if (fileInput) {
    fileInput.addEventListener('change', function(event) {
      const input = event.target;

      for (let i = 0; i < input.files.length; i++) {
        fileName.textContent = input.files[i].name;
      }
    });
  }
})();
