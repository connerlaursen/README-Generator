// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license!== "none"){
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`

    }
    return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(data){

return `
${renderLicenseBadge(data.license)} \n
# Title \n
${data.title}\n
\n
## Description \n
${data.description}\n
\n
## Table Of Contents \n
*[description](#description) \n
*[installation](#installation) \n
*[usage](#usage) \n
*[contributions](#contributions) \n
*[testing](#testing) \n
*[license](#license) \n
*[questions](#questions) \n
\n
## Installation \n
The command that should be run to install dependencies is ${data.install} \n
\n
## Usage \n
This is what the user needs to know about using the repo: ${data.usage} \n
\n
## Contributions \n
This is what the user needs to know about contributing to the repo: ${data.contribute} \n
\n
## Testing \n
This is what the user needs to know about testing the repo: ${data.tests} \n
\n
## License \n
The license being used for the project is ${data.license} ${renderLicenseBadge(data.license)} \n
\n
## Questions \n
If you have any questions, contact me directly at: ${data.email} \n
My github profile is at: https://www.github.com/${data.github} \n
`
}

module.exports = generateMarkdown