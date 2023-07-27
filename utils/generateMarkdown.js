// function that returns a license based on which license is passed
// If no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'Apache') {
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
function renderLicenseLink(license) {
  if(license === 'Apache') {
    return `(https://opensource.org/licenses/Apache-2.0)`
  } else if(license === 'boost') {
    return `(https://www.boost.org/LICENSE_1_0.txt)`
  } else if(license === 'IBM') {
    return `(https://opensource.org/licenses/IPL-1.0)`
  } else if(license === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`
  } else {
    return ''
  };
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'Apache') {
    return 'Application licensed by Apache'
  } else if(license === 'boost') {
    return 'Application licensed by Boost'
  } else if(license === 'IBM') {
    return 'Application licensed by IBM'
  } else if(license === 'MIT') {
    return 'Application licensed by MIT'
  } else {
    return ''
  };
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
