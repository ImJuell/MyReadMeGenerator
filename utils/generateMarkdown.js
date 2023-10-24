// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = " ";
  if (license === 'MIT') {
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'APACHE 2.0'){
    badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license === 'GPL 3.0'){
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (license === 'BSD 3'){
    badge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
  } else {
    badge = " "
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = " ";
  if (license === 'MIT') {
    link = 'https://opensource.org/licenses/MIT'
  } else if (license === 'APACHE 2.0'){
    link = 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'GPL 3.0'){
    link = 'https://www.gnu.org/licenses/gpl-3.0'
  } else if (license === 'BSD 3'){
    link = 'https://opensource.org/licenses/BSD-3-Clause'
  } else {
    link = " "
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = " ";
  if (license === 'none') {
    section = " "
  } else {
    section = `${license}`
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # ${renderLicenseBadge(data.license)} 

  ## Description 
   ${data.description}

  ## Table of Contents:
  * [Installation](#installation)
  * [Tests](#tests)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributing)
  * [Questions](#questions)

  ## Installation
   ${data.installation}

  ## Tests
   ${data.tests}

  ## Usage
   ${data.usage}

  ## License
   This project is under the ${renderLicenseSection(data.license)} license.
   ${renderLicenseLink(data.license)}

  ## Contributions
   ${data.contributing}

  ## Questions 
   If you have additional questions, you can contact me at: 
   Email: ${data.email}
   GitHub: ${data.github}
`
}

module.exports = generateMarkdown;