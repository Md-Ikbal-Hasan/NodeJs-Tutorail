const dbConnect = require('./mongodb')

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        { brand: 'samsung' },
        {
            $set: { name: 'samsung  latest phone', price: 1240 }
        }
    )

    console.log(result);
}

updateData()