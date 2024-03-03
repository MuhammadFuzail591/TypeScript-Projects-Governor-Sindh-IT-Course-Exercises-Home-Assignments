import inquirer from "inquirer";
import chalk from "chalk";
let OriginalNum = 50;
for (let i = 0; i < Infinity; i++) {
    let GuessNum = await inquirer.prompt([{
            name: "Guess",
            type: "number",
            message: "Guess the Number between 1 to 100:"
        }]);
    if (GuessNum.Guess < OriginalNum) {
        console.log(chalk.red("Sorry..!! Number is Less"));
        let Choice = await inquirer.prompt([{
                name: "Ch",
                type: "string",
                message: chalk.blue("Do You Want to play Again..??")
            }]);
        if (Choice.Ch == "Yes") {
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
                message: chalk.blue("Do You Want to play Again..??")
            }]);
        if (Choice.Ch == "Yes") {
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
