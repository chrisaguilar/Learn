const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost/learnmongo';

async function main() {
    let db;
    try {
        db = await MongoClient.connect(uri);
        const result = await db.collection('inventory').insertMany([
            { item: "journal", qty: 25, status: "A", size: { h: 14, w: 21, uom: "cm" }, tags: [ "blank", "red" ] },
            { item: "notebook", qty: 50, status: "A", size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank" ] },
            { item: "paper", qty: 100, status: "D", size: { h: 8.5, w: 11, uom: "in" }, tags: [ "red", "blank", "plain" ] },
            { item: "planner", qty: 75, status: "D", size: { h: 22.85, w: 30, uom: "cm" }, tags: [ "blank", "red" ] },
            { item: "postcard", qty: 45, status: "A", size: { h: 10, w: 15.25, uom: "cm" }, tags: [ "blue" ] }
        ]);

        console.log(result);

    } catch (err) {
        throw new Error(err);

    } finally {
        db.close();
    }
}

main();
