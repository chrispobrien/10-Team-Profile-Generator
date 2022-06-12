// Inquirer for user prompts
const inquirer = require('inquirer');
// Classes
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Team = require('../lib/Team');

// This prompts for manager, engineer, and intern
//  keyName and keyDescription are for the fourth property that differs between titles
//  if multiple is true, then ask the user if they wish to enter another
const promptEmployee = (title, keyName, keyDescription, multiple) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the ${title}'s name? (Required)`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter the ${title}'s name!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the ${title}'s Employee ID? (Required)`,
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log(`Please enter the ${title}'s Employee ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the ${title}'s Email Address? (Required)`,
            // default to convention of first initial, last name
            default: (answers) => answers.name.split(' ').length>1 ? answers.name[0].toLowerCase()+answers.name.split(' ')[1].toLowerCase()+'@example.com' : '',
            validate: emailInput => {
                if (emailInput && emailInput.includes('@')) {
                    return true;
                } else {
                    console.log(`Please enter the ${title}'s Email Address!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: [keyName],
            message: `What is the ${title}'s ${keyDescription}? (Required)`,
            validate: keyInput => {
                if (keyInput) {
                    return true;
                } else {
                    console.log(`Please enter the ${title}'s ${keyDescription}!`);
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: `Would you like to add a new ${title}?`,
            default: false,
            when: multiple
        }
    ]);
};

// Prompt for engineers on the team
const promptEngineers = engineers => {
    return promptEmployee('Engineer','github','GitHub User Name', true)
    .then(engineer => {
        engineers.push(new Engineer(engineer.name, engineer.id, engineer.email, engineer.github));
        if (engineer.confirmAddEmployee) {
            return promptEngineers(engineers);
        } else {
            return engineers;
        }
    })
};

// Prompt for interns on the team
const promptInterns = interns => {
    return promptEmployee('Intern','school','school', true)
    .then(intern => {
        interns.push(new Intern(intern.name, intern.id, intern.email, intern.school));
        if (intern.confirmAddEmployee) {
            return promptInterns(interns);
        } else {
            return interns;
        }
    })
};

// Filter out non-numbers
const onlyNumbers = (input) => {
    const numbers = '0123456789';
    return input.split('').reduce((output, character) => output + (numbers.includes(character) ? character : ''),'');
}

// Assemble team object from user prompts
const promptUser = () => {
    return new Promise((resolve, reject) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Your team needs a name!');
                        return false;
                    }
                }
            }
        ])
        .then(answers => {
            const team = new Team(answers.name);
            console.log("\n== Manager ==\n");
            promptEmployee('Manager','officeNumber','Phone Number', false)
            .then(manager => {
                team.manager = new Manager(manager.name, manager.id, manager.email, onlyNumbers(manager.officeNumber));
                console.log("\n== Engineers ==\n");
                promptEngineers([])
                .then(engineers => {
                    team.engineers = engineers;
                    console.log("\n== Interns ==\n");
                    promptInterns([])
                    .then(interns => {
                        team.interns = interns;
                        resolve(team);
                    })
                }
                );
            })
        }
        );
    
    })
};

module.exports = promptUser;