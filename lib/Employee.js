// Employee class, base class for manager, engineer and intern
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName() {
        return this.name;
    };

    getEmployeeId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return 'Employee';
    };
};

module.exports = Employee;