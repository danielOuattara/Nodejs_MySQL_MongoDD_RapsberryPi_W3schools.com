
/* Join Collections
====================

MongoDB is not a relational database, but you can perform 
a "left outer join" by using the "$lookup" stage.

The "$lookup" stage lets you specify which collection you 
want to join with the current collection, and which fields 
that should match.

Consider you have a "orders" collection and a "products" 
collection
( first create collections and insert documents)  */

//--------------------------------------------------------

// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;

//   const database = db.db("w3schools_nodejs_database");
// //
//   const myOrder =  { _id: 1, product_id: 154, status: 1 };
//   database.collection("orders").insertOne(myOrder, (err, res) => {
//     if (err) throw err;
//     console.log(" 1 document inserted !")
//   })
// //
//   const myProducts =  [
//         { _id: 154, name: 'Chocolate Heaven' },
//         { _id: 155, name: 'Tasty Lemons' },
//         { _id: 156, name: 'Vanilla Dreams' }
//   ];
//   database.collection("products").insertMany(myProducts, (err, res)=> {
//     if (err) throw err;
//     console.log(`Documents inserted : ${res.insertedCount} !`)
//   })
// //

//   db.close();
// });


/* Join the matching "products" document(s) to the "orders" collection: */

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  const database = db.db("w3schools_nodejs_database");
  database.collection("orders").aggregate([
      { $lookup: 
        {
            from: 'products',
            localField: 'product_id',
            foreignField: '_id',
            as: 'orderdetails'
        }
      }
   ]).toArray( (err, res) => {
        if (err) throw err;
        console.table(JSON.stringify(res));
   })

db.close();
});

/* As you can see from the result above, the matching document 
from the products collection is included in the orders collection 
as an array. */