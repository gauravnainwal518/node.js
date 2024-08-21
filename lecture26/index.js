const express = require('express')
const reqFilter = require('./middleware')
const app = express();

//for apply middleware in the group of route
// because separately applying middleware in each page  is not good practice.
const route = express.Router();
route.use(reqFilter);

//we not apply middleware in home and about page  
app.get('/',(req,resp)=>{
  resp.send('Welcome to home page')
})

app.get('/about',(req,resp)=>{
  resp.send('Welcome to about page')
})



app.get('/users',(req,resp)=>{
  resp.send('Welcome to users page')
})

route.get('/contact',(req,resp)=>{
  resp.send('Welcome to contact page')
})

//only apply on route.get pages it is the example of apply middleware in the group of route
app.use('/',route);

app.listen(5000)

