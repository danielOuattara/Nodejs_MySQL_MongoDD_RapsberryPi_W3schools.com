/* Creating a Collection
=========================

To create a collection in MongoDB, use the 
"createCollection()" method: */

// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   const database = db.db("w3schools_nodejs_database");
//   database.createCollection("customers", (err, res) => {
//     if (err) throw err;
//     console.log(" Collection created !");
//     db.close();
//   });
// });

/* Important: In MongoDB, a collection is not created until 
              it gets content!

MongoDB waits until you have inserted a document before 
it actually creates the collection.

*/

// ---------------------------------------------------------

// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";
// const client = new MongoClient(url);

// MongoClient.connect(url)
//   .then((client) => {
//     const database = client.db("w3schools_nodejs_database");
//     return database;
//   })
//   .then((database) => {
//     return database.createCollection("customers_2");
//   })
//   .then(() => {
//     console.log(" Collection created !");
//     client.close();
//   })
//   .catch((err) => console.log(err));

// ---------------------------------------------------------

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

client
  .connect()
  .then(() => {
    const database = client.db("w3schools_nodejs_database");
    return database.createCollection("customers_");
  })
  .then(() => {
    console.log(" Collection created !");
    client.close();
  })
  .catch((err) => console.log(err));

// ---------------------------------------------------------
