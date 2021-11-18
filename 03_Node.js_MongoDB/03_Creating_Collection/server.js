
/* Creating a Collection
=========================

To create a collection in MongoDB, use the 
"createCollection()" method: */

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const database = db.db("w3schools_nodejs_database");
  database.createCollection("customers", (err, res)=> {
    if (err) throw err;
    console.log(" Collection created !")
  })
  db.close();
});


/* Important: In MongoDB, a collection is not created until 
              it gets content!

MongoDB waits until you have inserted a document before 
it actually creates the collection.

. */