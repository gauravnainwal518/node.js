//Asynchronus nature of nodejs
/*
console.log("start exe...l.l")

setTimeout(()=>{
  console.log("logic exe.....")
},2000)

console.log("complete exe....");
*/

//drawback example
let a = 10;
let b = 0;
setTimeout(()=>{
  b=20;
},2000)

console.log(a+b); // output is 10 because this console is execute first
//this situation is handled by the promises or async&await and callback stay tune next lecture!
//prefer promises and async&await  callback is a old method.