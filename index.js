const express = require('express');
const app = express();

app.get('', (req, res) => {
    // console.log("data sent by browser: ", req.query);
    res.send(`
    <h1> Welcome, to Home page</h1> 
    <a href="/about" >Go to about page  </a>
    `)
})

app.get('/about', (req, res) => {
    res.send(`
    <h1> Welcome, to About page</h1>
     <input type="text" placeholder = "User name" value=${req.query.name} />
     <button>Submit </button>
     <a href="/" >Go to Home page  </a>
    
    `)
})

app.get('/help', (req, res) => {
    res.send([
        {
            name: 'Md Ikbal Hosen',
            email: 'ikbal@gmail.com'
        },
        {
            name: 'Md Ramjan Hosen',
            email: 'ramjan@gmail.com'
        },
        {
            name: 'Md Sunny Hosen',
            email: 'sunny@gmail.com'
        }
    ])
})

app.listen(5000)