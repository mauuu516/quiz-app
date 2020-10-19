const quizData  =   [
    {
        question: 'How old is Mau?',
        a: '10',
        b: '17',
        c: '26',
        correct: 'c'
    },{
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'JavaScript',
        correct: 'c'
    } ,{
        question: 'What is my favorite food?',
        a: 'bibingka',
        b: 'pizza',
        c: 'Mike',
        correct: 'c'
    } 
];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll (".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function getSelected () {
    let answer = undefined;

    answersEls.forEach((answersEl) => {
        if(answersEl.checked) {
            answer = answersEl.id;
        }
    });

    return answer;

}

function deselectAnswers () {
         answersEls.forEach((answersEl) => {
            answersEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} correctly</h2> 

            <button onClick="location.reload()">Reload</button>`;
        }
    } 
});