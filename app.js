const Team = require('./lib/Team');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./utils/generateHTML');
const writeToFile = require('./utils/writeToFile');

const team = new Team('Night Ranger');

const manager = new Manager('Brad Gillis',1,'bgillis@example.com','9145551212');
team.manager = manager;

const engineer1 = new Engineer('Eric Levy',2,'elevy@example.com','ericlevynr');
const engineer2 = new Engineer('Jack Blades',3,'jblades@example.com','jackbladesnr');
const engineer3 = new Engineer('Keri Kelli',4,'kkelli@example.com','kerikellinr');

const intern1 = new Intern('Phil Collen',5,'pcollen@example.com','Def Leppard State University');
const intern2 = new Intern('Rick Allen',6,'rallen@example.com','State Tech Ag Central College Tech');

team.engineers = [engineer1, engineer2, engineer3];
team.interns = [intern1, intern2];

writeToFile('./new.html',generateHTML(team))
.then(console.log("Team Profile generated successfully!"))
.catch(err => {
    console.log(err)
});
