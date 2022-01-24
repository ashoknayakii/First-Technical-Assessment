var questionBoxEl = document.querySelector("#question");
var buttonEl = document.querySelector("#answer-buttons");
console.log(questionBoxEl);
var startEl = document.querySelector("#start-btn");
var formEl = document.querySelector("#answer-options")
var timeEl = document.querySelector("#time")

var counter = 75;
setInterval(startTimer, 1000);
var isRunning = false;

var questionsIndex = 0;

var questions = [{

    Question: "Commonly used data types do not include:",
    choices: [
        { answer: "strings", correct: false },
        { answer: "booleans", correct: false },
        { answer: "alerts", correct: true },
        { answer: "numbers", correct: false },]
},
{
    Question: "The condition an if/else is enclosed with _________",
    choices: [{ answer: "quotes", correct: false },
    { answer: "curly brackets", correct: false },
    { answer: "parentheses", correct: true },
    { answer: "square brackets", correct: false }]
},
{
    Question: "Arrays in Javascript Can Be Used To Store",
    choices: [{ answer: "numbers and strings", correct: false },
    { answer: "booleans", correct: false },
    { answer: "other arrays", correct: false },
    { answer: "all of the above", correct: true }]
},
{
    Question: "String values must be enclosed within ________",
    choices: [{ answer: "commas", correct: false },
    { answer: "curly brackets", correct: false },
    { answer: "quotes", correct: true },
    { answer: "parentheses", correct: false }]
},
{
    Question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [{ answer: "Javascript", correct: false },
    { answer: "terminal/bash", correct: false },
    { answer: "for loops", correct: false },
    { answer: "console log", correct: true }]
}
]
// WHEN I click the Start button

// function startTimer() {
//     let minutes = Math.floor(counter / 60);
//     let seconds = counter % 60;
//     console.log(minutes, seconds)
//     timeEl.innerHTML = "Time left:" + minutes + ":" + seconds 
//     counter--
//     if (counter <= 0) {
//         alert("Your time is up!");
//         clearInterval
//     }
// }


//     else if (currentQuestion < 1) {
//         alert("Quiz Complete. See your score!")
//     }
// }


console.log(questions);

function startQuiz(event) {
    startTimer ()



    viewQuestion();
}


// THEN a timer starts and I am presented with a question

function viewQuestion() {
    var currentQuestion = questions[questionsIndex];
    console.log(currentQuestion);
    questionBoxEl.textContent = currentQuestion.Question;
    currentQuestion.choices.forEach((choice) => {
        const label = document.createElement("label");
       
        label.innerHTML = choice.answer;
        label.htmlFor = choice.answer;
        const radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("id", choice.answer);
        radio.setAttribute("value", choice.answer);
        radio.setAttribute("name", "choice");
        formEl.appendChild(radio);
        formEl.appendChild(label);
    })
}

function selectAnswer(event) {
    let selectedValue = ""
    const choices = document.getElementsByName("choice") 
    for (let index = 0; index < choices.length && !selectedValue; index++) {
        const element = choices[index]; 
        console.log(element.checked)
        console.log(element.value)
        if (element.checked === true) {
            selectedValue = element.value
        }

    }
    var currentQuestion = questions[questionsIndex];
    let correctValue = ""
    for (let index = 0; index < currentQuestion.choices.length && !correctValue; index++) {
        const element = currentQuestion.choices[index];
        if (element.correct === true) {
            correctValue = element.answer 
        }
    }
    if (selectedValue === correctValue) {
        console.log("yeah, you are smart")

    } else {
        console.log("Not so much.")
    }


}




// var nextQuestion = questions[questionsIndex++];
// Determine if User selection is right/wrong



// if wrong, deduct time from timer



// Show next question



// Show score 



//add initials Save score in localStorage 



// Switch to High Score page



function endQuiz() {
    if (counter === 0) {
        clearInterval;
    }
}


buttonEl.addEventListener("click", selectAnswer)
startEl.addEventListener("click", startQuiz)
//
// 

