var startbtn = document.getElementById("start")
var submit = document.querySelector("#submit")
var timer = document.querySelector("#timer")
var qnumber = document.querySelector("#Qnumber")
var question = document.querySelector("#question")
var qChoices = document.querySelector("#choices")


var secondsTick = 0;
var totalScore = 0;
var answerCheck = ""
var questionNumber =1;

if (startbtn != null) {
    startbtn.addEventListener('click', function (event){

        window.location = window.location.href.replace("index.html", "Quiz.html");    
        
    });    
} else {
    secondsTick = 60; 
    // testTimer ();
    questions ();
}

if (submit != null) {
    submit.addEventListener('click', function (event){

        questions ();

         // secondsTick = 60; 

        // testTimer ();

        // window.location = window.location.href.replace("index.html", "Quiz.html");    
    });    
} else {
    console.log("All Good")
}

function testTimer() {
   
    var timerSeconds = setInterval(function() {

        secondsTick--;
        timer.textContent = "Seconds Left: " + secondsTick;

        if(secondsTick === 0) {
            clearInterval(timerSeconds);
            
        }
    }, 1000);
 }

 function questions () {
   
   if (questionNumber === 1) {
    qnumber.textContent = "1"
    question.textContent = "Javascript is an ___________ language? "
    qChoices.options[1].textContent = "A. Oject-Oriented";
    qChoices.options[2].textContent = "B. Object-Based";
    qChoices.options[3].textContent = "C. Procedural";
    qChoices.options[4].textContent = "D. None of the above";

    answerCheck = qChoices.value;
   }
    // questionNumber = '1';
    if (questionNumber === 2) {
         qnumber.textContent = "2"
        question.textContent = "Which of the following keywords is used to define a variable in Javascript? "
        qChoices.options[1].textContent = "A. var";
        qChoices.options[2].textContent = "B. let";
        qChoices.options[3].textContent = "C. Both A and B";
        qChoices.options[4].textContent = "D. None of the above";
            // qChoices.addEventListener('change', function () {
        answerCheck = qChoices.value;
            // questionNumber = '2';
     }

    if (questionNumber === 3) {
    qnumber.textContent = "3"
    question.textContent = "Which of the following methods is used to access HTML elements using Javascript? "
    qChoices.options[1].textContent = "A. getElementbyId()";
    qChoices.options[2].textContent = "B. getElementsByClassName()";
    qChoices.options[3].textContent = "C. Both A and B";
    qChoices.options[4].textContent = "D. None of the above";

    // qChoices.addEventListener('change', function () {
    answerCheck = qChoices.value;
        // questionNumber = '3';
    } 
 }

submit.addEventListener('click', function () {
              
         
        if (questionNumber=== 1) {
            if (answerCheck === 'A') {
                totalScore = 25;
                console.log(answerCheck)
                questionNumber = 2;
                questions ();
    
            }else {
            secondsTick = secondsTick - 10;
            questionNumber = 2;
            questions ();
            }
        }
        
        if (questionNumber=== 2) {
            if (answerCheck === 'C') {
                totalScore = (totalScore + 25);
                console.log(answerCheck)
                console.log(totalScore)
                questionNumber = 3;
                questions ()
        
            }else {
            secondsTick = secondsTick - 10;
            questions ()
            }
        }

        if (questionNumber=== '3') {
            if (answerCheck === 'C') {
                totalScore = (totalScore + 25);
                console.log(answerCheck)
                console.log(totalScore)

                // questions4 ()
        
            }else {
            secondsTick = secondsTick - 10;
            console.log(answerCheck)
                console.log(totalScore)
            // questions4 ()
            }
        }

        if (questionNumber=== '4') {
            if (answerCheck === 'D') {
                totalScore = (totalScore + 25);
                console.log(answerCheck)
                console.log(totalScore)
        
            }else {
            secondsTick = secondsTick - 10;
            }
        }

        console.log(totalScore)

        return;

    });

   

