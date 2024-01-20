const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/cravecruise";

const mongoDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Fetch data from "food" collection
    const foodCollection = mongoose.connection.db.collection("food");
    const fetched_data = await foodCollection.find({}).toArray();
    global.food = fetched_data;
    // console.log("Food data fetched:", fetched_data);

    // Fetch data from "category" collection
    const categoryCollection = mongoose.connection.db.collection("category");
    const categoryData = await categoryCollection.find({}).toArray();
    global.category = categoryData;
    // console.log("Category data fetched:", categoryData);

    const combinedData = [[...fetched_data], [...categoryData]];
    global.combinedData = combinedData;
    console.log("Combined data:", combinedData);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

// const mongoDB = async () => {
//   await mongoose.connect(mongoURI);
//   console.log("connected");
//   const fetched_Data = await mongoose.connection.db.collection("food");
//   fetched_Data.find({}).toArray(async function (err, data) {
//     const foodCategory = await mongoose.connection.db.collection("category");
//     foodCategory.find({}).toArray(function (err, CatData){
//       if (err) console.log(err);
//       else {
//         global.food = data;
//         global.category = CatData;
//       }
//     })
//   });
// };

module.exports = mongoDB;
