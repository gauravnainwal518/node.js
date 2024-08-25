const dbConnect = require('./mongodb')

const updateData = async ()=>{
  let data =  await dbConnect();
  let result = await data.updateMany(
    {name: 'note 5'},
    {$set: {name: 'nord 6',price:550}
  }
  );
  console.warn(result)
}
updateData();