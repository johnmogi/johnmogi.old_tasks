
butonSub.addEventListener("click", draw)
butonRes.addEventListener("click", clear)
window.addEventListener("load", retrieveTaskFromLs)

function clear() {
   stage.innerHTML = ""
    localStorage.clear();
    taskArray.length = 0;
    returnedArray.length = 0;
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

    for (let j = 0; j < taskArray.length; j++) {
        returnedArray.push(taskArray[j])
    }
    
    // localStorage.setItem(TASK_DOM.name, TASK_DOM.value );   
    // console.log(taskArray) 
}


function draw(){

    validate()
    timeValid()
    buildTask()
    generate()
}

function generate(){
    for (let i = 0; i < returnedArray.length; i++) {
        const div = document.createElement("div")
stage.append(div)
div.className = ("card text-white bg-warning col-4")
const div2 = document.createElement("div")
div.append(div2)
div2.className = ("card-header")

const icon = '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'

div2.innerHTML = (icon)

const div3 = document.createElement("div")
div3.className = ("card-body")
div2.append(div3)
// headCard.append(div2)

const h3 = document.createElement("h3")
div3.append(h3)
h3.className = ("card-title")

h3.append(returnedArray[i].taskName)

const p = document.createElement("p")
p.className = ("card-text")
div3.append(p)

p.append(returnedArray[i].taskDetail)
const p2 = document.createElement("p")

const icon2 = '<span class="glyphicon-class">glyphicon glyphicon-calendar</span>'
p2.innerHTML = (icon2)
p2.innerText = (returnedArray[i].id)



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





