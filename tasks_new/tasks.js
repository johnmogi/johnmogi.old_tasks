
butonSub.addEventListener("click", storage)


function timeValid(){
    let datenow =  dueDate.value.split("-")
    let  yearFromInput= parseInt(datenow[0])
    // let dayFromInput  = parseInt(datenow[2])
    let monthFromInput = parseInt(datenow[1])
    if (yearFromInput < yyyy || monthFromInput < mm ){
     alert("please choose a future date")
   }
   }

function validate(){
    if (taskName.value,dueDate.value == ""){
        // e = false 
        return
    }
    timeValid()
}
function storage(){
    validate();
    
    TASK_DOM.id= parseInt(Math.floor(1000 + Math.random() * 9000));
    TASK_DOM.name =taskName.value ;
    TASK_DOM.date = dueDate.value  ;
    TASK_DOM.time = timepicker5.value ;
    TASK_DOM.details =   taskDetail.value;
    taskArray.push(TASK_DOM)
}






