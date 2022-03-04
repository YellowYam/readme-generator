/**************************************************************************/
/*****      The following functions define the README sections        *****/
/**************************************************************************/


// This function return a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `${renderLicenseLink(license)}`
}

// This function returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ''
  }

  switch (license) {
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU General Public License v3.0':
      return '[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'MIT License':
      return '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'BSD 2-Clause "Simplified" License':
      return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    case 'BSD 3-Clause "New" License':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'Creative Commons Zero v1.0 Universal':
      return '[![License](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Eclipse Public License 2.0':
      return '[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)';
    case 'GNU Affero General Public License v3.0':
      return '[![License](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    case 'GNU General Public License v2.0':
      return '[![License](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'GNU Lesser General Public License v2.1':
      return '[![License](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)';
    case 'Mozilla Public License 2.0':
      return '[![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'The Unlicense':
      return '[![License](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    default:
      return '';
  }
}

// This function returns the license section of README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  return `## License 

  ${renderLicenseBadge(license)}`
}

// This function returns the description section of README
// If there is no description, it returns an empty string
function renderDescription(description) {
  if (description) {
   return  `## Description
  ${description}`
  }
}

// This function returns the TOC section of README
function renderTOC() {
  return `## TOC
  1. [Installation](#installation)   
  2. [Usage](#usage)                 
  3. [Contributors](#contributors)
  4. [Tests](#tests)
  5. [Questions](#questions)`
}

// This function returns the Installation section of README
function renderInstallation(title, username, repo) {
  return `## Installation
  ***
  Type these commands into git bash to install the application. ${title} was created with
  [git bash](https://git-scm.com/) and [node package manager](https://nodejs.org/en/).

  \`\`\`
  $ git clone git@github.com:${username}/${repo}.git
  $ cd ../path/to/the/file
  $ npm install
  \`\`\` `
}

// This function returns the Usage section of README
// If there is no Usage section, it returns an empty string
function renderUsage(usage) {
  if (usage !== '') {
    return `## Usage
   ${usage}`
  }
}

// This function returns the Contributors section of README
function renderContributors(contributors) {
 return `## Contributors
  If you would like to become a contributor on this project, please find my contact information in the [questions](#questions)
  section of this README.

  * ${contributors}`
}

// This function returns the Tests section of README
// It shows all open issues in any Github repo with the project title.
function renderTests(username, repo) {
  return `## Tests
  ![Issues](https://img.shields.io/github/issues/${username}/${repo}?style=plastic)<br>
  At present, no tests can be performed on this code. The application meets all requirements without errors.`
}

// This function returns the Contributors section of README
function renderQuestions(email, github) {
 return  `## Questions?
  <a href = "mailto:${email}"> Email me! </a> <br>
  <a href = "https://www.github.com/${github}"> GitHub </a>`
}

/**********************************************/
// This function generates markdown for README
function generateMarkdown(data) {

  //Special formatting
  contributors = data.contributors.split(',').join('\n * ');
  repoTitle = data.title.split(' ').join('-');

  return `# ${data.title}
  
  ${renderDescription(data.description)}

  ${renderTOC()}

  ${renderInstallation(data.title, data.gitHub, repoTitle)}

  ${renderUsage(data.usage)}

  ${renderContributors(contributors)}

  ${renderTests(data.gitHub, repoTitle)}

  ${renderQuestions(data.emailAddress, data.gitHub)}

  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
