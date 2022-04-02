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
var introPage = document.querySelector("#introduction");
var startBtn = document.querySelector("#start_button");

var questionPage = document.querySelector("#question_page");
var askQuestion = document.querySelector("#ask_question");

var answerBtn1 = document.querySelector("#answer_btn1");
var answerBtn2 = document.querySelector("#answer_btn2");
var answerBtn3 = document.querySelector("#answer_btn3");
var answerBtn4 = document.querySelector("#answer_btn4");
    //Define questions (Object)
var questionSource = [
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
// var questionCount = 0;
/*Functions*/
    //WHEN I click the start button, THEN a timer starts(The setInterval() Method)
function countdown() {
        
        var timerInterval = setInterval(function () {

          secondsLeft--;
          timeLeft.textContent = "Time left: " + secondsLeft + " s";

            if(secondsLeft === 0) {

            clearInterval(timerInterval);

            timeLeft.textContent = "Time is up!"; 
            }
    }, 1000);
}



    //Presented with a question and answers
function startQuiz () {
        introPage.style.display = "none";
        questionPage.style.display = "block";
        questionCount = 0;
        countdown();
        showQuestion(questionCount);
      
}

function showQuestion (num) {
    if (num < questionSource.length) {
        askQuestion.textContent = questionSource[num].question;
        answerBtn1.textContent = questionSource[num].choices[0];
        console.log(answerBtn1);
        answerBtn2.textContent = questionSource[num].choices[1];
        answerBtn3.textContent = questionSource[num].choices[2];
        answerBtn4.textContent = questionSource[num].choices[3];
    }

    // questionPage.style.display = "block";
    // answerBtn1.style.display = "block";
    // questionPage.style.display = "block";
    // questionPage.style.display = "block";
}
    //WHEN I answer a question,Show if answer is correct or wrong 
    //THEN I am presented with another question
    //WHEN all questions are answered or the timer reaches 0, Game is over
    //Save initials and score
    //Store scores into local storage
    //Show highscores

/* Add event listeners*/
startBtn.addEventListener("click", startQuiz);
// startBtn.addEventListener("click", showQuestion(0));

