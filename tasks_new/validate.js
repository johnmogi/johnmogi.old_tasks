function clear() {
  stage.innerHTML = ""
  localStorage.clear();
  taskArray.length = 0;
  returnedArray.length = 0;
}

(function () {
  'use strict';
  window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      butonSub.addEventListener('click', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// }



function timeValid() {

  let checkValid = false

  if (
    dueDate.value == "",
    yearFromInput > yyyy
  )

  // yearFromInput < yyyy ||
  // monthFromInput < mm,
  // yearFromInput = yyyy &&
  // monthFromInput < mm)
  // ,
  // yearFromInput == yyyy &&
  // monthFromInput == mm &&
  // dayFromInput < dd) {
  {
    //    if (monthFromInput >= mm) { 
    //  {
    vaildBypass.innerText = ("please choose a future date")
    vaildBypass.style.color = "#dc3545"
    // dueDate.style.background = "#dc3545"
    checkValid = false
  } else {
    checkValid = true
  }
}


function validate() {
  if (!taskName.value || !taskDetail.value) {
    messageBoard.innerText = ("Please Fill All Inputs")
    messageBoard.style.color = "#dc3545"
    // alert("Please Fill All Inputs")
    checkValid = false
  } else {
    checkValid = true
  }
  timeValid()
}