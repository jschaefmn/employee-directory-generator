const Employee = require("./Employee");

// extending employee constructor
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // call employee constructor
    super(name, id, email);
    this.github = github;
  }

  //return github from input
  getGitHub() {
    return this.github;
  }

  // override employee role to engineer
  getRole() {
    return "Engineer";
  }
};

module.exports = Engineer;