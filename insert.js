const dbConnect = require('./mongodb')

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insert(
        { name: 'Samsung galaxy', brand: 'Samsung', price: 500, category: 'mobile' }
    )
    if (result.acknowledged) {
        console.log('data inserted');
    }
}

insert()