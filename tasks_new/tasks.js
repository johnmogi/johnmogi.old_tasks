

// completed  incomplete  all 

//  form: creator  name: taskName date: dueDate

//  details: taskDetail  time: timepicker5 
 
//  butonSub 


butonSub.addEventListener("click", storage)

let e = ""

function validate(){
   
    if (taskName.value,dueDate.value == ""){
        e = false 
        return
    }
}
function storage(){
    validate();

    console.log("start")
    TASK_DOM.name = taskName.value  ,
    TASK_DOM.date = dueDate.value  ,
    TASK_DOM.time = timepicker5.value   ,
    TASK_DOM.details =   taskDetail.value
}






