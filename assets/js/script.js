
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for(let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                checkAnswer();
            } else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    document.getElementById('answer-box').addEventListener('keydown', function(event){
        if (event.key === 'Enter'){
            checkAnswer();
        }
    })

    runGame('addition');
})

function runGame(gameType){

    document.getElementById('answer-box').value = '';
    document.getElementById('answer-box').focus();

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    switch(gameType){
        case 'addition':
            displayAdditionQuestion(num1, num2);
            break;
        case 'subtract':
            displaySubtractQuestion(num1, num2);
            break;
        case 'multiply':
            displayMultiplyQuestion(num1, num2);
            break;
        case 'division':
            displayDivideQuestion(num1, num2);
            break;
        default:
            alert(`Something went wrong. Unknown game type ${gameType}`);
            throw `Unknown game type ${gameType}. Aborting!`;
    }
}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array.
 */
function checkAnswer(){

    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect){
        alert("Hey! You got it right! :D");
        incrementScore();
    } else{
        alert(`Awwww ..... you answered ${userAnswer}! The correct answer is ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus, e.t.c)
 * directly from the DOM, and returns the correct answer.
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').textContent);
    let operand2 = parseInt(document.getElementById('operand2').textContent);
    let operator = document.getElementById('operator').textContent;


    switch(operator){
        case "+":
            return [operand1 + operand2, "addition"];
        case "x":
            return [operand1 * operand2, "multiply"];
        case "-":
            return [operand1 - operand2, "subtract"];
        case "/":
            return [operand1 / operand2, "division"];
        default:
            alert(`Unknown operator ${operator}`);
            throw `Unknown operator ${operator}. Aborting!`;
    }
}

/**
 * Takes the score from DOM and increments by 1
 */
function incrementScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = oldScore + 1;
}

/**
 * Takes the incorrect score from DOM and increments by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = oldScore + 1;
}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = Math.max(operand1, operand2);
    document.getElementById('operand2').textContent = Math.min(operand1, operand2);
    document.getElementById('operator').textContent = '-';
}

function displayMultiplyQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}

function displayDivideQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = (Math.floor(Math.random() * 25) + 1) * operand2;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '/';
}