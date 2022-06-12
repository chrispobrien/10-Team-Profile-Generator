const Team = require('../lib/Team');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

test('create a team object', () => {
    const team = new Team("My new team");

    expect(team.name).toBe("My new team");
});

test('check manager object in team object', () => {
    const team = new Team("My new team");
    const manager = new Manager('Phil Collen',1,'pcollen@example.com','9145551212');

    team.manager = manager;

    expect(team.manager).toEqual(expect.any(Object));
    expect(team.manager.name).toBe('Phil Collen');
    expect(team.manager.id).toBe(1);
    expect(team.manager.email).toBe('pcollen@example.com');
    expect(team.manager.officeNumber).toBe('9145551212');
});

test('check engineer array of objects in team objects', () => {
    const team = new Team("My new team");
    const engineer = new Engineer('Eric Levy',2,'elevy@example.com','ericlevynr');

    team.engineers.push(engineer);

    expect(team.engineers).toEqual(expect.any(Array));
    expect(team.engineers[0]).toEqual(expect.any(Object));

});

test('check intern array of objects in team objects', () => {
    const team = new Team("My new team");
    const intern = new Intern('Phil Collen',5,'pcollen@example.com','Def Leppard State University');

    team.interns.push(intern);

    expect(team.interns).toEqual(expect.any(Array));
    expect(team.interns[0]).toEqual(expect.any(Object));

});