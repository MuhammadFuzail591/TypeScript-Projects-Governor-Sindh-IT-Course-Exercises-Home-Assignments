import inquirer from "inquirer";
import chalk from "chalk";
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
