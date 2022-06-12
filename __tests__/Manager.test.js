const Manager = require('../lib/Manager');

test('create a manager object', () => {
    const manager = new Manager('Brad Gillis',1,'bgillis@example.com','9145551212');

    expect(manager.name).toBe('Brad Gillis');
    expect(manager.id).toEqual(1);
    expect(manager.email).toBe('bgillis@example.com');
    expect(manager.officeNumber).toBe('9145551212');

});