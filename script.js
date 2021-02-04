let diceRoll = document.getElementById("roll");
let rollImage = document.getElementById("result");
let oneCurrent = document.getElementById("onecurrent");
let twoCurrent = document.getElementById("twocurrent");
let oneTotal = document.getElementById("onetotal");
let twoTotal = document.getElementById("twototal");
let holdScore = document.getElementById("hold");
let newGame = document.getElementById("newgame");
let divOne = document.getElementById("playerone");
let divTwo = document.getElementById("playertwo");
let turnCount = 0;
let diceArr1 = [];
let diceArr2 = [];

function rollDice() {
    let rollResult = Math.floor(Math.random() * 6) + 1;
    if (rollResult == 1) {
        oneCurrent.textContent = "You lose!"
        oneTotal.textContent = "0"
        diceArr1 = [];      
        rollImage.innerHTML = '<img src="dice' + rollResult + '.png">';  
    } else {
        oneCurrent.textContent = "Current Roll:   " + rollResult
        diceArr1.push(rollResult);
    let sum1 = diceArr1.reduce((a, b) => {
            return a + b;
    });
    oneTotal.textContent = "Total:   " + sum1
    console.log(sum1)
    if (sum1 >= 20) {
        oneTotal.textContent = "Total:    " + sum1 + "     You win!"
        diceArr1 = [];    
    }
    rollImage.innerHTML = '<img src="dice' + rollResult + '.png">';    
}
}
diceRoll.addEventListener("click", () => {
    if (turnCount === 0) {
        rollDice();
    } else {
        rollDiceTwo();
    }
})
newGame.addEventListener("click", () => {
    if (turnCount === 1) {
        turnCount = 0
        divOne.style.backgroundColor = "gold"
        divTwo.style.backgroundColor = "white"
    }
    diceArr1 = [];
    oneTotal.textContent = ""
    oneCurrent.textContent = ""
    twoTotal.textContent = ""
    twoCurrent.textContent = ""
})

function rollDiceTwo() {
    let rollResult = Math.floor(Math.random() * 6) + 1;
    if (rollResult == 1) {
        twoCurrent.textContent = "You lose!"
        twoTotal.textContent = "0"
        diceArr2 = [];      
        rollImage.innerHTML = '<img src="dice' + rollResult + '.png">';  
    } else {
        twoCurrent.textContent = "Current Roll:   " + rollResult
        diceArr2.push(rollResult);
    let sum2 = diceArr2.reduce((a, b) => {
            return a + b;
    });
    twoTotal.textContent = "Total:   " + sum2
    console.log(sum2)
    if (sum2 >= 20) {
        twoTotal.textContent = "Total:    " + sum2 + "     You win!"
        diceArr2 = [];    
    }
    rollImage.innerHTML = '<img src="dice' + rollResult + '.png">';    
}
}
holdScore.addEventListener("click", () => {
    if (turnCount === 0) {
        divOne.style.backgroundColor = "white"
        divTwo.style.backgroundColor = "gold"
        turnCount = 1
    } else {
        divOne.style.backgroundColor = "gold"
        divTwo.style.backgroundColor = "white"
        turnCount = 0
    }
});