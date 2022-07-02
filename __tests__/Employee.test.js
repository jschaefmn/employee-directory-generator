const Employee = require('../lib/Employee');

// creates Employee object
test('creates a employee object', () => {
  const employee = new Employee('Jake', 23, 'jschaefmn@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// get name from getName
test('gets employee name', () => {
  const employee = new Employee('Jake', 23, 'jschaefmn@gmail.com');

  expect(employee.getName()).toEqual(expect.any(String));
});

// get id from getId
test('get employee id', () => {
  const employee = new Employee('Jake', 23, 'jschaefmn@gmail.com');

  expect(employee.getId()).toEqual(expect.any(Number));
})

// get employee email from getEmail
test('get employee email', () => {
  const employee = new Employee('Jake', 23, 'jschaefmn@gmail.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// get employee role from getRole()
test('get employee role', () => {
  const employee = new Employee('Jake', 23, 'jschaefmn@gmail.com');

  expect(employee.getRole()).toEqual("Employee");
})

