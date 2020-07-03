const inquirer = require("inquirer");
const fs = require("fs");
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions for your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information for your project?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines for your project?",
  },
  {
    type: "list",
    message: "Which license would you like to use for your application?",
    name: "license",
    choices: [
      "AGPLv3",
      "GPLv3",
      "LGPLv3",
      "Mozilla",
      "Apache",
      "MIT",
    ],
  },
  {
    type: "input",
    name: "tests",
    message: "What are the test instructions for your project?",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your e-mail address.",
  },
  // add remaining questions
];

inquirer.prompt(questions).then(function (data) {
  const readme = `# ${data.title}

  [![Badge](https://img.shields.io/badge/License-${data.license}-black.svg)](https://opensource.org/licenses/MIT)

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)


## Installation

${data.installation}

## Usage 

${data.usage}

## Contributing

${data.contributing}


## License

This application is covered under the ${data.license} license.


## Tests

${data.tests}


## Questions

For any additional questions, please send me an e-mail at ${data.email}

Link to my GitHub: https://github.com/${data.github}


`;

  fs.writeFile("README.md", readme, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("README was generated!");
  });
});
