cont inquirer = require("inquirer");
const inquirer = require("inquirer");
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

const addUpdatePrompt = [
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

const addUpdateAnswer = () => {
    inquirer.prompt(addUpdatePrompt)
    .then((answer) => {
        switch (answer.options) {
            case "view":
                viewQuestions();
                break;
            case "update":
                updateQuestions();
                break;
            case "add to":
                addToQuestions();
                break;
            case "delete":
                deleteQuestions();
                break;
        }
    })
}