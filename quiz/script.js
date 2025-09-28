const quizData = [
    {
        question: "What is the capital of Nepal?",
        a: "Berlin",
        b: "Madrid",
        c: "Kathmandu",
        d: "Rome",
        correct: "c"
    },
    {
        question: "Who wrote National Anthem?",
        a: "Rabindranath Tagore",
        b: "Mark Twain",
        c: "F. Scott Fitzgerald",
        d: "Ernest Hemingway",
        correct: "a"
    },
    {
        question: "What is the smallest planet in our solar system?",
        a: "Earth",
        b: "Mars",
        c: "Venus",
        d: "Mercury",
        correct: "d"
    }
];

const quiz = document.getElementById('quiz');
const nextBtn = document.getElementById('nextBtn');
const result = document.getElementById('result');
let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    if (currentQuestion >= quizData.length) {
        showResult();
        return;
    }
    const currentQuizData = quizData[currentQuestion];
    quiz.innerHTML = `
        <h2>${currentQuizData.question}</h2>
        <label><input type="radio" name="answer" value="a"> ${currentQuizData.a}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuizData.b}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuizData.c}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuizData.d}</label><br>
    `;
}

nextBtn.addEventListener('click', () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        loadQuiz();
    } else {
        alert('Please select an answer!');
    }
});

function showResult() {
    quiz.innerHTML = '';
    result.innerHTML = `<h2>Your score: ${score}/${quizData.length}</h2>`;
    nextBtn.style.display = 'none';
}
