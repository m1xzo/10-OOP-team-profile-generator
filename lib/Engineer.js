const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
      }

      // Get github username
      getGithub() {
        return this.github;
      }
    
      // Set role to Engineer
      getRole() {
        return 'Engineer';
      }
}

module.exports = Engineer;