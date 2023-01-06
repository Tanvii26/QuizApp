const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questCont = document.getElementById("ques-cont");
const questionElement = document.getElementById("ques");
const answerButtonsElement = document.getElementById("ans-btns");
let shuffledQuestions, currentQuesIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', ()=>{
    currentQuesIndex++;
    setNextQustion()
});



function startGame() {
    console.log('Clicked')
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuesIndex = 0;
    questCont.classList.remove("hide")
    setNextQustion()
}

function setNextQustion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuesIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer(e) {
    const selected = e.target
    const correct = selected.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if(shuffledQuestions.length > currentQuesIndex+1){

        nextButton.classList.remove('hide')
    }
    else{
        startButton.innerText="Restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatus(element)
    if (correct) {
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
        
    }
}

function clearStatus(element) {
    element.classList.remove('wrong')
    element.classList.remove('correct')

}

function resetState() {
    clearStatus(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


const questions = [
    {
        // question 1
        question: "What does HTML stand for?",
        answers: [
            //array of answers which contains 4 objects with answer and its correctness
            { text: "Hyper Tag Markup Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyperlinks Text Mark Language", correct: false },
            { text: "Hyperlinking Text Marking Language", correct: false }
        ]
    },
    {
        // question 2
        question: "What is the correct tag for a line break?",
        answers: [
            //array of answers which contains 4 objects with answer and its correctness
            { text: "br", correct: true },
            { text: "brk", correct: false },
            { text: "bk", correct: false },
            { text: "line", correct: false }
        ]
    },
    {
        // question 3
        question: "What does CSS stand for?",
        answers: [
            //array of answers which contains 4 objects with answer and its correctness
            { text: "Computing Style Sheet", correct: false },
            { text: "Creative Styling Sheet", correct: false },
            { text: "Cascading Style Sheet", correct: true },
            { text: "Creative Style System", correct: false }
        ]
    },
    {
        // question 4
        question: "What is the correct format for a div?",
        answers: [
            //array of answers which contains 4 objects with answer and its correctness
            { text: "Div-id=example", correct: false },
            { text: "Div id=example", correct: true },
            { text: "Div.example", correct: false },
            { text: "Div id=example", correct: false }
        ]
    },
    {
        // question 5
        question: "Which of these is a genuine tag keyword?",
        answers: [
            //array of answers which contains 4 objects with answer and its correctness
            { text: "Header", correct: false },
            { text: "Body", correct: true },
            { text: "Bold", correct: false },
            { text: "Image", correct: false }
        ]
    }
]
