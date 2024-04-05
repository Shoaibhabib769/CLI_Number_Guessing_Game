#! /usr/bin/env node
import inquirer from "inquirer"

console.log("\n\tWelcome to ShoaibHabib - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
   {
    name: "userGuessedNumber",
    type: "number",
    messgage: "Enter your guess number(Number Limit from 1 to 5):",
   },
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congratulations! You've guessed a correct number.");
}
else{
   console.log("Sorry, you've guessed a wrong number.");
}