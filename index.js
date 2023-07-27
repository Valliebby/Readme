// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');
// Array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt([
    
    {
        type: 'input',
        message: 'What is your name?',
        name: 'title',
      },
      {
        type:'input',
        message: 'Please enter Readme Title',
        name:'title', 
    },
      {
        type:'input',
        message: 'Please enter installation',
        name:'installation', 
    },
    {    
        type:'input',
        message: 'Please enter usage information',
        name:'usage',
    },
    {
        type:'input',
        message: 'Please enter contributor information',
        name:'contributions',
    },
    {
        type:'input',
        message: 'Please enter features information',
        name:'features',
    },
    {
        type:'input',
        message: 'Please enter Tests',
        name:'tests',
    },
    {
        type:'input',
        message: 'Please enter questions',
        name:'questions',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
      },
    {
      type:'input',
      message: 'What is your email',
      name: 'email'  
    },  
    {
      type: 'list',
      message: 'Which license would you like?',
      name:'license',
      choices: ['Apache','Boost','MIT','Mozilla']
     },
]);
};

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        if (err){
            console.log("something went wrong!")
        }
        else {
            console.log("File written successfully.")
        }
        
    })
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(response){
        const page= generateMarkdown(response)
        writeToFile("./utils/README.md",page)
    })
}

// Function call to initialize app
init();
