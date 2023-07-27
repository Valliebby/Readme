// function that returns a license based on which license is passed
// If no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } else if(license === 'boost') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
  } else if(license === 'IBM') {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`
  } else if(license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else {
    return ''
  };
}

// Function that returns license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
