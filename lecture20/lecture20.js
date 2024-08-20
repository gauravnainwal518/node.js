//Render/Display html & json and Link pages 

const express = require('express')
const app = express();
//in home page basically we use html heading tag and  a href for creating a link taking back tick (``) for writing html
app.get('', (req,resp)=>{
  resp.send(`
    <h2> Welcome, to home page </h2> <a href = "/about" >go to about page</a>
    `)
})

//in about page we use html other tags
app.get('/about', (req,resp)=>{
  resp.send(`
    <input type = "text" placeholder="user name"/>
    <button> submit</button>
    <br>
    <a href = '/'>go to home page</a>
    `);
})
//in help page we see that how to display/render json data 
app.get('/help', (req,resp)=>{
  resp.send([
    {
      name:'anil',
      email:'anil@gmail.com'
    },
    {
     name:"rahul",
    email: 'rahul@gmial.com'     
    }
  ])
})

app.listen(3000)