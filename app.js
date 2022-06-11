const promptUser = require('./utils/promptUser');
const generateHTML = require('./utils/generateHTML')
const writeToFile = require('./utils/writeToFile');

// Prompt user for team name, manager, engineer(s), intern(s)
promptUser()
.then(team => {
    // Write generated HTML from team object to file
    writeToFile('./index.html',generateHTML(team))
    .then(console.log("Success!"))
    .catch(err => console.log(err));
})
