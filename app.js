const inquirer = require('inquirer');
const mysql = require('mysql');
require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Hoopla123!',
    database: 'employee_db',
});

function initial (){
//display some welcome message
console.log('WELCOME TO EMPLOYEE TRACKER!')

inquirer.prompt([
    {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
            {
                name: 'View All Employees',
                value:'view_employees'
            },
            {
                name: 'View All Roles',
                value:'view_roles'
            },
            {
                name: 'View All departments',
                value:'view_departments'
            },
            {
                name: 'Add new Department',
                value:'add_departments'
            },
            {
                name: 'add new Role',
                value:'add_role'
            },
            {
                name: 'add new employee',
                value:'add_employee'
            },
            {
                name: 'update employee',
                value:'update_employee'
            },
            {
                name: 'update departments',
                value:'update_departments'
            },
            {
                name: 'update employee',
                value:'update_role'
            },
        ]
    }
])
.then((response) => {
    console.log(response);
    //switch case
    switch(response.choice) {
        case 'view_employees':
            viewEmployee();
            break;
        case 'view_roles':
            viewRoles();
            break;
        case 'view_department':
            viewDepartment();
            break;
    }
});



//our main prompt 
};

function viewEmployee() {
console.log('working');

connection.query('SELECT * FROM employee_table', (err, res) =>{
    console.table(res)
    initial()
})
};

function viewRoles() {
    connection.query('SELECT * FROM role_table', (err, res) =>{
        console.table(res)
        initial()
    })
};

function viewDepartment() {
    connection.query('SELECT * FROM department_table', (err, res) =>{
        console.table(res)
        initial()
    })
};

async function addDepartment() {
    connection.query('SELECT * FROM ')
})






initial();




// const artistSearch = () => {
//     inquirer
//       .prompt({
//         name: 'artist',
//         type: 'input',
//         message: 'What artist would you like to search for?',
//       })
//       .then((answer) => {
//         const query = 'SELECT position, song, year FROM top5000 WHERE ?';
//         connection.query(query, { artist: answer.artist }, (err, res) => {
//           res.forEach(({ position, song, year }) => {
//             console.log(
//               `Position: ${position} || Song: ${song} || Year: ${year}`
//             );
//           });
//           runSearch();
//         });
//       });

//   };