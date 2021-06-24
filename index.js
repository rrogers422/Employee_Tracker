const inquirer = require("inquirer");
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
        switch (answer.addViewUpdate) {
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

const viewQuestionsPrompt = [
    {
        type: "list",
        name: "viewQuestionsAnswer",
        message: " Would you like to view the department, employee roles, list of employees, employees by manager, or department budget?",
        choices: [
            "department",
            "employee roles",
            "employee list",
            "employee by manager",
            "department budget"
        ]
    }
]

function viewQuestions = () => {
    inquirer.prompt(viewQuestionsPrompt)
    .then((answer) => {
        switch(answer.viewQuestionsAnswer) {
            case "department":
                viewDepartment();
                break;
            case "employee roles":
                viewEmployeeByRole();
                break;
            case "employee list":
                viewEmployeeList();
                break;
            case "employee by manager":
                viewEmployeeManager();
                break;
            case "department budget":
                viewDepartmentBudget();
                break;
        }
    })

}