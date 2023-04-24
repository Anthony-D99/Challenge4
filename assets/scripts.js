var timerEl = document.getElementById("timer");
var timeLeft = 0
timerEl.textContent = "Time: " + timeLeft

var firstPageEl = document.querySelector(".firstPage")
var secondPageEl = document.querySelector(".secondPage")
var thirdPageEL = document.querySelector(".thirdPage")
var fourthPageEL = document.querySelector(".fourthPage")
var fithPageEL = document.querySelector(".fithPage")

var wrong = document.querySelector(".wrong")
var result = document.querySelector(".result")

var correctAnswer1 = document.querySelector("#correctAnswer1")
var wrongAnswer1 = document.getElementById("wrongAnswer1")
var wrongAnswer101 = document.getElementById("wrongAnswer1.1")
var wrongAnswer102 = document.getElementById("wrongAnswer1.2")

var correctAnswer2 = document.querySelector("#correctAnswer2")
var wrongAnswer2 = document.getElementById("wrongAnswer2")
var wrongAnswer201 = document.getElementById("wrongAnswer2.1")
var wrongAnswer202 = document.getElementById("wrongAnswer2.2")

var correctAnswer3 = document.querySelector("#correctAnswer3")
var wrongAnswer3 = document.getElementById("wrongAnswer3")
var wrongAnswer301 = document.getElementById("wrongAnswer3.1")
var wrongAnswer302 = document.getElementById("wrongAnswer3.2")

function countdown() {
  var timeLeft = 75;
  var timeInterval = setInterval(function () {
    timerEl.textContent = "Time: "+ timeLeft;
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "";
      clearInterval(timeInterval)
      displayMessage();
    }
  }, 1000);
}
function displayWrong(){
  wrong.textContent= 'Wrong!'
}
function displaycorrect(){
  correct.textContent= 'Correct!'
}


function showQuestion1() {
  firstPageEl.classList.add('hide')
  secondPageEl.classList.remove('hide')
}
function showQuestion2(){
  secondPageEl.classList.add('hide')
  thirdPageEL.classList.remove('hide')
}
function showQuestion3(){
  thirdPageEL.classList.add('hide')
  fourthPageEL.classList.remove('hide')
}
function showQuestion4(){
  fourthPageEL.classList.add('hide')
  fithPageEL.classList.remove('hide')
}



function startQuiz() {
    countdown()
    showQuestion1()
}
function wrongAnswer1NextQuestion(){
  if (wrongAnswer1){
    result.textContent = 'Wrong!'
  }
  showQuestion2()
}
function correctAnswer1NextQuestion(){
  if (correctAnswer1){
    result.textContent = 'Correct!'
  }
  showQuestion2()
}

function wrongAnswer2NextQuestion(){
  if (wrongAnswer2){
    result.textContent = 'Wrong!'  }
  showQuestion3()
}  

function correctAnswer2NextQuestion(){
  if (correctAnswer2){
    result.textContent = 'Correct!'  }
  showQuestion3()
}

function wrongAnswer3NextQuestion(){
  if (wrongAnswer3){
    result.textContent = 'Wrong!'  }  
  showQuestion4()
}
function correctAnswer3NextQuestion(){
  if (correctAnswer2){
    result.textContent = 'Correct!'  }  
  showQuestion4()
}


var startQuizButton = document.querySelector(".startbutton")
startQuizButton.addEventListener("click", startQuiz)

correctAnswer1.addEventListener("click", correctAnswer1NextQuestion)
wrongAnswer1.addEventListener("click", wrongAnswer1NextQuestion)
wrongAnswer101.addEventListener("click", wrongAnswer1NextQuestion)
wrongAnswer102.addEventListener("click", wrongAnswer1NextQuestion)


correctAnswer2.addEventListener("click", correctAnswer2NextQuestion)
wrongAnswer2.addEventListener("click", wrongAnswer2NextQuestion)
wrongAnswer201.addEventListener("click", wrongAnswer2NextQuestion)
wrongAnswer202.addEventListener("click", wrongAnswer2NextQuestion)

correctAnswer3.addEventListener("click", correctAnswer3NextQuestion)
wrongAnswer3.addEventListener("click", wrongAnswer3NextQuestion)
wrongAnswer301.addEventListener("click", wrongAnswer3NextQuestion)
wrongAnswer302.addEventListener("click", wrongAnswer3NextQuestion)

 