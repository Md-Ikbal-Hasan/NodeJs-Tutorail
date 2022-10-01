const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName = 'e-comm'
const client = new MongoClient(url);

async function getData() {
    let result = await client.connect();
    let db = result.db(databaseName);
    const collection = db.collection('products');
    let data = await collection.find({}).toArray();
    console.log(data);
}

getData();