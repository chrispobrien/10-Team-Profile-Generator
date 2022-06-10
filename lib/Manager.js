const Person = require('./Person');

class Manager extends Person {
    constructor(name, employeeId, email, phone) {
        super(name, employeeId, email);
        this.phone = phone;
    };

    getPhone() {
        return this.phone;
    }
};

module.exports = Manager;