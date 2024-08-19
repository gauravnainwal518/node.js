const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');

//this method shows how to create file with the help of loop|| there are two syntax for creating a file mentioned below 
//for(i=0;i<5;i++){
//fs.writeFileSync(dirPath+ "/hello"+i+".txt","a simple text file");
                        //or
//fs.writeFileSync("hello${i}.txt","a simple txt file");                        
// }

//now we see how to list files
fs.readdir(dirPath, (error, files)=>{
  //console.warn(files)
  //this gives array of all files
  //now we see that with the help of foreach loop|| this gives simple list of files
  files.forEach((item)=>{
   console.log(item)
  })
})