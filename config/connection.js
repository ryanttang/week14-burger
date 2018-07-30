// Set up MySQL connection.
const Mysql = require("mysql");

let Connection = Mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burger_db"
});

// Make connection.
Connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + Connection.threadId);
});

// Export connection for our ORM to use.
module.exports = Connection;