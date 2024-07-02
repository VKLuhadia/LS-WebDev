const questions = [
    {
        question: "Who won the 2011 ICC Cricket World Cup?",
        answer: "india"
    },
    {
        question: "Who is known as the 'Master Blaster'?",
        answer: "sachin tendulkar"
    },
    {
        question: "Which country has won the most ICC Cricket World Cups?",
        answer: "australia"
    },
    {
        question: "Who was the captain of the Indian team in the 1983 World Cup?",
        answer: "kapil dev"
    },
    {
        question: "Which tournament is considered the premier T20 league in the world?",
        answer: "ipl"
    }
];

let currentQuestionIndex = 0;

document.getElementById('quizBtn').addEventListener('click', function() {
    document.getElementById('quiz').classList.toggle('hidden');
    showQuestion();
});

document.getElementById('submitAnswer').addEventListener('click', function() {
    const userAnswer = document.getElementById('answer').value.toLowerCase().trim();
    const result = document.getElementById('result');

    if (userAnswer === questions[currentQuestionIndex].answer) {
        result.textContent = 'Correct!';
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(() => {
                showQuestion();
                result.textContent = '';
                document.getElementById('answer').value = '';
            }, 1000);
        } else {
            result.textContent = 'You have completed the quiz!';
        }
    } else {
        result.textContent = 'Incorrect. Try again!';
    }
});

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').textContent = questions[currentQuestionIndex].question;
    }
}
