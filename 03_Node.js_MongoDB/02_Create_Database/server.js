/* Creating a Database
======================
To create a database in MongoDB, start by creating 
a MongoClient object, then specify a connection 
URL with the correct ip address and the name of 
the database you want to create.

MongoDB will create the database if it does not exist, 
and make a connection to it. */

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

client
  .connect()
  .then(() => {
    const database = client.db("w3schools_nodejs_database");
    return database.createCollection("customers_10");
  })
  .then(() => {
    console.log(" Collection created !");
    client.close();
  })
  .catch((err) => console.log(err));

/* Important: In MongoDB, a database is not created until 
it gets content!

MongoDB waits until you have created a collection (table), 
with at least one document (record) before it actually creates 
the database (and collection). */
