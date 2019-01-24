let num = 97.5783;

num = Number(num.toFixed(2));

// Generate a random number between 5 and 20

let min = 5;
let max = 20;

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

for (let i = 0; i <= 10; i++) {
    let randomNumInLoop = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumInLoop);
}

function makeGuess(guess) {
    // generate random number between 1 - 5
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    // Check guess against randomly generated number. Return true if correct, false if incorrect
    console.log(`Random number: ${randomNum}    Guess: ${guess}`); // logging randomNum and guess variables to the console for testing purposes
    return guess === randomNum;
}

console.log(makeGuess(3));
console.log(makeGuess(3));
console.log(makeGuess(3));
console.log(makeGuess(3));
console.log(makeGuess(3));
console.log(makeGuess(3));