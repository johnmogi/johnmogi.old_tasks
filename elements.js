document.addEventListener("DOMContentLoaded", () => {

    const butonSub = document.getElementById("butonSub")
    const creator = document.getElementById("creator")
    butonSub.addEventListener("click", draw)
    butonRes.addEventListener("click", clear)
    window.addEventListener("load", redraw)
    const buttonClose = document.getElementsByClassName("close")
    const messageBoard = document.getElementById("messageBoard")
    const vaildBypass = document.getElementById("vaildBypass")
    // const dueDate = document.getElementById("dueDate")
    // let datenow = dueDate.split("-")
    // let yearFromInput = parseInt(datenow[0])
    // let dayFromInput = parseInt(datenow[2])
    // let monthFromInput = parseInt(datenow[1])
});

let TASK_DOM = {
    // id: "",
    // taskName: "",
    // dueDate: "",
    // taskDetail: "",
    // status: ""
}

const delBut = document.getElementsByClassName("close")
const taskArray = [];
const returnedArray = [];
const completed = document.getElementById("completed")
const incomplete = document.getElementById("incomplete")
const all = document.getElementById("all")


//set the default date input
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
let today = year + "-" + month + "-" + day;