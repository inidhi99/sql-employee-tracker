DROP DATABASE IF EXISTS company_db;
-- create employee db --
CREATE DATABASE company_db;
-- use employee db-- 
USE company_db;

-- create department table -- 
CREATE TABLE department (
    id INT AUTO_INCREMENT, 
    name VARCHAR(30) NOT NULL, 
    PRIMARY KEY(id)
);

-- create role table -- 
CREATE TABLE role (
    id INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL(10,2) NOT NULL, 
    department_id INT, 
    PRIMARY KEY(id),
   -- references the id from the department table --
    FOREIGN KEY(department_id) REFERENCES department(id) ON DELETE SET NULL
);


-- create employee table -- 
CREATE TABLE employee (
    id INT AUTO_INCREMENT, 
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    role_id INT, 
    manager_id INT,
    PRIMARY KEY(id),

    -- references the id from the role table --
    FOREIGN KEY(role_id) REFERENCES role(id) ON DELETE SET NULL,

  -- references the id from the employee table --
    FOREIGN KEY(manager_id) REFERENCES employee(id) ON DELETE SET NULL
);


show DATABASE;
show tables;







