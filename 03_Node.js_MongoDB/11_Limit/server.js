
/* Limit the Result
====================

To limit the result in MongoDB, we use the "limit()" method.

The "limit()" method takes one parameter, a number defining 
how many documents to return.                            */

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if(err) throw err;
    const database = db.db("w3schools_nodejs_database");
    database.collection("customers").find().limit(5).toArray( (err, res) => {
        if (err) throw err;
        console.table(res);
        db.close();
    })
});

