const mysql = require('mysql');

const con = mysql.createConnection({
    name: "localhost",
    user: "root",
    password: "",
    database: "test"
})

// check connected or not..........

// con.connect((err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('connected');

//     }
// })


con.query(" select * from students ", (err, result) => {
    console.log("result", result);
})