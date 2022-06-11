// Person class, base for manager, engineer and intern
class Person {
    constructor(name, employeeId, email) {
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
    };

    getName() {
        return this.name;
    };

    getEmployeeId() {
        return this.employeeId;
    };

    getEmail() {
        return this.email;
    }
};

module.exports = Person;