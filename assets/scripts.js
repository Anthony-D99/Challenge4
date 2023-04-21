var timerEl = document.getElementById("timer");
var timeLeft = 0
timerEl.textContent = "Time: " + timeLeft

var firstPageEl = document.querySelector(".firstPage")
var secondPageEl = document.querySelector(".secondPage")
var thirdPageEL = document.querySelector(".thirdPage")
var fourthPageEL = document.querySelector(".fourthPage")
var fithPageEL = document.querySelector(".fithPage")
var wrong = document.querySelectorAll(".wrong")
var correct = document.querySelectorAll(".correct")
var correctAnswer1 = document.querySelector("#correctAnswer1")
var wrongAnswers1 = document.querySelectorAll("#wrongAnswer1")


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
var startQuizButton = document.querySelector(".startbutton")
startQuizButton.addEventListener("click", startQuiz)

correctAnswer1.addEventListener("click", correctAnswer1NextQuestion)
wrongAnswers1.addEventListener("click", wrongAnswer1NextQuestion)
