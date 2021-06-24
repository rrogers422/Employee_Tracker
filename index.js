const inquirer = require("inquirer");
const mysql = require("mysql");


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Hoopla123!',
    database: 'employee_db',
});

// function to add/update/view/or delete prompt

const menuPrompt = [
    {
        type: "list",
        name: "addUpdateDelete",
        message: "select?",
        choices: [
            "view all employees",
            "view all departments",
            "view all roles",
            "add employee",
            "add department",
            "add employee role",
            "update employee role",        
             "exit"
        ]
    }
]
//results
const mainMenu = () => {
    inquirer.prompt(menuPrompt)
    .then((answer) => {
        switch (answer.addDeleteUpdate) {
            case "view all employees":
                viewEmployees();
                break;
            case "view all roles":
                viewRoles();
                break;
            case "add employee":
                addEmployee();
                break;
            case "add department":
                addDepartment();
                break;
            case "add employee role":
                addEmployeeRole();
                break;
            case "update employee":
                updateEmployee();
                break;
            case "exit":
                exit();
                break;
        }
    })
}

// viewAllEmployees 
const viewEmployees = () => {
    const query = "SELECT * FROM employee_table;";
    connection.query(query, (err, results) => {
        if(err) throw err;
        console.table(results);
        mainMenu();
    })
};

// viewAllDepartments 
const viewDepartments = () => {
    const query = "SELECT * FROM dept_table;";
    connection.query(query, (err, results) => {
        if(err) throw err;
        console.table(results);
        mainMenu();
    })
};


// viewAllRoles 
const viewRoles = () => {
    const query = "SELECT * FROM role_table;";
    connection.query(query, (err, results) => {
        if (err) throw err;
        console.table(results);
        mainMenu();
    })
};

const viewEmployeesByRole = () => {};

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "Enter first name: "
        },
        {
            type: "input",
            name: "last_name",
            message: "Enter last name: "
        },
        {
            type: "input",
            name: "role_id",
            message: "Enter role id: "
        },
        {
            type: "input",
            name: "manager_id",
            message: "Enter manager id:"
        },
    ])
    .then((answer) => {
        connection.query("INSERT into employee_table SET ?", {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id,
            manager_id: answer.manager_id
        })
        console.log("Employee has been added.");
        viewEmployees();
        mainMenu();
    })
};

// addDepartment works
const addDepartment = () => {
    inquirer.prompt ({
        name: "dept_table",
        type: "input",
        message: "Enter new department name: ",
    })
    .then((answer) => {
        const sql = "INSERT INTO dept_table (dept_name) VALUES (?)";
        connection.query(sql, answer.dept_table, (err, res) => {
            console.error(err);
            if (err) throw err;
            console.log("Department has been added.");
            mainMenu();
        });
    });
};

// addEmployeeRole works
const addEmployeeRoles = () => {
    inquirer.prompt ([
            {
                type: "input",
                name: "title",
                message: "Enter new employee role: "
            },
            {
                type: "input",
                name: "salary",
                message: "Enter salary: "
            },
            {
                type: "input",
                name: "dept_id",
                message: "Enter department id: "
            },
    ])
    .then((answer) => {
        connection.query("INSERT INTO role_table SET ?", {
            title: answer.title,
            salary: answer.salary,
            dept_id: answer.dept_id
        })
        console.log("Employee role has been added.")
        viewRoles();
        mainMenu();
    });
};


const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "employee_id",
            message: "Enter the employee id: "
        },
        {
            type: "input",
            name: "role_id",
            message: "Enter updated role id: "
        },
    ])
    .then ((answer) => {
        const query = `UPDATE employee_table SET role_id = ${answer.role_id} WHERE employee_id = ${answer.employee_id};`
        connection.query(query, (err, res) => {
            console.error(err);
            if (err) throw err;
            console.log("Employee role has been update.");
            mainMenu();
        });
    });
};


const exit = () => {
    process.exit(0);
};

mainMenu();
