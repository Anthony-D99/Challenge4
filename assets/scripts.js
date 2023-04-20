var timerEl = document.getElementById("timer");
var timeLeft = 0
timerEl.textContent = "Time: "+timeLeft


function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
     timerEl.textContent=timeLeft;
     timeLeft--;
  
     if (timeLeft === 0){
      timerEl.textContent="";
      clearInterval(timeInterval)
      displayMessage();
      
     }
    },1000);
  }


function startQuiz{
 if(startQuiz == true){
  countdown()
 }
}
var startQuizButton = document.querySelector(".startbutton")
startQuizButton.addEventListener("click", startQuiz)

