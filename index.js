const express = require('express');
require('./config'); // connected with mongodb using mongoos

const Product = require('./product');  // Product model with schema

const app = express();
app.use(express.json());

// create api
app.post('/create', async (req, resp) => {
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result);

    resp.send(result)
})

// get api
app.get("/list", async (req, resp) => {
    let data = await Product.find();
    resp.send(data);
})


// delete api
app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await Product.deleteOne(req.params);
    resp.send(data);
})


// update api
app.put("/update/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await Product.updateOne(
        req.params,
        { $set: (req.body) }
    )
    resp.send(data);
})

// search api
app.get("/search/:key", async (req, resp) => {
    let data = await Product.find(
        {
            "$or": [
                { "name": { $regex: req.params.key } },
                { "brand": { $regex: req.params.key } }
            ]
        }
    )
    resp.send(data);

})



app.listen(5000);