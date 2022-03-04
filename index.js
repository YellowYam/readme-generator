// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// Create an array of questions for user input
const questions = [
    //Get project title
    {
        type: 'input',
        name: 'title',
        message: 'Project title: ',
    },
    //Get user email
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
    //Get user Github username
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter your GitHub username: ',
        validate(value) {
            const pass = value.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)
            if (pass) {
                return true;
            }

            return 'Please enter a valid GitHub username.';
        },
    },
    //Get project description
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description for the project: ',
    },
    //Get user defined usage section
    {
        type: 'editor',
        name: 'usage',
        message: 'Enter usage information, in markdown: ',
    },
    //Get project contributors
    {
        type: 'input',
        name: 'contributors',
        message: 'Enter all collaborators on the project, separated by a comma: ',

    },
    //Get license
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for the project.',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License',
                  'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" License',
                  'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal',
                  'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 
                  'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 
                  'Mozilla Public License 2.0', 'The Unlicense'],
        validate(value){
            if (value) {
                return true;
            }

            return 'You must select a license.';
        }
    },
];

// Writes the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => console.error('Error', err));
}

// Initializes the app
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

