#!/usr/bin/env node
import inquirer from "inquirer";
//Please run "npm install inquirer" to use it
import chalk from "chalk";
//Please run "npm install chalk" to use it
let YourChoice = await inquirer.prompt([{
        name: "Choice",
        type: "string",
        message: "Enter Your Choice:Add,Sub,Mul,Div,Exp,BMI"
    }]);
switch (YourChoice.Choice) {
    case "Add":
        console.log(`You have choosed Addition Operator`);
        let Num1 = await inquirer.prompt([{
                name: "Number1",
                type: "number",
                message: "Enter First Number:"
            }]);
        let Num2 = await inquirer.prompt([{
                name: "Number2",
                type: "number",
                message: "Enter Second Number:"
            }]);
        let result = Num1.Number1 + Num2.Number2;
        console.log(`The result of Addition of two numbers is:` + result);
        break;
    case "Sub":
        console.log(`You have choosed Subtraction Operator`);
        let Num3 = await inquirer.prompt([{
                name: "Number1",
                type: "number",
                message: "Enter First Number:"
            }]);
        let Num4 = await inquirer.prompt([{
                name: "Number2",
                type: "number",
                message: "Enter Second Number:"
            }]);
        let result1 = Num3.Number1 - Num4.Number2;
        console.log(`The result of Subtraction of two numbers is:` + result1);
        break;
    case "Mul":
        console.log(`You have choosed Multiplication Operator`);
        let Num5 = await inquirer.prompt([{
                name: "Number1",
                type: "number",
                message: "Enter First Number:"
            }]);
        let Num6 = await inquirer.prompt([{
                name: "Number2",
                type: "number",
                message: "Enter Second Number:"
            }]);
        let result2 = Num5.Number1 * Num6.Number2;
        console.log(`The result of Multiplication of two numbers is:` + result2);
        break;
    case "Div":
        console.log(`You have choosed Division Operator`);
        let Num7 = await inquirer.prompt([{
                name: "Number1",
                type: "number",
                message: "Enter First Number:"
            }]);
        let Num8 = await inquirer.prompt([{
                name: "Number2",
                type: "number",
                message: "Enter Second Number:"
            }]);
        let result3 = Num7.Number1 / Num8.Number2;
        console.log(`The result of Division of two numbers is:` + result3);
        break;
    case "Exp":
        console.log(`You have choosed Exponentation Operator`);
        let Num9 = await inquirer.prompt([{
                name: "Number1",
                type: "number",
                message: "Enter Number:"
            }]);
        let Num10 = await inquirer.prompt([{
                name: "Number2",
                type: "number",
                message: "Enter Power:"
            }]);
        let result4 = Num9.Number1 ** Num10.Number2;
        console.log(`The result of Exponentation of two numbers is:` + result4);
        break;
    case "BMI":
        console.log(`----------BMI Calculator----------`);
        let Weight = await inquirer.prompt([{
                name: "YourWeight",
                type: "number",
                message: "Enter Your Weight please:"
            }]);
        let HeightInMeters = await inquirer.prompt([{
                name: "YourHeight",
                type: "number",
                message: "Enter Your Height in meters:"
            }]);
        let BMI = Weight.YourWeight / (HeightInMeters.YourHeight * HeightInMeters.YourHeight);
        console.log(`Your BMI is:` + BMI);
        if ((BMI > 18.5) && (BMI < 25)) {
            console.log(chalk.blue(`Congrats!! You are healthy weight`));
        }
        else if (BMI < 18.5) {
            console.log(chalk.red(`Sorry!! You are UnderWeight`));
        }
        else {
            console.log(chalk.red(`Sorry!! You are OverWeight`));
        }
}
