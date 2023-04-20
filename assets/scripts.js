var timerEl = document.getElementById('timer');
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
     timerEl.textContent="Time: "+timeLeft;
     timeLeft--;
  
     if (timeLeft === 0){
      timerEl.textContent="";
      clearInterval(timeInterval)
      displayMessage();
      
     }
    },1000);
  }