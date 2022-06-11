const Person = require('../lib/Person');

test('create a person object', () => {
    const person = new Person('Brad Gillis',1,'bgillis@example.com');

    expect(person.name).toBe('Brad Gillis');
    expect(person.employeeId).toEqual(1);
    expect(person.email).toBe('bgillis@example.com');

});