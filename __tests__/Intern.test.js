const Intern = require('../lib/Intern');

// create intern object
test('create a intern object', () => {
  const intern = new Intern('Jake', 23, 'jschaefmn@gmail.com', 'UMN');

  expect(intern.school).toEqual(expect.any(String));
});

// get school from getSchool()
test('get employee school', () => {
  const intern = new Intern('Jake', 23, 'jschaefmn@gmail.com', 'UMN');

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.tostring()));
});

//get role from getRole()
test('get employee role', () => {
  const intern = new Intern('Jake', 23, 'jschaefmn@gmail.com', 'UMN');

  expect(intern.getRole()).toEqual("Intern");
})