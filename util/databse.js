const mySQL = require("mysql2");

const pool = mySQL.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "soccer44",
});

module.exports = pool.promise();
