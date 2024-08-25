const dbConnect = require('./mongodb');

const insert = async ()=>{
  const db=  await dbConnect();
  const result =  await db.insertMany(
    [
      {name:'nord 5', brand: 'onePlus', price:320, category:'mobile'},
      {name:'max5',brand:'micromax',price:100, category:'mobile'},
      {}
    ]
  );

 if(result.acknowledged){
  console.log("data inserted")
 }
}

insert();