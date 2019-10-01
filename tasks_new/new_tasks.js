
butonSub.addEventListener("click", draw)
butonRes.addEventListener("click", clear)
// this.xbutton.addEventListener("click", deleteTask)

window.addEventListener("load", redraw)

// function deleteTask(){
// parent.remove()
// }


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
returnedArray.push(TASK_DOM)
// taskArray.push(TASK_DOM)

for (let i = 0; i < returnedArray.length; i++) {
    // localStorage.setItem(JSON.stringify(taskArray));
    localStorage.setItem(JSON.stringify(returnedArray[i].id), JSON.stringify(returnedArray[i]));

}



}

function generate(){
stage.innerHTML = ""

for (let i = 0; i < returnedArray.length; i++) {

const div = document.createElement("div")
stage.append(div)
// div.className= ("card text-white bg-warning mb-3 col-4")
div.className= ("card mb-3 col-4")

const div2 = document.createElement("div")
div.append(div2)
div2.className= ("card-header")

div2.innerHTML = (xbutton)
// xbutton.addEventListener("click", alert(("yo")))
// this.xbutton = returnedArray[i].id

// console.log(this.xbutton)
div2.append(returnedArray[i].taskName)

const div3 = document.createElement("div")
div.append(div3)
div3.className= ("card-body")
div3.append(returnedArray[i].taskDetail)

div.append(returnedArray[i].dueDate)

    }
}
function draw(){
    validate()
    timeValid()
    buildTask()
    generate()
}
function redraw(){
    if (localStorage.length < 1){ return }

    for(var i=1;i<localStorage.length -1; i++) {
        var key = localStorage.key( i );
        var item = JSON.parse( localStorage.getItem( key ) );
        if (item == "") {return}
        returnedArray.push(item)
      }
    draw()
}