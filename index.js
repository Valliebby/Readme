// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');
// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your user name?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is your github?',
        name: 'github',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
