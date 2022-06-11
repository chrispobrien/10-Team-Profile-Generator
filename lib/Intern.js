// Intern class
const Person = require('./Person');

class Intern extends Person {
    constructor(name, employeeId, email, school) {
        super(name, employeeId, email);
        this.school = school;
    };

    getSchool() {
        return this.school;
    }
};

module.exports = Intern;