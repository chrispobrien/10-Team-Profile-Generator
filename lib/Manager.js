const Person = require('./Person');

class Manager extends Person {
    constructor(name, employeeId, email, phone) {
        super(name, employeeId, email);
        this.phone = phone;
    };

    getPhone() {
        return this.phone;
    };

    getFormattedPhone() {
        if (this.phone.length === 10) {
            return `(${this.phone.slice(0,3)}) ${this.phone.slice(3,6)}-${this.phone.slice(6,11)}`;
        } else {
            return this.phone;
        }
    }
};

module.exports = Manager;