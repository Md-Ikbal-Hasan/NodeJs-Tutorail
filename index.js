const express = require('express');
const { connect } = require('./config');
const con = require('./config');
const app = express();

app.get("/", (req, resp) => {
    con.query(" select * from students ", (err, result) => {
        if (err) {
            resp.send('error');
        }
        else {
            resp.send(result);
        }
    })
})

app.listen(5000)