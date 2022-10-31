

/* Insert Into Collection
==========================

To insert a record, or "document" as it is called in MongoDB, 
into a collection, we use the method "insertOne()".

A "document in MongoDB" is the same as a "record in MySQL"

The first parameter of "insertOne()" is an object 
containing the name(s) and value(s) of each field in the 
document you want to insert.

It also takes a callback function where you can work with 
any errors, or the result of the insertion: */

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const database = db.db("w3schools_nodejs_database");
  const myObj =  { name: "Company Inc", address:"34 Highway, LA"};
  database.collection("customers").insertOne(myObj, (err, res) => {
    if (err) throw err;
    console.log(" 1 document inserted !")
  })
  db.close();
});

/* Important: If you try to insert documents in a collection that 
              do not exist, MongoDB will create the collection 
              automatically.

*/


/* Insert Multiple Documents
=============================

To insert multiple documents into a collection in MongoDB, 
we use the method "insertMany()".

The first parameter of the "insertMany()" method is an array 
of objects, containing the data you want to insert.
It also takes a callback function where you can work with any 
errors or the result of the insertion: */

// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;

//   const database = db.db("w3schools_nodejs_database");
//   const myObj =  [
//     { name: 'John'   , address: 'Highway 71'},
//     { name: 'Peter'  , address: 'Lowstreet 4'},
//     { name: 'Amy'    , address: 'Apple st 652'},
//     { name: 'Hannah' , address: 'Mountain 21'},
//     { name: 'Michael', address: 'Valley 345'},
//     { name: 'Sandy'  , address: 'Ocean blvd 2'},
//     { name: 'Betty'  , address: 'Green Grass 1'},
//     { name: 'Richard', address: 'Sky st 331'},
//     { name: 'Susan'  , address: 'One way 98'},
//     { name: 'Vicky'  , address: 'Yellow Garden 2'},
//     { name: 'Ben'    , address: 'Park Lane 38'},
//     { name: 'William', address: 'Central st 954'},
//     { name: 'Chuck'  , address: 'Main Road 989'},
//     { name: 'Viola'  , address: 'Sideway 1633'}
//   ];

//   database.collection("customers").insertMany(myObj, (err, res) => {
//     if (err) throw err;
//     console.log(`Documents inserted : ${res.insertedCount} !`)
//   })
//   db.close();
// });


/* The Result Object
=======================

When executing "insertMany()" a "result object" is returned.
It contains information about how the insertion affected the database.

The object returned from the example above looked like this: */


/* The _id Field
================= 

If you do not specify an _id field, then MongoDB will add one for you 
and assign a unique id for each document.

If you whish to specify your own id, the value must be unique for each item 
*/

// const MongoClient  = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";

// MongoClient.connect(url,(err, db) => {
//   if (err) throw err;
//   const database = db.db("w3schools_nodejs_database");
//   const myobj = [
//     { _id: 163, name: 'Chocolate Heaven'},
//     { _id: 164, name: 'Tasty Lemon'},
//     { _id: 165, name: 'Vanilla Dream'}
//   ];
//   database.collection('customers').insertMany( myobj, (err, res) => {
//     if(err) throw err;
//     console.log(res);
//     db.close();
//   });
// });