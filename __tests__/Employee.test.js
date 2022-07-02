const Employee = require('../lib/Employee');

// creates Employee object
test('creates a employee object', () => {
  const employee = new Employee('Jake', 23, 'jschaefmn@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});