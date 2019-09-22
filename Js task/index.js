// 0. library: defining the order of actions:

// 1. Declaring the Elements from the DOM:
// 2. passing a value from within a scope to further reuse:
// 3. cleaning the canvas
// 4. validating the form
// 5. calculating the circle radius
// 6. genereting the actual canvas circle after calculation

// 1. Declaring the Elements from the DOM:


// let isReady = document.readyState

// if (isReady == true){ 

function startjs(){ 
const ballCreate = document.getElementById("ballCreate")
const ballC = document.getElementById("ballC")
const ballCalcul = document.getElementById("ballCalcul")
const submitBut = document.getElementById("submitBut")
const cleanCanvas = document.getElementById("cleanCanvas")
const stopGen = document.getElementById("stopGen")
const ballOutput = document.getElementById("ballOutput")
const stagetext = document.getElementById("stagetext")


// 2. passing a value from within a scope to further reuse:


let volume = 1;
// let interval = ""
// validate
// setting action buttons
submitBut.addEventListener("click", validate)
cleanCanvas.addEventListener("click", cleanCV)
// stopGen.addEventListener("click", clearInterval(randomCircles))

// 3. cleaning the canvas


function cleanCV(){
  const context = myCanvas.getContext('2d');
  context.clearRect(0, 0, myCanvas.width, myCanvas.height);
}

// 4. validating the form


function validate(e){ 

    e.preventDefault
if (ballCalcul.value === ""){
  stagetext.innerText= ("no field value")
  stagetext.style.color = ("red")
  ballCalcul.style.border = ("red")
    // alert("no field value")
// ballCalcul.style.border="#f00"
}
if(isNaN(ballCalcul.value)){
  stagetext.innerText= ("Please input a number")
  stagetext.style.color = ("red")
  ballCalcul.style.border = ("red")

    // alert("Please input a number")
}
else{
calculate();
// if volume number exceeds 94 - it will grow beyond 800px
if (volume > 397) {alert("it's too big!")
return
} 
generate();
}
}

//volume = number | PIE R (3)/ 3
// 23*4*3.14/3 = 8*4*3.14/3=33.49333


// 5. calculating the circle radius

function calculate(){
        const base = (ballCalcul.value*4) 
        const pieCalc = (base*3.14)/3 
    ballOutput.innerText= ("the Ball Volume is: " + pieCalc)
    return volume = pieCalc
    
}

// 6. genereting the actual canvas circle after calculation

function generate(){

  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = volume;
// console.log(radius)
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = '#B7B4B5';
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = '#757374';
  context.stroke();

}
}