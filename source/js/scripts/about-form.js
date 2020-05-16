"use-strict";

(function() {
  const fileInput = document.getElementById('about-form-file-upload');
  const fileName = document.querySelector('.about-form__upload-btn');

  if (fileInput) {
    fileInput.addEventListener('change', function(event) {
      const input = event.target;

      for (let i = 0; i < input.files.length; i++) {
        fileName.textContent = input.files[i].name;
      }
    });
  }
})();
