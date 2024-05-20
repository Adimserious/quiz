

let licenceQuestions = [
    {
        question: 'Your passenger wants to discuss something with you during the journey. what should you do?',
        answers: [
            { textA: "Concentrate on the discussion", correct: false },
            { textB: "Concentrate on the driving", correct: true },
            { textC: "Concentrate on both", correct: false },
        ]
    },
    {
        question: 'What could cause the vehicle to leave the road?',
        answers: [
            { text: "Tiredness", correct: false },
            { text: "Distraction", correct: false },
            { text: "Inattention", correct: true },
        ]
    },
    {
        question: 'What can inpair fitness to drive?',
        answers: [
            { text: "Fatigue", correct: false },
            { text: "Certain medicines", correct: true },
            { text: "Alcohol and other intoxicants", correct: false },
        ]
    },
    {
        question: 'What should you do if you start feeling tired while driving?',
        answers: [
            { text: "Take a break straightaway", correct: true },
            { text: "Get out of the car", correct: false },
            { text: "Listen to stimulating music", correct: false },
        ]
    },
    {
        question: 'What emotions can influence driving behaviour?',
        answers: [
            { text: "Sorrow and worry", correct: false },
            { text: "Happiness and exuberance", correct: false },
            { text: "Anger and rage", correct: true },
        ]
    },
    {
        question: 'What can be the effect of even small quantities of alcohol?',
        answers: [
            { text: "Reckless driving", correct: true },
            { text: "Delayed reactions", correct: false },
            { text: "Impairment of hearing and vision", correct: false },
        ]
    },
    {
        question: 'Are drivers during their probation period allowed to be under the influence of alcohol when driving?',
        answers: [
            { text: "yes, up to 30 miligrams", correct: false },
            { text: "No, definitely not", correct: true },
            { text: "yes, upto 50 miligram", correct: false },
        ]
    },
    {
        question: 'When will offences carrying two points be deleted from the Central Register of Road Traffic Offenders?',
        answers: [
            { text: "-5 years", correct: true },
            { text: "-2 years", correct: false },
            { text: "-3 years", correct: false },
        ]
    },
    {
        question: 'You want to carry a child in your car, when must you use a child seat for this purpose?',
        answers: [
            { text: "If the child is older than 12", correct: false },
            { text: "If the child is taller than 150 cm", correct: false },
            { text: "If the child is younger than 12", correct: true },
        ]
    },
    {
        question: 'What is the maximum length of time you are allowed to stop at a bus stop provided you do not present an obstruction to buses?',
        answers: [
            { text: "3 minutes", correct: true },
            { text: "8 minutes", correct: false },
            { text: "5 minutes", correct: false },
        ]
    },
    {
        question: 'Is it irresponsible to overtake a truck and trailer a short distance before crossroads?',
        answers: [
            { text: "No, they drive at low speed", correct: false },
            { text: "No, they understands", correct: false },
            { text: "Yes, they can obscure traffic signs", correct: true },
        ]
    }
];

let form = document.getElementById("form");
let usernameInput = document.getElementById("username-input").value.length;
let errorMessage = document.getElementById("error-msg");
let startBtn = document.getElementById("start-btn");
let landingPage = document.getElementById("landing-page");

// Function to validate username input and....
// Add a click event listener to start button object so that it calls the showQuizArea function once clicked

function handleClick(event) {
     form.addEventListener("submit", (e)=>{
        if (usernameInput.value === "" || usernameInput.value === null) {
            console.log("Username must not be empty");
            errorMessage.innerHTML = "Username must not be empty"
        } else {
            errorMessage = "";
            e.preventDefault()
            startBtn.addEventListener("click", e => showQuizArea());
            console.log("connected")
        }
     })

}

handleClick()

const currentQuestion = document.getElementsByClassName("current-question");
const currentQuestionCount = document.getElementsByClassName("current-qstn-count");
let questions = document.getElementById("question");
let answerDiv = document.getElementById("answer-div")
let nextButton = document.getElementById("next-btn");
let currentQuestionIndex;
let shuffledQuestions = 0
let score = 0;

// This function will show the quiz area and render questions
function showQuizArea() {
    landingPage.style.display = "none"
    let questionDiv = document.getElementById("questn-container");
    questionDiv.style.display = "block";
    questionDiv.style.maxHeight = "1000px";
    questionDiv.style.transitionDelay = "3s";
    runQuiz();

}    
function runQuiz() {
    shuffledQuestions = licenceQuestions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    renderQuiz();
    console.log("quizarea");
}   




function renderQuiz() {
    resetQuiz()
    let currentQuestion = licenceQuestions[currentQuestionIndex];
    let qstnNo = currentQuestionIndex + 1;
    questions.innerHTML = qstnNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("ans-btn");
        answerDiv.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", chooseAnswer())
    })
}

function resetQuiz() {
    nextButton.style.display = "none";
    while(answerDiv.firstChild){
        answerDiv.removeChild(answerDiv.firstChild);
    }

}

//choose answer function
function chooseAnswer(element) {
    let choice;
    let rightChoice;
    
}
    





function resetQuiz() {
    nextButton.style.display = "none"
}

const resultDiv = document.getElementById("result-container")
const finalScore = document.getElementsByClassName("final-score-text");

function resultArea() {

}


// 
function sayName(myUsername, myScore) {
    return myUsername + myScore
}
let nameAndScore = [
    {
        username: finalScore
    }
]
let result = [];

// a for loop and function call will take specific username argument
for (let name of nameAndScore) {
    let specificResult = sayName();
    result.push(specificResult)
}
