const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost/learnmongo';

async function main() {
    let db;
    try {
        db = await MongoClient.connect(uri);

        let cursor = await db.collection('inventory').find({});
        console.log(await cursor.toArray());
        cursor = await db.collection('inventory').find({ status: 'D' });
        console.log(await cursor.toArray());


    } catch (err) {
        throw new Error(err);

    } finally {
        db.close();
    }
}

main();
