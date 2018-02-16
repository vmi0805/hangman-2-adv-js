const fs = require("fs");
const inquirer = require("inquirer");
const letters7c = require("./letter.js")
const word = require("./word.js")

console.log("\n")
console.log("~~~~~~Welcome to Hangman~~~~~~~\n")
console.log("~~~~~~The subject is automobiles~~~~~~\n")
console.log("~~~~~~The word to guess is SEVEN letters long~~~~~~\n")

const wordtoGuess = new letters7c("e","x","h","a","u","s","t")
const wordc = new word("exhaust")

// GAME LOGIC STARTS
inquirer
  .prompt([
    {
      type: "input",
      message: "Guess a letter...",
      name: "guess"
    },

  ])
  .then(function(inquirerResponse) {

  	wordc.guess(inquirerResponse.guess);

  	})

// display the blanks to guess (seven in total)

// get letter to guess in prompt - store in inquirer.guess

// compare inquirer.guess to each letter in the wordtoGuess object

// if guess matches any of the wordtoGuess letters, then display the updated letters (use an array) and increment the number of correct guesses

// if guess does not match any of the wordtoGuess letters, update the guessed letters array and decrease guesses remaining and console.log the array of wrong letters guessed

// if number of guesses remaining equals zero, console.log "you lose" and then prompt user whether to resetart the game

// if number of correct guesses matches the word length, then console.log "you win" and prompt the user whether to restart the game