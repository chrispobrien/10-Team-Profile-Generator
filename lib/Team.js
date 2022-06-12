// Team class to store all team information
class Team {
    constructor (name) {
        this.name = name;
        this.manager = {};
        this.engineers = [];
        this.interns = [];
    };

    getName () {
        return this.name;
    };

    getManager() {
        return this.manager;
    };

    getEngineers() {
        return this.engineers;
    };

    getInterns() {
        return this.interns;
    };
};

module.exports = Team;