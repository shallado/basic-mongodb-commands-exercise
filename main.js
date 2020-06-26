// show database
show dbs;

// use a database or non existent database
use test-db;

// insert into existing and nonexisting collection 2 documents
db.workers.insertMany([{
  name: 'Steve Jobs',
  age: 29,
  employed: true
}, {
  name: 'Michael Jackson',
  age: 45,
  employed: false
}]);

// show all documents in a collection
db.workers.find();

// show all documents and have format look presentable
db.workers.find().pretty();

// find a specific document in the collection
db.workers.findOne({ age: 29 })