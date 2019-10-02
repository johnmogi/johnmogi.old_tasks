function clear() {
  stage.innerHTML = ""
   localStorage.clear();
   taskArray.length = 0;
   returnedArray.length = 0;
}

          (function() {
            'use strict';
            window.addEventListener('load', function() {

            // window.addEventListener('load', validateBs)  
            
            // function validateBs(){ 
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

        // }



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





function timeValid(){
  let datenow =  dueDate.value.split("-")
  let  yearFromInput= parseInt(datenow[0])
  let dayFromInput  = parseInt(datenow[2])
  let monthFromInput = parseInt(datenow[1])
  if (yearFromInput < yyyy || 
    monthFromInput < mm,
    yearFromInput <= yyyy &&
    monthFromInput < mm,
    yearFromInput <= yyyy &&
    monthFromInput <= mm &&
    dayFromInput < dd) { 
//    if (monthFromInput >= mm) { 
//  {
  messageBoard.innerText = ("please choose a future date")
    messageBoard.style.color = "red"
  //  }
 }
 }



// function timeValid(){
//    let datenow =  dueDate.value.split("-")
//    let  yearFromInput= parseInt(datenow[0])
//    // let dayFromInput  = parseInt(datenow[2])
//    let monthFromInput = parseInt(datenow[1])
//    if (yearFromInput < yyyy || monthFromInput < mm ){
//     messageBoard.innerText = ("please choose a future date")
//     messageBoard.style.color = "red"
//     // alert("please choose a future date")
//   }
//   }

function validate(){
   if (!taskName.value || !taskDetail.value ) {
    messageBoard.innerText = ("Please Fill All Inputs")
    messageBoard.style.color = "red"
    // alert("Please Fill All Inputs")
    return;
}
   timeValid()
}

