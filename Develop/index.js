// TODO: Include packages needed for this application
const inquirer = require('inquirer');
console.log('readme gen running');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        default: 'Node.js Professional Readme Generator'
        //validate input?
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
