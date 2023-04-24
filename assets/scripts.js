var timerEl = document.getElementById("timer");
var timeLeft = 0
timerEl.textContent = "Time: " + timeLeft

var firstPageEl = document.querySelector(".firstPage")
var secondPageEl = document.querySelector(".secondPage")
var thirdPageEL = document.querySelector(".thirdPage")
var fourthPageEL = document.querySelector(".fourthPage")
var fithPageEL = document.querySelector(".fithPage")

var wrong = document.querySelector(".wrong")
var correct = document.querySelector(".correct")

var correctAnswer1 = document.querySelector("#correctAnswer1")
var wrongAnswers1 = document.getElementById("wrongAnswer1")
var wrongAnswers101 = document.getElementById("wrongAnswer1.1")
var wrongAnswers102 = document.getElementById("wrongAnswer1.2")

var correctAnswer2 = document.querySelector("#correctAnswer2")
var wrongAnswers2 = document.getElementById("wrongAnswer2")
var wrongAnswers201 = document.getElementById("wrongAnswer2.1")
var wrongAnswers202 = document.getElementById("wrongAnswer2.2")

var correctAnswer3 = document.querySelector("#correctAnswer3")
var wrongAnswers3 = document.getElementById("wrongAnswer3")
var wrongAnswers301 = document.getElementById("wrongAnswer3.1")
var wrongAnswers302 = document.getElementById("wrongAnswer3.2")

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
  wrong.classList.remove('hide')
}
function displaycorrect(){
  correct.classList.remove('hide')
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
  displayWrong ()
  showQuestion2()
}
function correctAnswer1NextQuestion(){
  displaycorrect()
  showQuestion2()
}

function wrongAnswer2NextQuestion(){
  displayWrong ()
  showQuestion3()
}
function correctAnswer2NextQuestion(){
  displaycorrect()
  showQuestion3()
}

function wrongAnswer3NextQuestion(){
  displayWrong ()
  showQuestion4()
}
function correctAnswer3NextQuestion(){
  displaycorrect()
  showQuestion4()
}


var startQuizButton = document.querySelector(".startbutton")
startQuizButton.addEventListener("click", startQuiz)

correctAnswer1.addEventListener("click", correctAnswer1NextQuestion)
wrongAnswers1.addEventListener("click", wrongAnswer1NextQuestion)
wrongAnswers101.addEventListener("click", wrongAnswer1NextQuestion)
wrongAnswers102.addEventListener("click", wrongAnswer1NextQuestion)


correctAnswer2.addEventListener("click", correctAnswer2NextQuestion)
wrongAnswers2.addEventListener("click", wrongAnswer2NextQuestion)
wrongAnswers201.addEventListener("click", wrongAnswer2NextQuestion)
wrongAnswers202.addEventListener("click", wrongAnswer2NextQuestion)

correctAnswer3.addEventListener("click", correctAnswer3NextQuestion)
wrongAnswers3.addEventListener("click", wrongAnswer3NextQuestion)
wrongAnswers301.addEventListener("click", wrongAnswer3NextQuestion)
wrongAnswers302.addEventListener("click", wrongAnswer3NextQuestion)