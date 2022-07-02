// page creation
const generateHTML = require('./src/generateHTML');

// employee profiles
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

const fs = require('fs');
const inquirer = require('inquirer');

// team array
const teamArrary = [];

// start manager prompts
const addManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Whos is the manager of this team?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the manager's name to continue.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the manager's ID.",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log("Please enter a ID to continue.")
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the manager's email.",
      validate: email => {
        valid = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log('Please enter a valid email to continue.')
          return false
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Please enter the manager's office number.",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log('Please enter a office number to continue.');
          return false;
        } else {
          return true;
        }
      }
    }
  ])
    .then(managerInput => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArrary.push(manager);
      console.log(manager);
    })
};

// start add employee prompts
const addEmployee = () => {
  console.log(`
  =============================
  Adding employees to the team
  =============================
  `);

  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "Please choose the role of your employee",
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: "What is the name of the employee?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the employee's name to continue.");
          return false;
        }
      }
    },
    {
      type: 'input',
      message: "Enter the employee's ID.",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log("Please enter the employee's ID to continue.");
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the employee's email.",
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log('Enter a valid email to continue.')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "Enter the employee's GitHub username.",
      when: (input) => input.role === "Engineer",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Enter the employee's GitHub username to continue.");
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "Enter the Intern's school.",
      when: (input) => input.role === "Intern",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Enter the Intern's school to continue.");
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add another team memeber?',
    }
  ])
    .then(employeeData => {
      // data for the different employee types

      let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);

        console.log(employee);
      }

      teamArrary.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamArrary);
      } else {
        return teamArrary;
      }
    })
};

// generate HTML file using file system
const writeFile = data => {
  fs.writeFile('./dist.index.html', data, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Employee profile successfully created. Please check out index.html in the 'dist' folder.");
    }
  })
};

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });