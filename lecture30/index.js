const {MongoClient} = require('mongodb');

//        or another method for importing module 
//const MongoClient = require('mongodb').MongoClient;

//if we connect mongodb from localhost same url for everyone
const url = 'mongodb://localhost:27017';
const database = 'e-comm';

//for fetching data
const client = new MongoClient(url);

async function getData()
{
  let result= await client.connect();
  let db =result.db(database);
  let collection = db.collection('products');
  let response = await collection.find({}).toArray();
  console.log(response);
}

getData();