// TODO: Include packages needed for this application
const inquirer = require('inquirer');
console.log('readme gen running');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'problem',
        message: 'What problem does this project solve?',
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn? ',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was the motivation for this project? ',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What was the motivation for this project? ',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What was the motivation for this project? ',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
