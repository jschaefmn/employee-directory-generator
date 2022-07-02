const Employee = require('../lib/Employee');

// extend employee constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  //return school from input
  getSchool() {
    return this.school;
  }

  //override employee role to intern
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;