//Template Engine 
//ejs


const express = require('express')
const path = require('path')


const app = express();

const PublicPath = path.join(__dirname, "public3")


app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');


app.get('/profile',(_,resp)=>{
  const user={
    name:  'gaurav',
    email: 'gaurav@test.com',
    city:'Nainital',
    skills:['react','js','c++','html','nodejs']
  };
resp.render('profile',{user});
})

app.get('/login',(_,resp)=>{
  resp.render('login');
})

app.get('',(_,resp)=>{
resp.sendFile(`${PublicPath}/index.html`)
})

app.get('/aboutme',(_,resp)=>{
resp.sendFile(`${PublicPath}/about.html`)
})

app.get('/help',(_,resp)=>{
resp.sendFile(`${PublicPath}/help.html`)
})

//making 4O4 page not found 
app.get('*',(_,resp)=>{
resp.sendFile(`${PublicPath}/pagenotFound.html`)
})

app.listen(4000);
