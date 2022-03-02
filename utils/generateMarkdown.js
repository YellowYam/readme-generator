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
  $ git clone 
  $ cd ../path/to/the/file
  $ npm install
  $ npm start
  \`\`\`
  

  ## Usage
  ${data.usage}

  ## Contributors
  If you would like to become a contributor on this project, please find my contact information in the [questions](#questions)
  section of this README.

  * ${contributors}

  ## Tests
  ${data.tests}

  ## Questions?
  <a href = "mailto:${data.emailAddress}"> Email me! </a> <br>
  <a href = "https://www.github.com/${data.gitHub}"> GitHub </a>

`;
}

module.exports = generateMarkdown;
