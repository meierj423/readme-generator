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

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)


---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## Contributing

If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

## Tests

${data.tests}


## Questions

${data.github}\n${data.email}

---
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
`;

fs.writeFile("README.md", readme, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("README was generated!")
});

});