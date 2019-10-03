function clear() {
  stage.innerHTML = ""
  localStorage.clear();
  taskArray.length = 0;
  returnedArray.length = 0;
}

// (function () {
//   'use strict';
//   window.addEventListener('load', function () {
//     var forms = document.getElementsByClassName('needs-validation');
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function (form) {
//       butonSub.addEventListener('click', function (event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
// })();

// }

// function clearValid() {
//   var forms = document.getElementsByClassName('needs-validation');
//   form.classList.remove('was-validated');
//   form.classList.add('needs-validation');
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
    creator.classList.add('was-validated');
    messageBoard.innerText = ("Please Fill All Inputs")
    messageBoard.style.color = "#dc3545"
    // vaildBypass.innerText = ("please Check this field again")
    // vaildBypass.style.color = "#dc3545"
    // alert("Please Fill All Inputs")
    checkValid = false
  } else {
    messageBoard.innerText = ("...I'm Listening...")
    messageBoard.style.color = "#000"
    creator.classList.add('needs-validation');
    checkValid = true
  }
  // timeValid()
}