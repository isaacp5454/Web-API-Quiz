var timerEl = document.querySelector("#timer");
var header = document.querySelector("#header");
var info = document.querySelector("#info");
var button1 = document.querySelector("#button1");
var button2, button3, button4;
var secondsLeft = 75;
var questions = ["Commonly used data types DO NOT include","The condition in an if/else statement is enclosed within","Arrays in Javascript can be used to store","Strings values must be enclosed within ____ when being assigned to variables"];
var potentialAnswers=["strings","booleans","alerts","numbers","quotes","curly brackets","parentheses","square brackets","numbers and strings","other arrays","booleans","all of the above","commas","curly brackets","quotes","parentheses"];
var correctAnswers=["alerts","parentheses","all of the above","quotes"];
var questionNumber = 0;
var userName,score ;

button1.addEventListener("click",start);
function start(){

    info.remove();
    button1.remove();
    button1 = document.createElement("button");
    button2 = document.createElement("button");
    button3 = document.createElement("button");
    button4 = document.createElement("button");
    document.body.appendChild(button1);
    document.body.appendChild(button2);
    document.body.appendChild(button3);
    document.body.appendChild(button4);
    displayQuestion()
    button4.addEventListener("click",function(){
        checkAnswer(button4.textContent);
    });
    button3.addEventListener("click",function(){
        checkAnswer(button3.textContent);
    });
    button2.addEventListener("click",function(){
        checkAnswer(button2.textContent);
    });
    button1.addEventListener("click",function(){
        checkAnswer(button1.textContent);
    });



  
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
        if(secondsLeft===0) {
            clearInterval(timeInterval);
            endQuiz();
        }
        if (questionNumber >= questions.length){
            clearInterval(timeInterval);
        }
    },1000);
}

function displayQuestion (){
    header.textContent = questions[questionNumber];
    button1.textContent = potentialAnswers[4*questionNumber];
    button2.textContent = potentialAnswers[(4*questionNumber) + 1];
    button3.textContent = potentialAnswers[(4*questionNumber) + 2];
    button4.textContent = potentialAnswers[(4*questionNumber) + 3];
}

function checkAnswer (answers){
    if (!(correctAnswers[questionNumber] == answers)){
        secondsLeft = secondsLeft-10;
    }
    questionNumber = questionNumber + 1;
    if (questionNumber < questions.length){
        displayQuestion();
    }
    else{
        viewScore();


    }
}

function endQuiz(){
    console.log("hih");
}

function viewScore (){
    header.textContent="SCOREBOARD"
    score = secondsLeft;
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    var nameBox = document.createElement("input");
    document.body.appendChild(nameBox);
    button1 = document.createElement("button");
    button1.textContent="submit initials";
    document.body.appendChild(button1);
    button1.addEventListener("click",function(){
        userName = nameBox.value;
        var displayBox = document.createElement("h2");
      displayBox.textContent= userName + ", your score is " + score;
      document.body.appendChild(displayBox);
    })

}


