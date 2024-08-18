//lecture-7 
//Make Basic server output on browser

const http = require('http');
http.createServer((req, resp)=>{
  resp.write("<h1> Hello this is my first server</h1>");
  resp.end();
}).listen(4500);