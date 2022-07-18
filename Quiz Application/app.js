const QA = [
    {
        'Number': 1,
        'Q': 'What is an elephant?',
        'A': 'An animal',
        'PA': ['An animal', 'A zebra', 'A lion', 'A tigris']
    },
    {
        'Number': 2,
        'Q': 'What is Einstein IQ?',
        'A': '160',
        'PA': ['160', '80', '70', '180']
    },
    {
        'Number': 3,
        'Q': 'What language is spoke at Russia?',
        'A': 'Russian',
        'PA': ['Russian', 'Hebrew', 'English', 'French']
    },
    {
        'Number': 4,
        'Q': 'What language is spoke at Israel?',
        'A': 'Hebrew',
        'PA': ['Russian', 'Hebrew', 'English', 'French']
    },
]

// loading all variables and documents for later use 
var timer = 60;
var score = 0;
var AlreadyAnswered = 0;
var lost = 0;
var QuestionNumber = 0;
var RandomQuestion = 0;
var questionTitle = document.getElementById("Questiontitle");
var scorelabel = document.getElementById("score-value-id");
var Answers = document.querySelectorAll(".button-container");
let title = document.getElementById("quiz-box-title");
let desc = document.getElementById("quiz-box-desc");
let startBtn = document.getElementById("start-btn");
let questionTitleSection = document.getElementById("Questiontitle-section");
let quizButtonQuestion = document.getElementById("quiz-btn-question");
let quizButtonNext = document.getElementById("quiz-button-next");
let scoreValue = document.getElementById("score-value-id");
let gameover = document.getElementById("game-over");
let gamerestart = document.getElementById("game-restart");
// finish the loading of all variables.

// GetQuestion function return a randomly Question and order the PA (Possible Answers)
// to a random location on the 4 buttons so it won't have strict order in eye.
const GetQuestion = () => {
    quizButtonNext.style.display = "none";
resetStyle();
AlreadyAnswered = 0;
var randomQ = Math.floor(Math.random() * QA.length);
RandomQuestion = randomQ;
questionTitle.innerHTML = `Q${++QuestionNumber}: ${QA[randomQ].Q}`;
scorelabel.innerHTML = `Score: ${score} <i class="icon-hide fa-solid fa-check">`;

console.log("Question title is: " + questionTitle.innerHTML);
console.log("Random Q is: " + randomQ);
/* get question */
/* filling each button with answer, random position every time */
var array = [];
for (var i = 0; i < Answers.length; i++) {
    var RandomNum = Math.floor(Math.random() * 4);
    if (array.includes(RandomNum)) {
        var RandomNum = Math.floor(Math.random() * 4);
        i--;
    } else {
    array.push(RandomNum);
    Answers[RandomNum].innerHTML = QA[randomQ].PA[i];
 }
 timer = 60;
}
} 
// End of GetQuestion Function

// Getting the ID of the button and then cheking if the item with that id corresponding to the correct answer from innerHTML value.
let getAnswer = (i) => {
    if (AlreadyAnswered === 1) {
        return 1;
    }
    if (Answers[i].innerHTML === QA[RandomQuestion].A) {
        return true;
    };
}

// Checking if answer is correct
// if the answer is correct, then the backgroudn becomes green, the Next question 
// button appear and the score is being increase by 1.
// furthermore it is set the AlreadyAnswered to 1 from 0, then in the GetAnswer it
// is being check, if the answer was correct and the value was 1, the GetAnswer function
// return a int of 1, and then it being checked in the checkAnswer.
// if 1 being returned, then it won't let the user continue the game or pick another button.
let checkAnswer = (i) => {
    if (getAnswer(i) === true) {
        Answers[i].style.backgroundColor = "green";
        score++;
        scorelabel.innerHTML = `Score: ${score} <i class="icon-hide fa-solid fa-check">`;
        quizButtonNext.style.display = "flex";
        AlreadyAnswered = 1;
    } else if (getAnswer(i) === 1){
        alert("Move on.")
    } else {
        Answers[i].style.backgroundColor = "red";
        QuestionNumber = 0;
        score = 0;
        scorelabel.innerHTML = `Score: ${score} <i class="icon-hide fa-solid fa-check">`;
        endGame();
    }
}

// Reset the style of the buttons from green \ red to default for the next Question.
let resetStyle = () => {
    Answers.forEach((item) => {
        item.style.backgroundColor = "initial";
    });
}

// Countdown
const lbltime = document.getElementById("lbl-timer");

function updatePLEASE() {
  timer--;
}

function countDownTimer() {
  if (timer >= 0) {
    lbltime.innerHTML = `Time left: ${timer}`;
    updatePLEASE(timer);
    setTimeout(countDownTimer, 1000); /* replicate wait 1 second */
  } else {
    endGame();
  }
}
// End of countdown.

// Starting the quiz, calling the timer to start ticking and calling for a Question.
function StartQuiz() {
    countDownTimer()
    startBtn.style.display = "none";
    desc.style.display = "none";
    title.style.display = "none";
    gameover.style.display = "none";
    gamerestart.style.display = "none";
    quizButtonNext.style.display = "none";

    questionTitleSection.style.display = "block";
    quizButtonQuestion.style.display = "flex";
    scoreValue.style.display = "flex";

    GetQuestion();
};

// End the Game.
const endGame = () => {
    timer = 0;
    questionTitleSection.style.display = "none";
    quizButtonQuestion.style.display = "none";
    quizButtonNext.style.display = "none";
    scoreValue.style.display = "none";

    gameover.style.display = "flex";
    gamerestart.style.display = "flex";
}