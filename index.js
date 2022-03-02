// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title: ',
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Enter your email: ',
        validate(value) {
            const pass = value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
            if (pass) {
                return true;
              }
        
              return 'Please enter a valid email.';
            },
        
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter your GitHub username: ',
        validate(value) {
            const pass = value.match(/w+/i)
            if (pass) {
                return true;
              }
        
              return 'Please enter a valid GitHub username.';
            },
        

        
    },
    {
        type: 'editor',
        name: 'description',
        message: 'Enter a brief description for the project: ',
    },
    {
        type: 'editor',
        name: 'installation',
        message: 'Enter a brief intro to the installation instructions: ',
    },
    {
        type: 'editor',
        name: 'usage',
        message: 'Enter usage information: ',
    },
    {
        type: 'editor',
        name: 'contributors',
        message: 'Enter all collaborators on the project: ',
    },
    {
        type: 'confirm',
        name: 'tests',
        message: 'Does it pass all requirement tests?',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => console.error('Error', err));
}

// TODO: Create a function to initialize app
function init() { 
    inquirer
    .prompt(questions)
    .then(data => {
        writeToFile(`${data.title}.md`, generateMarkdown(data));
    }
    )
};

// Function call to initialize app
init();

