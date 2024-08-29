const mongoose = require('mongoose');

// Schema definition
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String
});

// Model creation
const productsModel = mongoose.model('products', ProductSchema);

// Function to save data in the database
const saveInDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  let data = new productsModel({
    name: "max pro",
    price: 2500,
    brand: "apple",
    category: "mobile"
  });
  let result = await data.save();
  console.log(result);
}
//saveInDB();

// Function to update data in the database
const updateInDb = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  let data = await productsModel.updateOne(
    { name: "Iphone" },
    {
      $set: { price: 700 }
    }
  );
  console.log(data);
}

// Call the function to update the database
//updateInDb();

//function to delete data in the database

const deleteIndb = async ()=>{
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  let data = await productsModel.deleteOne({name: "m8"});
  console.log (data);


}
//deleteIndb();

//find in db

const findIndb = async ()=>{
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  let data = await productsModel.find({name : "Iphone"});
  console.log (data);


}
findIndb();