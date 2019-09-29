
butonSub.addEventListener("click", draw)
butonRes.addEventListener("click", clear)
window.addEventListener("load", retrieveTaskFromLs)

function clear() {
   stage.innerHTML = ""
    localStorage.clear();
    taskArray.length = 0;
}

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
    // if (taskName.value,dueDate.value == ""){
        if (taskName.value === "" || taskDetail.value == "" ){ 
        // e = false 
        return
        }
    timeValid()
}
function buildTask(){
    // if (taskName.value == ""){  return };
    // validate();
    TASK_DOM = {
        id: parseInt(Math.floor(1000 + Math.random() * 9000)),
        // create_card_form: document.getElementById("creator"),
        taskName: document.getElementById("taskName").value,
        dueDate: document.getElementById("dueDate").value,
        taskDetail: document.getElementById("taskDetail").value,
        // stage: document.getElementById("stage"),
        status: "active"
    }

    // localStorage.setItem('Task ID', JSON.stringify(TASK_DOM));
   
    taskArray.push(TASK_DOM)
    for (let i = 0; i < taskArray.length; i++) {
        // localStorage.setItem(JSON.stringify(taskArray));
        localStorage.setItem(JSON.stringify('Task'+taskArray[i].id), JSON.stringify(taskArray[i]));
        
    }
    // localStorage.setItem(TASK_DOM.name, TASK_DOM.value );   
    // console.log(taskArray) 
}


function draw(){

    validate()
    timeValid()
    buildTask()
}

function generate(){
    for (let i = 0; i < returnedArray.length; i++) {
        const div = document.createElement("div")
stage.append(div)
div.className = ("card text-white bg-warning mb-3")
div.id ="headCard"
const icon = '<i class="glyphicon glyphicon-cloud"></i>'
const div2 = document.createElement("div")
headCard.append(div2)
div2.className = ("card-body")
div2.id ="bodycard"
const h5 = document.createElement("h5")
bodycard.append(h5)
h5.className = ("card-title")
h5.id ="titleCard"
titleCard.innerHTML = (icon)
titleCard.append(returnedArray[i].taskName)
    }


// card-header
}
function retrieveTaskFromLs(){
    
    if (localStorage.length = 0){ return }
    for(var i=0;i<localStorage.length; i++) {
        var key = localStorage.key( i );
        var item = JSON.parse( localStorage.getItem( key ) );
        returnedArray.push(item)
      }
     generate()

}





