

var startbtn = document.getElementById("start")
var btnFinish = document.querySelector("#finish")
var timer = document.querySelector("#timer")
var qnumber = document.querySelector("#Qnumber")
var question = document.querySelector("#question")
var qChoices = document.querySelector("#choices")
var answ1Btn = document.querySelector("#answ1")
var answ2Btn = document.querySelector("#answ2")
var answ3Btn = document.querySelector("#answ3")
var answ4Btn = document.querySelector("#answ4")
var questionBox = document.querySelector("#Qbox")
var results = document.querySelector("#results")
var studentName = document.querySelector("#stdName")
var stdResults= document.querySelector("#stdScore")
var questionHeading = document.querySelector("#qHeading")


var secondsTick = 0;
var totalScore = 0;
var answerCheck = ""
var questionNumber =1;
var stdName = "";

if (startbtn != null) {
    startbtn.addEventListener('click', function (event){

        window.location = window.location.href.replace("index.html", "Quiz.html");    
        
    });    
} else {
    secondsTick = 60; 
    testTimer ();

    // questionBox.style.display = 'none';
    results.style.visibility= 'hidden';
     question1 ();
}

if (btnFinish != null) {
    btnFinish.addEventListener('click', function (event){
        question1 ();
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
            wrapper ();            
        }
    }, 1000);
 }

 function question1 () {
    
    qnumber.textContent = "1"
    questionNumber = 1;
    question.textContent = "Javascript is an ___________ language? "
    answ1Btn.textContent = "A. Object-Oriented";
    answ2Btn.textContent = "B. Object-Based";
    answ3Btn.textContent = "C. Procedural";
    answ4Btn.textContent = "D. None of the above";
   
  }
    
function question2 () {
  
    qnumber.textContent = "2"
    questionNumber = 2;
    question.textContent = "Which of the following keywords is used to define a variable in Javascript? "
    answ1Btn.textContent = "A. var";
    answ2Btn.textContent = "B. let";
    answ3Btn.textContent = "C. Both A and B";
    answ4Btn.textContent = "D. None of the above"

}

function question3 () {
     
    qnumber.textContent = "3"
    questionNumber = 3;
    question.textContent = "Which of the following methods is used to access HTML elements using Javascript? "
    answ1Btn.textContent = "A. getElementbyId()";
    answ2Btn.textContent = "B. getElementsByClassName()";
    answ3Btn.textContent = "C. Both A and B";
    answ4Btn.textContent = "D. None of the above"
   
} 

function question4 () {
   
    qnumber.textContent = "4"
    questionNumber = 4;
    question.textContent = "Which of the following methods can be used to display data in some form using Javascript?"
    answ1Btn.textContent = "A. document.write()";
    answ2Btn.textContent = "B. console.log()";
    answ3Btn.textContent = "C. window.alert()";
    answ4Btn.textContent = "D. All of the above"
        
} 

function wrapper () {

    secondsTick = 0;

    alert("End of the Quiz !");
    stdName = prompt("Please type your inital or your first name below")
    localStorage.setItem("Name", stdName);
    localStorage.setItem("Final Score", totalScore);
    results.style.visibility= 'visible';
    studentName.textContent = localStorage.getItem("Name");
    stdResults.textContent = localStorage.getItem("Final Score");
    myStopFunction();
}

function myStopFunction() {
    
    clearInterval(testTimer);
    console.log("timer stopper")
    timer.style.visibility = 'hidden'
    questionHeading.textContent = "Thank you for taking the quiz!"
    qnumber.textContent = ""
    question.style.visibility = 'hidden';
    answ1Btn.style.visibility = 'hidden';
    answ2Btn.style.visibility = 'hidden';
    answ3Btn.style.visibility = 'hidden';
    answ4Btn.style.visibility = 'hidden';
    btnFinish.style.visibility = 'hidden';
        
}

answ1Btn.addEventListener ('click', function () {

    if (questionNumber === 1)   {
        totalScore = totalScore + 25;
        question2 ();
    }
    
    else if (questionNumber === 2) {
        secondsTick = secondsTick - 10;
        question3 ();
    } 

    else if (questionNumber === 3) {
        secondsTick = secondsTick - 10;
        question4 ();
        
    } else if (questionNumber === 4) {
        secondsTick = secondsTick - 10;
        wrapper ();
    }
    
    return;

});


answ2Btn.addEventListener ('click', function () {

    secondsTick = secondsTick - 10;
        
    if (questionNumber === 1) {
        question2 ();
    }
        
    else if (questionNumber === 2) {
        question3 ();
    } 

    else if (questionNumber === 3) {
        question4 ();
            
    }else if (questionNumber === 4) {
        secondsTick = secondsTick - 10;
        wrapper ();
    }
    
});



answ3Btn.addEventListener ('click', function () {

        
    if (questionNumber === 2)   {
        totalScore = totalScore + 25;
        question3 ();
    }
        
    else if (questionNumber === 3) {
        totalScore = totalScore + 25;
        question4 ();
    } 

    else if (questionNumber === 1) {
        secondsTick = secondsTick - 10;
        question2 ();
            
    } else if (questionNumber === 4) {
        secondsTick = secondsTick - 10;
        wrapper ();
    }
    
});

answ4Btn.addEventListener ('click', function () {

        
    if (questionNumber === 4)   {
        totalScore = totalScore + 25;
        wrapper ();
        
    }
            
    else if (questionNumber === 1) {
        secondsTick = secondsTick - 10;
        question2 ();
    } 
    
    else if (questionNumber === 2) {
        secondsTick = secondsTick - 10;
        question3 ();
                
    }else if (questionNumber === 3) {
        secondsTick = secondsTick - 10;
        question4 ();
    }
        
});

btnFinish.addEventListener ('click', function() {

    wrapper ();
});

