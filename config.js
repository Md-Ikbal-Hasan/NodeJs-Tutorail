const mysql = require('mysql');

const con = mysql.createConnection({
    name: "localhost",
    user: "root",
    password: "",
    database: "test"
})

module.exports = con;