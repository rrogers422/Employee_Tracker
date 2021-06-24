cont inquirer = require("inquirer");
const mysql = require("mysql");
const {rootCertificates } = require("node:tls");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Hoopla123!',
    database: 'employee_db',
});

// function add

const addUpdateprompt = [
    {
        typle: "list",
        name: "addUpdate",
        message: "Would you like to view, update , add to, or delete from the employee database?",
        choices: [
            "view",
            "update",
            "add to",
            "delete"
        ]
    }
]