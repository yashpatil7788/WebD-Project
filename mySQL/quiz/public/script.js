let currentQuestionIndex = 0;
let questions = [];

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const questionDiv = document.getElementById('question');
    const optionsDiv = document.getElementById('options');

    questionDiv.textContent = question.text;
    optionsDiv.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => submitAnswer(question.id, index + 1);
        optionsDiv.appendChild(button);
    });
}

function submitAnswer(questionId, selectedOption) {
    fetch('/api/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionId, selectedOption }),
    })
        .then(res => res.json())
        .then(data => {
            if (data.isCorrect) {
                alert('Correct!');
            } else {
                alert('Wrong!');
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                alert('Quiz completed!');
            }
        });
}

fetch('/api/quiz/questions')
    .then(res => res.json())
    .then(data => {
        questions = data;
        loadQuestion();
    });