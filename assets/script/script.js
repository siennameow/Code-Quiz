/*Acceptance Criteria*/
    // GIVEN I am taking a code quiz
    // WHEN I click the start button
    // THEN a timer starts and I am presented with a question
    // WHEN I answer a question
    // THEN I am presented with another question
    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock
    // WHEN all questions are answered or the timer reaches 0
    // THEN the game is over
    // WHEN the game is over
    // THEN I can save my initials and my score

/*Define variables*/
    //Assignment Code to each section
    //Define questions (Object)
    //Set other variables
var timeLeft = document.getElementById("timer");

var secondsLeft = 100;
/*Functions*/
    //WHEN I click the start button, THEN a timer starts(The setInterval() Method)
function countdown() {
        
        var timerInterval = setInterval(function () {

          secondsLeft--;
          timeLeft.textContent = "Time left: " + secondsLeft + " s";

            if(secondsLeft === 0) {

            clearInterval(timerInterval);

            sendMessage();
            }
    }, 1000);
}
function sendMessage() {
    timeLeft.textContent = "Time is up!";  
}

countdown();
    //Presented with a question and answers
    //WHEN I answer a question,Show if answer is correct or wrong 
    //THEN I am presented with another question
    //WHEN all questions are answered or the timer reaches 0, Game is over
    //Save initials and score
    //Store scores into local storage
    //Show highscores

/* Add event listeners*/
