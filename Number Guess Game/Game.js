#! /usr/bin/env node
import inquirer from "inquirer";
//You will have to run command "npm install inquirer" to use this code
import chalk from "chalk"
//Also run "npm install chalk"
let OriginalNum = Math.floor(Math.random() * 51);
for (let i = 0; i < Infinity; i++) {
    let GuessNum = await inquirer.prompt([{
            name: "Guess",
            type: "number",
            message: "Guess the Number between 1 to 50:"
        }]);
    if (GuessNum.Guess < OriginalNum) {
        console.log(chalk.red("Sorry..!! Number is Less"));
        let Choice = await inquirer.prompt([{
                name: "Ch",
                type: "string",
                message: chalk.blue("Do You Want to play Again..??write Yes or No")
            }]);
        if (Choice.Ch == "Yes" || Choice.ch == "yes") {
            continue;
        }
        else {
            break;
        }
    }
    else if (GuessNum.Guess > OriginalNum) {
        console.log(chalk.red("Sorry..!! Number is Greater"));
        let Choice = await inquirer.prompt([{
                name: "Ch",
                type: "string",
                message: chalk.blue("Do You Want to play Again..??write Yes or No")
            }]);
        if (Choice.Ch == "Yes" || Choice.ch == "yes") {
            continue;
        }
        else {
            break;
        }
    }
    else {
        console.log(chalk.yellow(`Very Good this is the exact Number`));
        break;
    }
}
