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
var questions = [
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c. quotes"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "How do you create a function in JavaScript",
        choices: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        answer: "b. function myFunction()"
    },
    {
        question: "How do you call a function named myFunction?",
        choices: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
        answer: "c. myFunctions()"
    },
    {
        question: "To see if two variables are equal in an if / else statement you would use ____.",
        choices: ["a. =", "b. ==", "c. 'equals'", "d. !="],
        answer: "b. =="
    },
    {
        question: "The first index of an array is ____.",
        choices: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a. 0"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choices: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
        answer: "c. if(i == 5)"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
        answer: "a. onclick"
    }
];
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

