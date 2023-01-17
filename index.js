const inquirer = require('inquirer');
const fs = require('fs');

// Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

// Output HTML file path
const outputPath = './dist/index.html';

// Construct team
const team = [];

// Inquirer questions
const questions = [
  {
    type: 'list',
    name: 'role',
    message: "What is the employee's role?",
    choices: ['Manager', 'Engineer', 'Intern'],
  },
  {
    type: 'input',
    name: 'name',
    message: "What is the employee's name?",
    validate: function (answer) {
      let regex =  /[a-zA-Z]/i;
      return ((regex.test(answer)) ? true : 'Please enter a valid GitHub username.');
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "What the employee's id?",
    validate: function (answer) {
      let id = Number(answer);
      return ((Number.isInteger(id) && id >= 0) ? true : 'Please enter a valid employee id.');
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the employee's email?",
    validate: function (answer) {
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
        return ((regex.test(answer)) ? true : 'Please enter a valid email address.');
    }
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: "What is Manager's office number?",
    when: (answer) => answer['role'] === 'Manager',
    validate: function (answer) {
      let number = Number(answer);
      return ((Number.isInteger(number) && number >= 0)? true : 'Please enter a valid office number.');
    }
  },
  {
    type: 'input',
    name: 'github',
    message: "What is this Engineer's GitHub username?",
    when: (answer) => answer['role'] === 'Engineer',
    validate: function (answer) {
      let regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
      return ((regex.test(answer)) ? true : 'Please enter a valid GitHub username.');
    }
  },
  {
    type: 'input',
    name: 'school',
    message: "What school is this Intern from?",
    when: (answer) => answer['role'] === 'Intern',
    validate: function (answer) {
      return ((answer.length > 0) ? true : 'Please enter a valid school name.');
    }
  },
  {
    type: 'confirm',
    message: "Would you like to add another employee to the team?",
    name: 'addMore',
    when: (answer) => answer['role'] !== undefined,
  },
];

// Write HTML file
function writeToFile(filePath, data) {
    fs.writeFile(filePath, data, (err) =>
      err ? console.log(err) : console.log('Successfully generated team HTML file!')
    );
}

// Initialize app
async function init() {
  inquirer
    .prompt(questions)
    .then(async (response) => {
      switch (response.role) {
        case 'Manager':
          const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
          team.push(manager);
          break;
        case 'Engineer':
          const engineer = new Engineer(response.name, response.id, response.email, response.github);
          team.push(engineer);
          break;
        case 'Intern':
          const intern = new Intern(response.name, response.id, response.email, response.school);
          team.push(intern);
          break;
      }
      if (!response.addMore) {
        writeToFile(outputPath, await generateHTML(team));
      } else {
        return init();
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Your console environment is not supported!")
      } else {
        console.log(error)
      }
    });
}

init();