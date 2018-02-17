const fs = require("fs");
const inquirer = require("inquirer");
const {letters7c} = require("./letter.js")
const {numWrong} = require("./letter.js")
const {numCorrect} = require("./letter.js")
const displayc = require("./word.js")

const wordtoGuess = new letters7c("e","x","h","a","u","s","t");
const display = new displayc("You win, You lose");

console.log("~~~~~~Welcome to Hangman~~~~~~~\n")
console.log("~~~~~~The subject is automobiles~~~~~~\n")
console.log("~~~~~~The word to guess is SEVEN letters long~~~~~~\n")
console.log("~~~~~~You have 10 guesses~~~~~~\n")

// GAME LOGIC
function userGuess (){

    console.log("Number of correct guesses:" + wordtoGuess.numCorrect);
    console.log("Number of incorrect guesses:" + wordtoGuess.numWrong);

        inquirer
          .prompt([
            {
              type: "input",
              message: "Guess a letter...",
              name: "guess"
            },
          ])
          .then(function(inquirerResponse) {

                console.log(inquirerResponse.guess);

              	wordtoGuess.guess(inquirerResponse.guess);

                if (wordtoGuess.numCorrect == 7){ 
                  console.log(display.win);
                }
                if (wordtoGuess.numWrong == 10){
                  console.log(display.loss);
                }
                if (wordtoGuess.numWrong < 10 && wordtoGuess.numCorrect < 7){
                    userGuess();

                } else return;
                });
}

userGuess();