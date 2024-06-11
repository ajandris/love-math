
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for(let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked submit");
            } else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    runGame('addition');
})

function runGame(gameType){
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

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){
    
}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(operand1, operand2){

}

function displayMultiplyQuestion(operand1, operand2){

}

function displayDivideQuestion(operand1, operand2){

}