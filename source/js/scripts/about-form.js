/*"use-strict";

(function() {
  const form = document.querySelector('.about__request form');

  if(form) {
    const mailInput = document.getElementById('about-form__email');
console.log('form-validation')
    let confirm = false

    form.addEventListener('submit', (evt) => {
      if(confirm) {
        console.log('ok')
        return
      } else if(!confirm) {
        evt.preventDefault();
        console.log('error')
      }
    })

    form.addEventListener('change', () => {
      if(validateEmail(mailInput.value)) {
        mailInput.style.color = "rgb(0, 0, 0)"
        confirm = true;
      } else {
        mailInput.style.color = "red"
        confirm = false;
      }
    })

    function validateEmail(email) {
      var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regexp.test(String(email).toLowerCase());
    }
  }
})();*/
