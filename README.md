# Code-Quiz🔥

## Description 📝 

JavaScript is a powerful language that makes everything possible. The beauty of the syntax makes all kinds of learners and developers understand the language with ease and astounding pieces of technology are created.

This JavaScript Code Quiz challenge has 8 questions total and they’re all multiple choice. Upon completion, you will receive a score. By submitting your inital, your score will be added to a Highscore record. The Highscore board allows you to track your personal scores and display the top 5 scores yo have.

The webpage is easy for you to access through one link : https://siennameow.github.io/Password-Generator/ and is designed to work with different screen sizes as you need.

Want to test your knowledge of JavaScript? Give our free coding quiz a try! 

## Table of Contents 📖

* [Webpage Preview ⭐](#webpage-preview-)
* [Code-Snippet 💻](#code-snippet-)
* [Custom-Features 📋](#custom-features-)
* [Usage 💡](#usage-)
* [Skill-Improved 📚](#skill-improved-)
* [Technologies 🔧](#technologies-)
* [Authors 👩](#authors-)
* [Credits 🙌](#credits-)

## Webpage Preview ⭐
 



## Custom Features 📋

⚡️ Timer-set time limit\
⚡️ 8 JavaScript multiple choice questions\
⚡️ Check your answer and show correct answer\
⚡️ Local record-save your initial and score to local\
⚡️ Highscore-check top 5 high score record

## Code-Snippet 💻

JavaScript

Function to set the timer
```JavaScript
function countdown() { 
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = "Time left: " + secondsLeft + " s";
    if (secondsLeft <= 0){
    clearInterval(timerInterval);
    timeLeft.textContent = "Time is up!"; 
    // if time is up, show on score board content instead of "all done!"
    finish.textContent = "Time is up!";
    gameOver();
    } else  if(questionCount >= questionSource.length +1) {
        clearInterval(timerInterval);
        gameOver();
        } 
    }, 1000);
}
```


Function to sort score and ranking the highscore list
```JavaScript
function sort () {
    var unsortedList = getScore();
    if (getScore == null ){
        return;
    } else{
        unsortedList.sort(function(a,b){
        return b.score - a.score;
    })
    return unsortedList;
}};
```

Function to check the answer is correct or wrong
```JavaScript
function checkAnswer(event) {
    event.preventDefault();
    //make it display
    checkLine.style.display = "block";
    setTimeout(function () {
        checkLine.style.display = 'none';
    }, 1000);

    // answer check
    if (questionSource[questionNumber].answer == event.target.value) {
        checkLine.textContent = "Correct!"; 
        totalScore = totalScore + 1;

    } else {
        secondsLeft = secondsLeft - 10;
        checkLine.textContent = "Wrong! The correct answer is " + questionSource[questionNumber].answer + " .";
    }
         //presente another question
    if (questionNumber < questionSource.length -1 ) {
    // call showQuestions to bring in next question when any reactBtn is clicked
        showQuestion(questionNumber +1);
    } else {
    gameOver();
}
```


## Usage 💡

The link of the webpage is: 

- Step 1: Load the webpage.
- Step 2 :Click the "start" button to start the quiz and the timer.
- Step 3 :Choose one from the four choices and you will see whether your answer is correct right away.
- Step 4 :When you complete all the questions, or the time runs out, your score will be displayed and you can write down your initials and submit.
- Step 5 :After submiting your initial, you can always check Highscore record to see your top 5 scores.
- Step 6 :Clear the local record by simply hit the "clear Highscores" button.


Please note that:
The total time set for the quiz is 60 seconds.
When you answer question wrong, 10 seconds will be subtracted from the timer.

## Skill Improved 📚
✔️ Web APIs Local Storage\
✔️ Time Intervals\
✔️ Event Listener\
✔️ Preventing Default\
✔️ Setting Attributes


## Technologies 🔧

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Authors 👩

* **Sienna Li** 

- [Portfolio](#)
- [Github](https://github.com/siennameow)
- [LinkedIn](https://www.linkedin.com/in/hexuanli/)


## Credits 🙌

Thanks to the following people who helped me in this project:
- Jerome Chenette
- Manuel Nunes
- Vince Lee
