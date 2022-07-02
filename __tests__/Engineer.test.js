const Engineer = require('../lib/Engineer');

// create engineer object
test('create a engineer object', () => {
  const engineer = new Engineer('Jake', 23, 'jschaefmn@gmail.com', 'jschaefmn');

  expect(engineer.github).toEqual(expect.any(String));
})

// get employee GitHub from GitHub()
test('get employee GitHub', () => {
  const engineer = new Employee('Jake', 23, 'jschaefmn@gmail.com', 'jschaefmn');

  expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

// get employee role from getRole()
test('get employee role', () => {
  const engineer = new Engineer('Jake', 23, 'jschaefmn@gmail.com', 'jschaefmn');

  expect(engineer.getRole()).toEqual("Engineer");
})