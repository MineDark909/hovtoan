var question = document.getElementById("question")
var answer = document.getElementById("answer")
var stat = document.getElementById("status")

function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min)) + min; // You can remove the Math.floor if you don't want it to be an integer
}

var num1 = randomNum(1, 999)
var num2 = randomNum(1, 999)

question.innerHTML = String(num1) + "+" + String(num2)

function checkCoi(){
    if (answer.value == num1 + num2){
        stat.innerHTML = "Đúng rồi đó mày, ye"
        num1 = randomNum(1, 999)
        num2 = randomNum(1, 999)
        question.innerHTML = String(num1) + "+" + String(num2)
    }else{
        stat.innerHTML = "Mày ngu à? ko biết xài mấy tính à?"
    }
}