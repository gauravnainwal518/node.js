const express = require('express');
require('./config');

const product = require('./product');

const app = express();
app.use(express.json())

app.post("/create",async (req,resp)=>{
  let data = new product(req.body);
  let result = await data.save();
  console.log(req.body)
  resp.send(result);
});

app.listen(4500);