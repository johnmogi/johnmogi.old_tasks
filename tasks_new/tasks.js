
butonSub.addEventListener("click", draw)


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
function buildTask(){
    
    TASK_DOM = {
        id: parseInt(Math.floor(1000 + Math.random() * 9000)),
        // create_card_form: document.getElementById("creator"),
        taskName: document.getElementById("taskName").value,
        dueDate: document.getElementById("dueDate").value,
        taskDetail: document.getElementById("taskDetail").value,
        stage: document.getElementById("stage"),
        status: "active"
    }
    taskArray.push(TASK_DOM)
    for (let i = 0; i < taskArray.length; i++) {
        localStorage.setItem('Tasks'+[i], JSON.stringify(taskArray[i]));
        
    }
    // localStorage.setItem(TASK_DOM.name, TASK_DOM.value );   
    console.log(taskArray) 
}
function storeTask(){

    // for (let i = 0; i < taskArray.length; i++) {
    //     localStorage.setItem(taskArray);            
    // }
    
}

function retrieveTaskFromLs(){
    // for(var i=0;i<inputs.length; i++) {
    //     var key = inputs.key( i );
    //     var item = JSON.parse( localStorage.getItem( key ) );
    //   }
      
}
function draw(){

    validate()
    timeValid()
    buildTask()
    storeTask()
}




