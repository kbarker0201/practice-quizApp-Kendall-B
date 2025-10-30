// Test data
const quizData = [
    {
        question: "What tech are we not studying in Unit 1",
        options: ["React", "JavaScript", "Java", "CSS"],
        correctIndex: 2
    },
    {
        question: "What tech are we not studying in Unit 2?",
        options: ["Jest", "JUnit", "Java", "SQL"],
        correctIndex: 0
    },
]
// Objects represent elements on page
const question = document.getElementById("question");
const choiceButtons = document.querySelectorAll(".choice-buttons");
const result = document.getElementById("result");
const nextQuestionButton = document.getElementById("next-question");
// Logic to render content immediately

// Any other variables needed
let currentQuestionIndex = 0;

renderQuestion();

choiceButtons.forEach(button => 
    button.addEventListener("click", handleOptionClick));

nextQuestionButton.addEventListener('click', handleNextQuestionClick);
// Funtions

// Function to render question on page
function renderQuestion() {
    let currentQuestionData = quizData[currentQuestionIndex];
    question.innerText = currentQuestionData.question;
    choiceButtons.forEach((button, i) => {
        button.innerText = currentQuestionData.options[i];
        button.disabled = false;
    });
    result.innerText = "";
    nextQuestionButton.style.display = "none";
}
// Determine if continuing or ending

function handleNextQuestionClick(event) {
    event.preventDefault();
    currentQuestionIndex++;
    if (currentQuestionIndex == quizData.length) {
        question.innerHTML = '<h2>Quiz Completed!</h2>';
        result.innerText = 'Thank you for playing';
        choiceButtons.forEach(button => {
             button.style.display = 'none';
        });
        nextQuestionButton.style.display = 'none';
    } else {
        renderQuestion();
    }
}

// Click handler function

function handleOptionClick(event) {
    event.preventDefault();
    let selectedButton = event.target;
    // Array.from creates an array from the choiceButtons
    // then .indexOf gives us the indexes of the selected ones
    let selectedIndex = Array.from(choiceButtons).indexOf(selectedButton);
    let isCorrect = selectedIndex === quizData[currentQuestionIndex].correctIndex;

    result.innerText = isCorrect ? "Correct Answer! Great Job" : "Incorrect";
    
    choiceButtons.forEach(button => button.disabled = true);

    nextQuestionButton.style.display = "block";
}
