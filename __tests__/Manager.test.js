const Manager = require('../lib/Manager');

// create manager object
test('create a manager object', () => {
  const manager = new Manager('Jake', 23, 'jschaefmn@gmail.com', 923);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// get role from getRole()
test('get role of employee', () => {
  const manager = new Manager('Jake', 23, 'jschaefmn@gmail.com', 923);

  expect(manager.getRole()).toEqual("Manager");
})