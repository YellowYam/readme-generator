// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  contributors = data.contributors.split(',').join('\n * ');
  return `# ${data.title}

  ## Description
  ${data.description}

  ## TOC
  1. [Installation](#installation)   
  2. [Usage](#usage)                 
  3. [Contributors](#contributors)
  4. [Tests](#tests)
  5. [Questions](#questions)

  ## Installation
  ***
  Type these commands into git bash to install the application.
  \`\`\`
  $ git clone git@github.com:YellowYam/good-readme-generator.git
  $ cd ../path/to/the/file
  $ npm install
  $ npm start
  \`\`\`
  

  ## Usage
  Good-README-generator is a node-based JavaScript file. After installation, open a bash shell, navigate
  to the generator's directory, and run <code> node index.js </code>.
  
  A prompt will appear in the console window.
  [!Example prompt image](./prompt-screenshot.jpg)

  Answer the questions by entering all required information. The application writes a markdown file to the 
  working directory with the same filename as the title of the new project.

  [!Example readme file](./prompt-screenshot-2.jpg)

  This file contains a functional professional README. Be sure to add any additional tests and features as
  they're developed.

  ## Contributors
  If you would like to become a contributor on this project, please find my contact information in the [questions](#questions)
  section of this README.

  * ${contributors}

  ## Tests
  At present, no tests can be performed on this code. The application meets all requirements without errors.

  ## Questions?
  <a href = "mailto:${data.emailAddress}"> Email me! </a> <br>
  <a href = "https://www.github.com/${data.gitHub}"> GitHub </a>

`;
}

module.exports = generateMarkdown;
