const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs')

app.get('', (req, resp) => {
    resp.sendFile(`${publicPath}/index.html`)
})


app.get('/about', (req, resp) => {
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/help', (req, resp) => {
    resp.sendFile(`${publicPath}/help.html`)
})


app.get('/profile', (req, resp) => {
    const user = {
        name: 'Md Ikbal Hosen',
        email: 'ikbal@gmail.com',
        city: 'Cumilla'
    }
    resp.render('profile', { user })
})

app.get('*', (req, resp) => {
    resp.sendFile(`${publicPath}/404.html`)
})

app.listen(5000);