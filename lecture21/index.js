const express = require('express')
const path = require('path')

const app = express();
const PublicPath = path.join(__dirname,'public')

//static is a express function
app.use(express.static(PublicPath))

app.listen(4000)