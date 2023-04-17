var startBtn = document.querySelector("#start-button");
var secondsEl = document.querySelector("#seconds");
var startBlockEl = document.querySelector("#start-block");
var answers = document.querySelector(".answer");
var correct = document.querySelector("#correct");
var scoreBlock = document.querySelector("#score-block");
var sec = document.querySelector("#sec");
var scoreLog = document.querySelector("#scoreLog");
var logBtnEl = document.querySelector("#logBtn");
var inputEl = document.querySelector("#inputArea");
var higscore = document.querySelector("#highscore");

var timer;
var timerCount = 30;
var questionIndex;
var winPoints = 0;



// question array here
var quiz = [
    {
        question: "What is the name of my dog?", 
        answers: [
            "Bobby",   
            "Fatty",
            "Uju",
            "Slinky",
        ],
        correctAnswer: "Uju",
      },
      {
        question: "Which cat is a manx?", 
        answers: [
            "Bobby",   
            "Fatty",
            "Winky",
            "Slinky",
        ],
        correctAnswer: "Bobby",
      },
      {
        question: "test3?", 
        answers: [
            "answer1",   
            "answer3",
            "answer2",
            "answer4",
        ],
        correctAnswer: 1,
      },
      {
        question: "test4?", 
        answers: [
            "answer1",   
            "answer2",
            "answer3",
            "answer4",
        ],
        correctAnswer: 4,
      },
    ];

//Create function to start the quiz once start button has been clicked. 
function startQuestions() {
    var question = quiz[questionIndex];
    $("#quiz-block").children("h1").text(question.question);
 //   $("#quiz-block").children(".answers").children().eq(0).text(question.answers[0]);
 //   $("#quiz-block").children(".answers").children().eq(1).text(question.answers[1]);
 //   $("#quiz-block").children(".answers").children().eq(2).text(question.answers[2]);
 //   $("#quiz-block").children(".answers").children().eq(3).text(question.answers[3]);
    for (var i = 0; i < question.answers.length; i++) {
        $("#quiz-block").children(".answers").children().eq(i).text(question.answers[i]);
    } 
}   
//creat next question funciton here:
function nextQuestion() {
    quiz.children[1].text(question.question);
    for (var i = 0; i < question.answers.length; i++) {
        $("#quiz-block").children(".answers").children().eq(i).text(question.answers[i]);
    }
}

//create function for selecting the answers, if it's right it displays correct, else it will display Incorrect. 
function showCorrect() {
    correct.textContent = "Correct!";
    correct.setAttribute("class", "");
    winPoints+=5;
}

function showWrong() {
    correct.textContent = "WRONG!";
    correct.setAttribute("class", "");
    timerCount-=5;
}

//Create function for completion of quiz with score tally shown
function showScore() {
    var storedWins = localStorage.getItem("wins")
    scoreBlock.setAttribute("class", "");
    scoreBlock.textContent = "Your score is: " + storedWins + " points!!";
    scoreLog.setAttribute("class", "");

}


//Event Listener added for start quiz button.  it should trigger the startQuestions and hide the instruction section.
startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    startBlockEl.setAttribute("class", "hide");
    document.querySelector("#start-button").setAttribute("class", "hide");
    document.querySelector("#quiz-block").setAttribute("class", "");
    //TODO start timer with seconds counting down.
    timer = setInterval(function() {
        timerCount--;
        secondsEl.textContent = timerCount;
        if (timerCount == 1) {
            sec.textContent = "second left";
        } else if (timerCount === 0) {
            secondsEl.setAttribute("class", "hide");
            sec.textContent = "GAME OVER LOSER!!";
            sec.setAttribute("style", "font-size: 50px");
            showScore();
        }; return
    }, 1000);
    questionIndex = 0; 
    startQuestions();
}); 



$(".answers").on("click", function(event) {
    event.preventDefault();
    if (quiz[0].correctAnswer === event.target.innerHTML) {
        showCorrect();
        localStorage.setItem("wins", winPoints)
        nextQuestion();
    } else {
        showWrong();
    }

});

logBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var initials = inputEl.value.trim();

    if (initials === "") {
      localStorage.setItem("name", initials);
      renderLastRegistered();
    }
  });
//create a function for the log button, so it logs the initials and high score to the local storage.
/*logBtnEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (input = "") {
        localStorage.setItem("name", input);
    };
}); */


    //show next question function execute

    //create a function for the log button, so it logs the initials and high score to the local storage. 

    //set href for view highscore to display the highest score logged in local storage.
