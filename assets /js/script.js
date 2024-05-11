
const start = document.getElementById("start-btn");
const questionAreaDiv = document.getElementById("questn-container");
const currentQuestion = document.getElementsByClassName("current-question");
const currentQuestionCount = document.getElementsByClassName("current-qstn-count");
const questionDiv = document.getElementsByClassName("main-question-div");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const nextQuestion = document.getElementById("next-btn");
const resultDiv = document.getElementById("result-container")
const finalScore = document.getElementsByClassName("final-score-text")
const username = document.getElementById("username").value;



let firstPage = document.getElementById("landing-page");
firstPage.addEventListener ();

// 
function nameValidation(event) {
    event.preventDefault();
    firstPage.style.maxHeight = ("0");
    showQuizArea() 
}

licenceQuestions[0].question;
licenceQuestions[0].textA;
licenceQuestions[0].textB;
licenceQuestions[0].textC;

let lastQuestionIndex = licenceQuestions.length - 1;
let currentQuestionIndex = 0;


function showQuizArea() {
    let q = licenceQuestions[currentQuestionIndex];
    question.innerHTML = "<h2>" + q.question + "</h2>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC; 
}

showQuizArea()
currentQuestionIndex++

function resultArea() {

}


// 
function sayName(myUsername, myScore) {
    return myUsername + myScore
}
let nameAndScore = [
    {
        username:finalScore
    }
]
let result = [];

// a for loop and function call will take specific username argument
for (let name of nameAndScore) {
    let specificResult = sayName();
result.push(specificResult)
}
 console.log("result")



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
