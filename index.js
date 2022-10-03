const express = require('express');
const con = require('./config');
const app = express();

// this is for convert incoming data to json from frontend or postman
app.use(express.json());

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

app.post("/", (req, resp) => {

    // const data = { name: "Tanvir", Email: 'tanvir@gmail.com', Department: "CSE", Phone: "019812374" };
    const data = req.body;

    con.query(" Insert into students SET ? ", data, (err, result, fields) => {
        if (err) err;
        resp.send(result);
    })
})


// this is not working. why?
app.put("/:Email", (req, resp) => {
    const data = [req.body.Department, req.body.Phone, req.params.Email];
    con.query("UPDATE students SET Department = ?, Phone = ?, WHERE Email = ?",
        data, (error, results, fields) => {
            if (error) {
                resp.send(error)
            }
            resp.send(results)
        })
})


app.delete("/:Email", (req, resp) => {
    con.query(`Delete From students  WHERE Email = '${req.params.Email}' `, (error, results, fields) => {
        if (error) {
            console.log(req.params.Email);
            resp.send(error)
        }
        resp.send(results)
    })
})





app.listen(5000)