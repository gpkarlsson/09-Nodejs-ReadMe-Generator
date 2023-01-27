// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const MarkDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

//Application questions
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
        name: 'usage',
        message: '',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use',
    },
    {
        type: 'input',
        name: 'email',
        message: 'email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['MIT', 'ISC', 'GNUPLv3'],
        filter(val) {
            return val.toLowerCase();
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app

// Function call to initialize app
//init();


function runQuery() {
    return inquirer.prompt(questions)
        .then((data) => {
            const mark = MarkDown.generateMarkdown(data)
            fs.writeFile('README.md', mark, function (err) {
                if(err) {
                    console.log('Could not save file')
                } else {
                    console.log('Success: new README.md file generated inside current folder')
                }
            })
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })
}

runQuery()
