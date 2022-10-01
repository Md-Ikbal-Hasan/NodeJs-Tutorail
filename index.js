const express = require('express');
const app = express();
const reqFilter = require('./middleware')

app.get('', (req, resp) => {
    resp.send(' <h1>  Welcome to home page </h1>')
})

app.get('/users', reqFilter, (req, resp) => {
    resp.send(' <h1>  Welcome to users page </h1>')
})

app.get('/about', (req, resp) => {
    resp.send(' <h1>  Welcome to about page </h1>')
})

app.get('*', (req, resp) => {
    resp.send(' <h1> Page is not found </h1>')
})

app.listen(5000);