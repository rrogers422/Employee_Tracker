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

const addDeletePrompt = [
    {
        typle: "list",
        name: "addUpdateDelete",
        message: "Would you like to view, update , add to, or delete from the employee database?",
        choices: [
            "view",
            "update",
            "add to",
            "delete"
        ]
    }
]

const addUpdateDeleteAnswer = () => {
    inquirer.prompt(addDeletePrompt)
    .then((answer) => {
        switch (answer.addDeleteUpdate) {
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

const QuestionsPrompt = [
    {
        type: "list",
        name: "QuestionsAnswer",
        message: "view the departments, employee roles, a list of employees, employees by manager, or department budget?",
        choices: [
            "Update Employee Roles",
            "Update Employee Managers"
        ]
    }
]

function updateQuestions = () => {
    inquirer.prompt(QuestionsPrompt)
    .then((answer) => {
        switch (answer.QuestionsAnswer) {
            case "Update Employee Role":
                updateEmployeeRoles();
                break;
            case "Update Employee Manager":
                updateEmployeeManagers();
                break;
        }
    })
}

const addQuestionPrompt = [
    {
        type: "list",
        name: "addQuestionsAnswer",
        message: "Would you like to view the departments, employee roles, a list of employees, employees by manager, or a department budget?",
        choices: [
            "Add Departments",
            "Add Employee Roles",
            "Add Employees",
        ]
    }
]

function addQuestions = () => {
    inquirer.prompt(addQuestionPrompt)
    .then((answer) => {
        switch (answer.addQuestionsAnswer) {
            case "Add Departments":
                addDepartment();
                break;
            case "Add Employee Roles":
                addEmployeeRoles();
                break;
            case "Add Employees":
                addEmployees();
                break;
        }
    })
}

const deleteQuestionPrompt = [
    {
        type: "list",
        name: "deleteQuestionAnswer",
        message: "Would you like to view the departments, employee roles, a list of employees, employees by manager, or a department budget?",
        choices: [
            "Delete Departments",
            "Delete Employee Roles",
            "Delete Employees",
        ]
    }
]

function deleteQuestions = () => {
    inquirer.prompt(deleteQuestionPrompt)
    .then((answer) => {
        switch (answer.deleteQuestionAnswer) {
            case "Delete Departments":
                deleteDepartment();
                break;
            case "Delete Employee Roles":
                deleteEmployeeRoles();
                break;
            case "Delete Employees":
                deleteEmployees();
                break;
        }
    })
}