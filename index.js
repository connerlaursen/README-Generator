const inquirer = require('inquirer');

const fs=require("fs")

const path=require("path")

const generateMarkdown=require("./generateMarkdown")



const userQuestions = [
{
    type:"input",
    name:"github",
    message:"What is your GitHub username?"
},
{
    type:"input",
    name:"email",
    message:"What is your email address?"

},
{
    type:"input",
    name:"title",
    message:"What is your project name?"

},
{
    type:"input",
    name:"description",
    message:"Write a brief description of your project"

},
{
    type:"list",
    name:"license",
    message:"What kind of license should your project have?",
    choices:["MIT", "Apache2.0", "JPL", "BSD3", "none"]
},
{
    type:"list",
    name:"install",
    message:"What command should be run to install dependencies?",
    choices: ["npm install"]

},
{
    type:"input",
    name:"usage",
    message:"What does the user need to know about using the repo?"

},
{
    type:"input",
    name:"contribute",
    message:"What does the user need to know about contributing to the repo?"

},
{
    type:"input",
    name:"tests",
    message:"What does the user need to know about testing?"

}
    ]

function writeToFile (fileName, data){
return fs.writeFileSync(path.join(fileName), data)
// add process.cwd () if this doesnt work
}

function init(){
inquirer.prompt(userQuestions).then((userData)=>{
console.log("Generating README...")
writeToFile("README2.md", generateMarkdown({...userData}))

})
}

init()
