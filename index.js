//Variables
let heading = document.querySelector("h1");
let randomNumber = Math.floor(Math.random()*100) + 1;
let input = document.querySelector(".input-guess");
let buttonSubmit = document.querySelector(".btn-submit");
let buttonRestart = document.querySelector(".btn-restart");
let alertPara = document.querySelector(".alert");
let guessPara = document.querySelector(".guess");
let successPara = document.querySelector(".success");

// Initial Values
let guess = 0;
let gameCount = 1
let hasGameEnded = false;
heading.innerText = `Guess the number : Attempt ${gameCount}`;
buttonRestart.style.visibility = "hidden";
    
// Events
buttonSubmit.addEventListener("click", checkGuess);
buttonRestart.addEventListener("click", ()=>{
    hasGameEnded = false;
    guess = 0;
    gameCount ++;
    randomNumber = Math.floor(Math.random()*100) + 1;
    alertPara.innerText = ``;
    successPara.innerText = ``;
    guessPara.innerText = `Guesses: `;
    buttonRestart.style.visibility = "hidden";
    input.disabled = false;
    buttonSubmit.disabled = false;
    heading.innerText = `Guess the number : Attempt ${gameCount}`;
    input.value = "";
})

//Functions
function checkGuess() {
    let userGuess = parseInt(input.value);
    if(userGuess != NaN && userGuess < 101 && userGuess > 0) {
        if(guess<10) {
        
            if(userGuess === randomNumber) {
                guess++;
                alertPara.innerText = ``;
                hasGameEnded = true;
                buttonRestart.style.visibility = "visible";
                input.disabled = true;
                buttonSubmit.disabled = true;
                successPara.innerText = `Your guess was correct. It took you ${guess} ${guess > 1 ? "guesses" : "guess"} to guess the correct number.`;
                guessPara.innerHTML+= ("<span class='correct'>[" + userGuess + "]</span>");
            } else {
                guess++;
                successPara.innerText = ``;
                alertPara.innerText = `Your guess was ${userGuess >  randomNumber ? "too high" : "too low"}. ${10 - guess} more ${guess < 9 ? "guesses" : "guess"} left.`;
                guessPara.innerHTML += (userGuess + "&nbsp;"); 
            }
        } else {
            alertPara.innerText = `You ran out of guess :(. Restart the game to try again`;
            buttonRestart.style.visibility = "visible";
        }
    } else {
        alertPara.innerText = `Enter a valid number between 1 - 100`;
    }
}