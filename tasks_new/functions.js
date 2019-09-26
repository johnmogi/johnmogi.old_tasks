// bootstrap 4 standard validation:
          // Example starter JavaScript for disabling form submissions if there are invalid fields
          (function() {
            'use strict';
            window.addEventListener('load', function() {
              // this.console.log("ready functions")
              // Fetch all the forms we want to apply custom Bootstrap validation styles to
              var forms = document.getElementsByClassName('needs-validation');
              // Loop over them and prevent submission
              var validation = Array.prototype.filter.call(forms, function(form) {
                butonSub.addEventListener('click', function(event) {
                  if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                  form.classList.add('was-validated');
                }, false);
              });
            }, false);
          })();

    
          // assign current date to date:
var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
var dd = today.getDate()
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var mm = today.getMonth()+1

var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
today = [dd,mm,yyyy]

const taskCreationDate = (today);

