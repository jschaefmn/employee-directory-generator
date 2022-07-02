const Employee = require('./Employee');

// extend employee constructor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  //override employee role to manager
  getRole() {
    return "Manager";
  }
};

module.exports = Manager;