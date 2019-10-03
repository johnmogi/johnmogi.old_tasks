butonSub.addEventListener("click", createNewCard)
butonRes.addEventListener("click", clear)





// stages to construct:

// clear



// draw

//drawing in the dom
function draw() {
    clear()
    //running throgh the array(that gets extra values when i press the savebtn )
    for (let i = 0; i < taskArray.length; i++) {

        drawCard(taskArray[i])


    }
    // clearForm()
}
function clear() {
    TASK_DOM.stage.innerHTML = ""
}


function drawCard(task) {
    const { stage } = TASK_DOM;
    const taskCard = createNewCard(task);
    if (!taskCard) {
        return;
    }
    stage.append(taskCard)

}

function createNewCard(task) {
    const { taskName, dueDate, task_description } = task;
    
    if (!taskName || !dueDate || !task_description) return;
   
    taskArray.push(new tasksConst(taskName.value, dueDate.value, task_description.value))

    console.log(stickyNoteDiv)

    // const deleteButton = document.createElement("Button")
    // deleteButton.innerText = "X";

    // deleteButton.className = "btn btn-danger float-right glyphicon glyphicon-remove";
    // deleteButton.addEventListener("click", deleteCarHandler)


    // cardBody2.append(deleteButton)

    // cardMain.append(deleteButton, cardBody1, cardList);
    // stickyNoteDiv.append(cardMain)

    cardMain.addEventListener("mouseover", function () {
        deleteButton.style.visibility = "visible";

    })
    cardMain.addEventListener("mouseout", function () {
        deleteButton.style.visibility = "hidden"


    })
    // TASK_DOM.stage.append(stickyNoteDiv)
}


// function savetask() {
//     const { taskName, dueDate, task_description } = TASK_DOM

//     const index = findI(taskArray, taskName.value)
//     if (index !== undefined) {
//         draw()

//         return;
//     }
//     taskArray.push(new tasksConst(taskName.value, dueDate.value, task_description.value))

//     draw()


// }

// function deleteCard(id) {
//     const i = findI(taskArray, id);
//     if (!id) return;
//     taskArray.splice(i, 1);
//     draw()
// }


// function tasksConst(_name, _year, _description) {
//     this.taskName = _name;
//     this.dueDate = _year;
//     this.task_description = _description;
// }

// function findI(array, id) {
//     let taskId = id.toLowerCase()
//     for (let i = 0; i < array.length; i++) {
//         let taskIndex = array[i].taskName
//         if (taskId === taskIndex) {
//             return i;
//         }

//     }
// }


// function clearForm() {
//     const { taskName, dueDate, task_description } = TASK_DOM;
//     task_description.value = ""
//     dueDate.value = ""
//     taskName.value = ""
// }



// function initSaveButtons(data, indexToSkip) {
//     for (let index = 0; index < data.length; index++) {
//         if (index !== indexToSkip) data[index].editMode = false;
//     }
// }


// function deleteCarHandler() {
//     deleteCard(this.parentElement.parentElement.id);
// }