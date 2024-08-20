const express = require('express')
const path = require('path')

const app = express();
const PublicPath = path.join(__dirname,'public1')

//static function is not used for remove extension
//app.use(express.static(PublicPath));


//how to remove extensions from url for security purpose
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

app.listen(4500);
