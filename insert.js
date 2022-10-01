const dbConnect = require('./mongodb')

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insert(
        [
            { name: 'iphone 12 pro', brand: 'apple', price: 500, category: 'mobile' },
            { name: 'iphone 14 pro max', brand: 'apple', price: 500, category: 'mobile' },
        ]
    )
    if (result.acknowledged) {
        console.log('data inserted');
    }
}

insert()