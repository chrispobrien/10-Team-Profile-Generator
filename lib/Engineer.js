// Engineer class
const Person = require('./Person');

class Engineer extends Person {
    constructor(name, employeeId, email, githubUserName) {
        super(name, employeeId, email);
        this.githubUserName = githubUserName;
    };

    getGithubUserName() {
        return this.githubUserName;
    }
};

module.exports = Engineer;