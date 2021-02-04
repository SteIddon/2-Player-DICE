let diceRoll = document.getElementById("roll");
let rollImage = document.getElementById("result");
let oneCurrent = document.getElementById("onecurrent");
let twoCurrent = document.getElementById("twocurrent");
let oneTotal = document.getElementById("onetotal");
let twoTotal = document.getElementById("twototal");
let holdScore = document.getElementById("hold");
let newGame = document.getElementById("newgame");
let diceArr1 = [];
let diceArr2 = [];

function rollDice() {
    let rollResult = Math.floor(Math.random() * 6) + 1;
    if (rollResult == 1) {
        oneCurrent.textContent = "You lose! Try Again"
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
    rollDice();
})
newGame.addEventListener("click", () => {
    diceArr1 = [];
    oneTotal.textContent = ""
    oneCurrent.textContent = ""
    twoTotal.textContent = ""
    twoCurrent.textContent = ""
})