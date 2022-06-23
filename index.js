const inquirer = require('inquirer');
const fs = require('fs');
let result = "";

var init = () => {
    console.log("\nWelcome to use this app! Please answer the following questions and generate your own README file.");
    console.log("\nFor all questions, if you want to start a new line, please type '<br />' into the command line with space around it. Don't press enter to start a new line.");
    console.log("\nIf you want to have indentation in front of your paragraph, please type '&nbsp;' in front of your paragraph on the command line with space around it. Don't press tab key.");
    console.log("\nAfter you are done, press enter to enter next part or finish.\n\n");
    inquirer.prompt([
        {
            type: 'input',
            message: "What's the project name? This will be added as the title of your README file: ",
            name: 'title',
        },
        {
            type: 'input',
            message: "Please enter your GitHub username: ",
            name: 'username',
        },
        {
            type: 'input',
            message: "Please enter your email address: ",
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please enter a brief description of your project: ',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please enter the installation instruction (command) for your project: ',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please describe how the user can use your repo: ',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Which license should your project have? Choose one from below: ',
            name: 'license',
            choices: ['BSD 3', 'MIT', 'GPL 3.0', 'APACHE 2.0', 'BOOST 1.0', 'ECLIPSE 1.0', 'MOZILLA 2.0', 'None'],
        },
        {
            type: 'input',
            message: 'Please introduce the contribution status of this repo: ',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'What command should be entered to run the test for this project? Enter below: ',
            name: 'test',
        },
    ]).then((data) => {
        var licenseLink = '';
        if (data.license === 'BSD 3') {
            licenseLink = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        } else if (data.license === 'MIT'){
            licenseLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        } else if (data.license === 'GPL 3.0') {
            licenseLink = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        } else if (data.license === 'APACHE 2.0') {
            licenseLink = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        } else if (data.license === 'BOOST 1.0') {
            licenseLink = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
        } else if (data.license === 'ECLIPSE 1.0') {
            licenseLink = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
        } else if (data.license === 'MOZILLA 2.0') {
            licenseLink = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        }
        result = 
`# ${data.title}

${licenseLink}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary APIs for running this project, please follow the instruction below or type the following commands: 

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## License

This project is governed by ${data.license} license.

## Contributing

${data.contribution}

## Tests

Run the following command if you want to test this project:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about this repo or project, please email me at: ${data.email} <br />
If you want to see more of my projects, here is my GitHub page: [${data.username}](https://github.com/${data.username}/)
`;
console.log(result);
    fs.writeFile('README.md', result, (err) => {err ? console.log('Sorry, an error happend when generating file') : console.log("Generating README file succeed! Please check your folder.")});
    })
}

init();

