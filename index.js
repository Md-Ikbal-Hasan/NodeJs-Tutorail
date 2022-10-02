const mongoos = require('mongoose');

const main = async () => {
    await mongoos.connect("mongodb://localhost:27017/e-comm");
    const ProductsSchema = new mongoos.Schema({
        name: String,
        price: Number,
        brand: String,
        category: String
    });

    const ProductsModel = mongoos.model('products', ProductsSchema);
    let data = new ProductsModel(
        {
            name: "Ikbal 12",
            price: 12900,
            brand: 'ikbal',
            category: 'mobile'
        }
    );
    let result = await data.save();
    console.log(result);
}

main();