// setTimeout(()=> alert('welcome back'),1000)
let time = 500
let timerElement = document.getElementById("timer")

let minutes = Math.floor(time / 60);
let seconds = time % 60;
timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;




let numA = document.getElementById("home") 
let numB = document.getElementById("guest")

let num = Number(numA.textContent)
let num2 = Number(numB.textContent)

function updateHighlight(){
    if (num > num2){
    numA.classList.add("highlight")
    numB.classList.remove("highlight")
} else if (num2 > num){
    numB.classList.add("highlight")
    numA.classList.remove("highlight")
}else if (num === num2){
    numA.classList.remove("highlight")
    numB.classList.remove("highlight")
}
}

function plus1(){
    num += 1
    numA.textContent = num
    updateHighlight()
}
function plus2(){
    num += 2
    numA.textContent = num
    updateHighlight()
}
function plus3(){
    num += 3
    numA.textContent = num
    updateHighlight()
}

function plus1G(){
    num2 += 1
    numB.textContent = num2
    updateHighlight()
}
function plus2G(){
    num2 += 2
    numB.textContent = num2
    updateHighlight()
}
function plus3G(){
    num2 += 3
    numB.textContent = num2
    updateHighlight()
}

function newgame(){
    num = 0
    num2 = 0
    numA.textContent = num
    numB.textContent = num2
    updateHighlight()
}


// function pur(){
//     let message = "something went wrong please try again later!"
//     document.getElementById("error").textContent = message
// }

// let count = 0
// document.getElementById("firstcount").innerText = count;


// function countinc(){
//     count++
//     document.getElementById("firstcount").innerText = count;
// }

// function countdec() {
//     count--
//     document.getElementById("firstcount").innerText = count;
// }

// function save(){
//     let countStr = count + " - "
//     document.getElementById("count").textContent += countStr;
//     count = 0
//     document.getElementById("firstcount").textContent = count;
// }


// let myname = "qwuen"
// let greeting = "Hi! my name is "
// let mygreeting = greeting + myname

// console.log(mygreeting);

// let myname = "qwuen"
// let greeting = "Welcome back "
// let mygreeting = greeting + myname

// document.getElementById("welc").innerText = mygreeting


// let mypoint = 3;
// function add3Points() {
//     mypoint += 3
// }

// function remove1Point(){
//     mypoint -= 1
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// console.log(mypoint);

// let num1 = 80
// let num2 = 2 
// document.getElementById("num1").textContent = num1
// document.getElementById("num2").textContent = num2

// function add(){
//     let tot = num1 + num2
//     document.getElementById("total").textContent = tot
// }
// function mul(){
//     let tot = num1 * num2
//     document.getElementById("total").textContent = tot
// }
// function sub(){
//     let tot = num1 - num2
//     document.getElementById("total").textContent = tot
// }
// function div(){
//     let tot = num1 / num2
//     document.getElementById("total").textContent = tot
// }