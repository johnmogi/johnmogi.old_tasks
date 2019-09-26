// butonSub completed incomplete all creator  taskName dueDate
// const TASK_DOM= {};
const taskArray = [];
const completed = document.getElementById("completed")
const incomplete = document.getElementById("incomplete")
const all = document.getElementById("all")

// const creator = document.getElementById("creator")
// const taskName = document.getElementById("taskName")
// const dueDate = document.getElementById("dueDate")

// const taskDetail = document.getElementById("taskDetail")
// const timepicker5 = document.getElementById("timepicker5")

const butonSub = document.getElementById("butonSub")


const TASK_DOM = {
    id: parseInt(Math.floor(1000 + Math.random() * 9000)),
    create_card_form: document.getElementById("creator"),
    taskName: document.getElementById("taskName").value,
    dueDate: document.getElementById("dueDate").value,
    taskDetail: document.getElementById("taskDetail").value,
    stage: document.getElementById("stage"),
}


//Implement:
// status: completed, incomplete, deleted




// window.addEventListener('load', function() {
//     this.console.log("ready library")


// });


