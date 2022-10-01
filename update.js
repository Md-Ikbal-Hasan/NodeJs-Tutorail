const dbConnect = require('./mongodb')

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.update(
        { brand: 'apple borolox' },
        {
            $set: { brand: 'apple' }
        }
    )

    console.log(result);
}

updateData()