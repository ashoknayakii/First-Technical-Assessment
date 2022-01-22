// GIVEN I am taking a code quiz
var questionBoxEl = document.getElementById("question")
var button1El = document.getElementById("btn1")
var button2El = document.getElementById("btn2")
var button3El = document.getElementById("btn3")
var button4El = document.getElementById("btn4")
var startEl = document.getElementById("start-btn")

var counter = 75;
var isRunning = false;

var questionsIndex = 0

var questions = [{

    Question: "Commonly used data types do not include:",
    answer1: "strings",
    answer2: "booleans",
    answer3: "alerts",
    answer4: "numbers",
},
{
    Question: "The condition an if/else is enclosed with blank",
    answer1: "quotes",
    answer2: "curly brackets",
    answer3: "parentheses",
    answer4: "square brackets"
},
{
    Question: "Arrays in Javascript Can Be Used To Store",
    answer1: "numbers and strings",
    answer2: "booleans",
    answer3: "other arrays",
    answer4: "all of the above"
},
{
    Question: "String values must be enclosed within blank",
    answer1: "commas",
    answer2: "curly brackets",
    answer3: "quotes",
    answer4: "parentheses"
},
{
    Question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer1: "Javascript",
    answer2: "terminal/bash",
    answer3: "for loops",
    answer4: "console log"
}
]
// WHEN I click the Start button

function timer() {
    counter--
    if (counter <= 0) {
        alert("Your time is up!");
    }
    else if (currentQuestion < 1 ) {
        alert("Quiz Complete. See your score!")
    }
}




function startQuiz(event) {
    var startCountdown = setInterval(timer, 1000);



    viewQuestion();

}


// THEN a timer starts and I am presented with a question

function viewQuestion() {
    var currentQuestion = questions[questionsIndex];
    questionBoxEl.textContent = currentQuestion.Question;
    button1El.textContent = currentQuestion.answer1;
    button2El.textContent = currentQuestion.answer2;
    button3El.textContent = currentQuestion.answer3;
    button4El.textContent = currentQuestion.answer4;


    for (let i = 0; i < currentQuestion.answer; i++) {

    }



}

// WHEN I answer a question


function selectAnswer() { }

var nextQuestion = questions[questionsIndex++];


// THEN I am presented with another question



// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock



// WHEN all questions are answered or the timer reaches 0
function endQuiz() {
    if (counter === 0) {
        clearInterval;
    }
 }


// THEN the game is over



// WHEN the game is over

// THEN I can save my initials and score
startEl.addEventListener("click", startQuiz)
//
// 

