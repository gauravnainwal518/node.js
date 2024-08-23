

const dbConnect = require('./mongodb')



/* first method tough method
// Call dbConnect and use the collection
dbConnect().then((resp) => {
  resp.find().toArray().then((data) => {
    console.warn(data);
  }).catch((error) => {
    console.error('Error fetching data:', error);
  });
}).catch((error) => {
  console.error('Error connecting to the database:', error);
});

// If we want to log the dbConnect promise
console.warn(dbConnect());
*/


//second method for handling promises it easy and modern method
const main = async ()=>{
  let data = await dbConnect();
  data = await data.find().toArray();
  console.warn(data);

}
main();
