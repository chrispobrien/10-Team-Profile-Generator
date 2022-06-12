// Manager class
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    getPhone() {
        return this.officeNumber;
    };

    // Formats officeNumber as '(xxx) xxx-xxxx' for output
    getFormattedPhone() {
        if (this.officeNumber.length === 10) {
            return `(${this.officeNumber.slice(0,3)}) ${this.officeNumber.slice(3,6)}-${this.officeNumber.slice(6,11)}`;
        } else {
            return this.officeNumber;
        }
    };

    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;