const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

//it is must for delete api method
const mongodb = require('mongodb')

//getting data body through request
app.use(express.json());

app.get('/', async (req, resp)=>{
  let data = await dbConnect();
 data = await data.find().toArray();
resp.send(data)
});

app.post('/', async(req,resp)=>{
  
  let data = await dbConnect();
  let result = await data.insertOne(req.body)
resp.send(result)
});

app.put('/', async(req,resp)=>{
let data = await dbConnect();
let result = data.updateOne({name:'U10'}, {$set:req.body})
resp.send(req.body)
});

app.delete('/:id',async(req, resp)=>{
  console.log(req.params.id)
  const data = await dbConnect();
  const result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
  resp.send(result)

} )


app.listen(3500)
