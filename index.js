const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});

const saveInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        name: "max 100",
        price: 200,
        brand: 'maxx',
        category: 'Mobile'
    });
    const result = await data.save();
    console.log(result);
}

// saveInDB()

const updateInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.updateOne(
        { name: 'victorians' },
        {
            $set: { price: 1290 }
        }
    )
    console.log(data);

}

// updateInDB()

const deleteInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({ name: 'victorians pro' });
    console.log(data);

}

// deleteInDB();


const findInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find({ brand: 'Cumilla' })
    console.log(data);
}

// findInDB();