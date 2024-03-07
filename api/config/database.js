const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vetcare",
});

connection.connect();

module.exports = connection;
