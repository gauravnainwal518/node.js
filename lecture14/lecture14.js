//CRUD operation  with file system
//this is modern/new method for creating file with $ and ``
const fs = require ('fs');
const path = require('path');
const dirPath= path.join(__dirname,'crud');
const filePath= `${dirPath}/apple.txt;`
  
//create file
//fs.writeFileSync(filePath, 'this is a simple text file');

//Read file
//fs.readFile(filePath,'utf8',(error,item)=>{
 // console.log(item)

// })

//Update file
//fs.appendFile(filePath, 'and file name is apple.txt',(err)=>{
 // if(!err) console.log("file is updated")
// })

//Rename file
//fs.rename(filePath,`${dirPath}/fruit.txt;`, (err)=>{
 // if(!err) console.log("file is Renamed")
// })

//Delete file
fs.unlinkSync(`${dirPath}/fruit.txt;`,(err)=>{
  if(!err) console.log("file is deleted")
})

  