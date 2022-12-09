const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  // query to View All Employees
  findAllEmployees() {
    return this.connection
      .promise()
      .query(
        " SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name as department, role.salary, concat(manager.first_name, ' ', manager.last_name) as manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id lEFT JOIN employee manager ON manager.id = employee.manager_id;"
      );
  }

// query to Add an Employee
  addNewEmployee(newEmployee) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", newEmployee);
  }

  // query to view all roles
  findAllRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT role.title, role.id, department.name as 'Department', role.salary FROM role JOIN department ON role.department_id = department.id;"
      );
  }

//query to  Add a Role
  addNewRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }


//  query to Update an Employee's Role


// query to Update an Employee's Manager


  // query to view all departments
  findAllDepartments() {
    return this.connection.promise().query("SELECT * FROM department;");
  }

  // query to add a new departments
  addNewDepartment(newDepartment) {
    //inserting into department using the newDepartment (answers)
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?;", newDepartment);
  }
  
// query to Remove a Department
removeDepartment(id){
  return this.connection.promise().query("DELETE FROM department WHERE id = ?; ", id);
}


// query to View budget by Department



// query to View Total Budget" -  use sum operator 








  // have to work from here 


//  query to Update an Employee's Role
updateEmployeeRole(updateEmployee) {
  return this.connection.promise().query(
    "SELECT employee.id, employee.first_name, employee.last_name, role.id FROM employee, role, department WHERE department.id = role.department_id AND role.id = employee.role_id INSERT INTO employee SET ?", updateEmployee);
}




 // query to View employee by Department
 findEmployeeByDepartment (viewEmployee){
  return this.connection.promise().query(" SELECT  employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department department ON role.department_id = department.id WHERE department_id = 1;", viewEmployee );
  
}
  // query to View employee by Manager
// viewEmployeeByManager(){
//   return this.connection.promise().query(" SELECT employee.first_name, employee.last_name, concat(manager.first_name, ' ', manager.last_name) as manager FROM employee lEFT JOIN employee manager ON manager.id = employee.manager_id WHERE manager.id = 1;")
// }



}


module.exports = new DB(connection);
