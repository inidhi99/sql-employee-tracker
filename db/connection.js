const mySql = require('mysql2');
// require('dotenv').config();

const db = mySql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "nidhi8866",
    database: "company_db",
  },
  console.log(`Connected to the company_db database.`)
);
db.connect(function(err) {
  if (err) throw err 
})
module.exports = db;