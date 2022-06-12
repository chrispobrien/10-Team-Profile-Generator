const Engineer = require('../lib/Engineer');

test('create an engineer object', () => {
    const engineer = new Engineer('Eric Levy',2,'elevy@example.com','ericlevynr');

    expect(engineer.name).toBe('Eric Levy');
    expect(engineer.id).toEqual(2);
    expect(engineer.email).toBe('elevy@example.com');
    expect(engineer.github).toBe('ericlevynr');

});