const mongoos = require('mongoose');

const main = async () => {
    await mongoos.connect("mongodb://localhost:27017/e-comm");
    const ProductsSchema = new mongoos.Schema({
        name: String,
        price: Number
    });

    const ProductsModel = mongoos.model('products', ProductsSchema);
    let data = new ProductsModel({ name: "m 12", price: 1200 });
    let result = await data.save();
    console.log(result);
}

main();