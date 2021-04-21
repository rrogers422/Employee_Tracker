const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',

// port
    port: 3306,

// username
    user: 'root',
// update with your MySQL password
    password: 'Hoopla123!',
    database: 'employee_db',
});

