
butonSub.addEventListener("click", draw)
butonRes.addEventListener("click", clear)
// this.xbutton.addEventListener("click", deleteTask)


window.addEventListener("load", redraw)

// function deleteTask(){
// parent.remove()
// }
function deleteTask(){
    let delBut = document.getElementById(this.id)
    console.log(delBut)
    delBut.parentNode.parentNode.removeChild(delBut.parentNode);
    deleteCard();

}
function deleteCard() {
    // const i = findI(id);
    // if (!id) return;
    returnedArray.splice(1);
    draw()
}
function buildTask(){
    TASK_DOM = {
        id: parseInt(Math.floor(1000 + Math.random() * 9000)),
        taskName: document.getElementById("taskName").value,
        dueDate: document.getElementById("dueDate").value,
        taskDetail: document.getElementById("taskDetail").value,
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
const butX = document.createElement("button")
butX.innerHTML = '<i class="glyphicon glyphicon-remove"></i>'
butX.addEventListener("click",deleteTask)
butX.className= ("close")
butX.id = ("but" + returnedArray[i].id)
div.append(butX)

const div2 = document.createElement("div")
div.append(div2)
div2.className= ("card-header")

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
    if (returnedArray.length > 1){ return }
    for(var i=0;i<localStorage.length; i++) {
        var key = localStorage.key( i );
        var item = JSON.parse( localStorage.getItem( key ) );
        // if (item == "") {return}
        returnedArray.push(item)
      }
      generate()
}