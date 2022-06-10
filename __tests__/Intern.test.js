const Intern = require('../lib/Intern');

test('create an intern object', () => {
    const intern = new Intern('Phil Collen',5,'pcollen@example.com','Def Leppard State University');

    expect(intern.name).toBe('Phil Collen');
    expect(intern.employeeId).toEqual(5);
    expect(intern.email).toBe('pcollen@example.com');
    expect(intern.school).toBe('Def Leppard State University');

});