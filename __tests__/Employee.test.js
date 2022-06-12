const Employee = require('../lib/Employee');

test('create a employee object', () => {
    const employee = new Employee('Brad Gillis',1,'bgillis@example.com');

    expect(employee.name).toBe('Brad Gillis');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('bgillis@example.com');

});