#! /usr/bin/env node
import inquirer from "inquirer";
// 1)  computor will generate a random number.
// 2)  user input for guessing number.
// #)  compare user input and computer generated number and show result.

const randomNumber =Math.floor(Math.random() * 5 + 1);
// console.log(randomNumber)
const answers = await inquirer.prompt([
    {
        name :"userGuessedNumber",
        type :"number",
        message :"Please guess a number between 1-5:",
    }
]);
console.log(answers)
if(answers.userGuessedNumber ===randomNumber){
    console.log("Congratulations! you guessed right number.")
 
}else{
    console.log("You guessed a wrong number.");
}