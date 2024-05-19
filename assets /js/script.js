
const currentQuestion = document.getElementsByClassName("current-question");
const currentQuestionCount = document.getElementsByClassName("current-qstn-count");


const resultDiv = document.getElementById("result-container")
const finalScore = document.getElementsByClassName("final-score-text")


let question = document.getElementById("question");
let answerDiv = document.getElementById("answer-div")
let nextQuestion = document.getElementById("next-btn");








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




let licenceQuestions = [
    {
        question: 'Your passenger wants to discuss something with you during the journey. what should you do?',
        answer: [
            { textA: "Concentrate on the discussion", correct: false },
            { textB: "Concentrate on the driving", correct: true },
            { textC: "Concentrate on both", correct: false },
        ]
    },
    {
        question: 'What could cause the vehicle to leave the road?',
        answer: [
            { text: "Tiredness", correct: false },
            { text: "Distraction", correct: false },
            { text: "Inattention", correct: true },
        ]
    },
    {
        question: 'What can inpair fitness to drive?',
        answer: [
            { text: "Fatigue", correct: false },
            { text: "Certain medicines", correct: true },
            { text: "Alcohol and other intoxicants", correct: false },
        ]
    },
    {
        question: 'What should you do if you start feeling tired while driving?',
        answer: [
            { text: "Take a break straightaway", correct: true },
            { text: "Get out of the car", correct: false },
            { text: "Listen to stimulating music", correct: false },
        ]
    },
    {
        question: 'What emotions can influence driving behaviour?',
        answer: [
            { text: "Sorrow and worry", correct: false },
            { text: "Happiness and exuberance", correct: false },
            { text: "Anger and rage", correct: true },
        ]
    },
    {
        question: 'What can be the effect of even small quantities of alcohol?',
        answer: [
            { text: "Reckless driving", correct: true },
            { text: "Delayed reactions", correct: false },
            { text: "Impairment of hearing and vision", correct: false },
        ]
    },
    {
        question: 'Are drivers during their probation period allowed to be under the influence of alcohol when driving?',
        answer: [
            { text: "yes, up to 30 miligrams", correct: false },
            { text: "No, definitely not", correct: true },
            { text: "yes, upto 50 miligram", correct: false },
        ]
    },
    {
        question: 'When will offences carrying two points be deleted from the Central Register of Road Traffic Offenders?',
        answer: [
            { text: "-5 years", correct: true },
            { text: "-2 years", correct: false },
            { text: "-3 years", correct: false },
        ]
    },
    {
        question: 'You want to carry a child in your car, when must you use a child seat for this purpose?',
        answer: [
            { text: "If the child is older than 12", correct: false },
            { text: "If the child is taller than 150 cm", correct: false },
            { text: "If the child is younger than 12", correct: true },
        ]
    },
    {
        question: 'What is the maximum length of time you are allowed to stop at a bus stop provided you do not present an obstruction to buses?',
        answer: [
            { text: "3 minutes", correct: true },
            { text: "8 minutes", correct: false },
            { text: "5 minutes", correct: false },
        ]
    },
    {
        question: 'Is it irresponsible to overtake a truck and trailer a short distance before crossroads?',
        answer: [
            { text: "No, they drive at low speed", correct: false },
            { text: "No, they understands", correct: false },
            { text: "Yes, they can obscure traffic signs", correct: true },
        ]
    }
];


// Function to validate username input and....
// Add a click event listener to start button object so that it calls the showQuizArea function once clicked
let landingPage = document.getElementById("landing-page");
function handleClick(event) {
    
    let form = document.getElementById("form");
    let usernameInput = document.getElementById("username-input").value.length

    if (usernameInput < 12) {
        let errorMessage = document.getElementById("error-msg");
        console.log(">Username must not be greater than 12")
        errorMessage.innerHTML = "Username must not be greater than 12"
    } else if (usernameInput === null) {
        let errorMessageTwo = document.getElementById("error-msg2")
            errorMessageTwo.innerHTML
    } else {
        errorMessage = "";
        let startBtn = document.getElementById("start-btn");
        startBtn.addEventListener("click", showQuizArea());
        console.log("handleclick")
    }

}

handleClick()


// This function will show the quiz area and render questions
function showQuizArea() {
    let questionDiv = document.getElementById("questn-container");
    questionDiv.style.display = "block";
    questionDiv.style.maxHeight = "1000px";
    questionDiv.style.transitionDelay = "3s";
    //runQuiz();
    console.log("quizarea");
}




function runQuiz() {
    let currentQuestionIndex;
    let shuffledQuestions;
    let score = 0;
    shuffledQuestions = licenceQuestions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;

    for (let i = 0; i < licenceQuestions.length; i++) {
        let q = licenceQuestions[i].question;
        document.write(q);
        let options = licenceQuestions[i].answer;
        document.write(options);
        document.body.appendChild(document.createElement("div"));

        currentQuestionIndex++

        console.log("runquiz")
    }
}