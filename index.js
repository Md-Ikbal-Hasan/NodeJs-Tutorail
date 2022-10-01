const express = require('express');
const reqFilter = require('./middleware')
const app = express();
const route = express.Router();

route.use(reqFilter);


app.get('/', (req, resp) => {
    resp.send(' <h1>  Welcome to home page </h1>')
})

app.get('/users', (req, resp) => {
    resp.send(' <h1>  Welcome to users page </h1>')
})

route.get('/about', (req, resp) => {
    resp.send(' <h1>  Welcome to about page </h1>')
})

route.get('/contact', (req, resp) => {
    resp.send(' <h1>  Welcome to contact page </h1>')
})


app.use('/', route);

app.listen(5000);