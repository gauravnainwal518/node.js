//Template Engine 
//ejs


const express = require('express')
const path = require('path')


const app = express();
//setting publicpath for accessing the public2 folder files
const PublicPath = path.join(__dirname, "public2")

//setting path for views folder for accesing file from views
app.set('views', path.join(__dirname, 'views'));
//setting ejs this is importent step 
app.set('view engine', 'ejs');

//get data from profile under views folder and rendering/displaying
app.get('/profile',(_,resp)=>{
  const user={
    name:  'gaurav',
    email: 'gaurav@test.com',
    city:'Nainital'
  };
  //yaha par ham kuch data send kar rahe to user object ko pass kiya hai
resp.render('profile',{user});
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
