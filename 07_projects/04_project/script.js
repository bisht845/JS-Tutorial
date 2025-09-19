let randomNumber = parseInt((Math.random() * 100 + 1)) // parseint for we don't need decimal value and Math.random(generate random number) * 100 (because random no comes from 0.4656 like this so we 100 then the 2 digit will shift in the left side) + 1 (+1 for random no can come 0 so we don't need 0 value)
console.log(randomNumber);

const submit = document.querySelector('.btn')
const userInput = document.querySelector('#guess')
const guessSlot = document.querySelector('.guess-list')
const remaining = document.querySelector('.tries-left')
const lowOrHi = document.querySelector('.feedback')
const startOver = document.querySelector('.history')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    //  check the value is between 1 to 100  and value is availabe or not 
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a number more than 1')
    } else if (guess > 100) {
        alert('Please enter a number less then 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMsg(`<h3 style = "color: red;">Game Over. </h3>Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    // if the value is not qual to random number if qual then display the msg YOU WIN
    if (guess === randomNumber) {
        displayMsg(`<h3 style="color: red;">You WIN!!</h3> You guessed it right`);
         endGame(); 
    } else if (guess < randomNumber) {
        displayMsg(`Number is Tooo Low`)
    } else if (guess > randomNumber) {
        displayMsg(`Number is Tooo High`)
    } 
  
}

function displayGuess(guess) {
    // reset the value and get the next value not same 
    userInput.value = ''
    guessSlot.innerHTML += `${guess},   `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`

}

function displayMsg(msg) {
    lowOrHi.innerHTML = `${msg}`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id="newGame" class="btn danger" style = "margin-top: 15px" type="button">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();

}

function newGame() {
    const newGamebtn = document.querySelector('#newGame')
    newGamebtn.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHi.innerHTML = '';
        playGame = true;
    })

}

