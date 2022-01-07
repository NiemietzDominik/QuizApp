let questions = [
    {
        "question": "Wie viele Weihnachtsbäume werden in Deutschland pro Jahr verkauft?",
        "answer_1": "etwa 12 Millionen",
        "answer_2": "etwa 40 Millionen",
        "answer_3": "etwa 65 Millionen",
        "answer_4": "etwa 30 Millionen",
        "right_answer": 4
    },
    {
        "question": "Wie viele Liter Bier werden in Deutschland pro Kopf jährlich getrunken?",
        "answer_1": "300 Liter Bier",
        "answer_2": "50 Liter Bier",
        "answer_3": "120 Liter Bier",
        "answer_4": "100 Liter Bier",
        "right_answer": 4
    },
    {
        "question": "Wie lang ist der Begattungsapparat der 15 cm langen Bananenschnecke?",
        "answer_1": "Circa 80cm",
        "answer_2": "Circa 20cm",
        "answer_3": "Circa 100cm",
        "answer_4": "Circa 10cm",
        "right_answer": 1
    },
    {
        "question": "Wie viele Buchstaben hat das hawaiianische Alphabet?",
        "answer_1": "24",
        "answer_2": "30",
        "answer_3": "12",
        "answer_4": "25",
        "right_answer": 3
    },
    {
        "question": "Wie viele Einkerbungen hat ein Golfball?",
        "answer_1": "255",
        "answer_2": "336",
        "answer_3": "102",
        "answer_4": "332",
        "right_answer": 2
    },
    {
        "question": "Im Laufe eines 60 Jährigen Lebens hat ein Mann durchschnittliche wie lange eine Erektion während er schläft?",
        "answer_1": "5 Jahre",
        "answer_2": "2 Jahre",
        "answer_3": "32 Wochen",
        "answer_4": "12 Wochen",
        "right_answer": 1
    }
];
let rightQuestions = 0;
let currentQuestion = 0;
let audioSuccess = new Audio('sounds/success.mp3');
let audioFail = new Audio('sounds/wrong.mp3')

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = ``;
        document.getElementById('questionBody').style = "display: none";

        document.getElementById('amountOfQuestions').innerHTML = questions.length;
        document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;

        document.getElementById('header-image').src = 'img/trophy.png';
        document.getElementById('header-image').style = 'height: 300px; object-fit: contain; margin-top: 20px;'
    } else {

        let percent = (currentQuestion +1) / questions.length ;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML =`${percent}%`;
        document.getElementById('progress-bar').style =`width: ${percent}%`;

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
        audioSuccess.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        audioFail.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButton();
    showQuestion();


}

function resetAnswerButton() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame(){
    document.getElementById('header-image').src = "img/pencil.jpg";
    document.getElementById('questionBody').style = ``;
    document.getElementById('endScreen').style = `display: none`;

    rightQuestions=0;
    currentQuestion=0;
    init();
}