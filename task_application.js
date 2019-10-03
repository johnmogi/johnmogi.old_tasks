function deleteTask() {
    let delBut = document.getElementById(this.id)
    console.log(delBut)
    delBut.parentNode.parentNode.removeChild(delBut.parentNode);
    deleteCard();

}

function deleteCard() {
    returnedArray.splice(1);
    draw()
}

function buildTask() {
    if (checkValid === false) {
        return
    }
    for (let i = -1; i < returnedArray.length; i++) {
        TASK_DOM = {
            // id: parseInt(Math.floor(100 + Math.random() * 900) + i),
            id: i + 10,
            Name: document.getElementById("taskName").value,
            Date: document.getElementById("dueDate").value,
            Detail: document.getElementById("taskDetail").value,
            status: "active"
        }
        // if (!TASK_DOM[i].id === ""){ returnedArray.splice(0) }

    }
    returnedArray.push(TASK_DOM) 

    for (let i = 0; i < returnedArray.length; i++) {
        // localStorage.setItem(JSON.stringify(taskArray));
        localStorage.setItem(JSON.stringify(returnedArray[i].id), JSON.stringify(returnedArray[i]));

    }



}

function generate() {
    stage.innerHTML = ""

    for (let i = 0; i < returnedArray.length; i++) {

        const div = document.createElement("div")
        stage.append(div)
        div.className = ("card mb-3 col-3")
        div.id = "note" + returnedArray[i].id
        const butX = document.createElement("button")
        butX.innerHTML = '<i class="far fa-trash-alt"></i>'
        butX.addEventListener("click", deleteTask)
        butX.className = ("close")
        butX.id = ("but" + returnedArray[i].id)
        div.append(butX)

        const div2 = document.createElement("div")
        div.append(div2)
        div2.className = ("card-header")
        div2.append(returnedArray[i].Name)

        const div3 = document.createElement("div")
        div.append(div3)
        div3.className = ("card-body")
        div3.append(returnedArray[i].Detail)

        const div4 = document.createElement("div")
        div.append(div4)
        div4.className = ("date-body")
        div4.innerHTML = '<i class="far fa-calendar"></i>'
        div4.append(returnedArray[i].Date)

    }
}

function draw() {
    validate()
    if (checkValid === false) {
        returnedArray.length = 0;
        // form.preventDefault();
        // creator.stopPropagation();
        return
    }
    // timeValid()
    buildTask()
    generate()
}

function redraw() {
    if (localStorage.length < 1) {
        return
    }
    if (returnedArray.length > 1) {
        return
    }
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var item = JSON.parse(localStorage.getItem(key));
        // if (item == "") {return}
        returnedArray.push(item)
    }
    generate()
}