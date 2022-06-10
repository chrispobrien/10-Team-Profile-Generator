const Manager = require('../lib/Manager');

test('create a manager object', () => {
    const manager = new Manager('Brad Gillis',1,'bgillis@example.com','9145551212');

    expect(manager.name).toBe('Brad Gillis');
    expect(manager.employeeId).toEqual(1);
    expect(manager.email).toBe('bgillis@example.com');
    expect(manager.phone).toBe('9145551212');

});