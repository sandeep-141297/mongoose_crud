require("dotenv").config();  // Load environment variables
// for server connection and perform require "mongoose"
const mongoose = require("mongoose");
// direct db select in localhost uri
// const uri = "mongodb://127.0.0.1/shop";

// copy from atlas db - connect - divers - connection url and paste and change password and aster .net/dbname?
// mongodb+srv://username:<db_password>@cluster0.mnfas.mongodb.net/dbName?retryWrites=true&w=majority&appName=Cluster0

// Use MONGO_URI from .env, otherwise, fallback to local MongoDB
const uri = process.env.MONGO_URI || "mongodb://127.0.0.1/shop";

// for connect
// mongoose.connect(uri);
mongoose.connect(uri)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Error:", err));


// we need to create schema (structured) means document values validation
const productSchema = new mongoose.Schema({
    name: String,
    company: String,
    price: Number,
    colors: [String],
    image: String,
    category: String,
    isFeatured: Boolean
});

// we need to now create a model (for query perform)
// in model we need to pass parameter one is collection name (collection name in singular format like if db have collection products than use product (remove s) & but now we can use S also) and second is schema
// we use capital of first letter in collection we can also use small but for code rule we use capital
const Product = new mongoose.model("Product", productSchema);

// data for insert
const dataAdd = {
    name: "Designer Handbag1",
    company: "64c23350e32f4a51b19b923a",
    price: 2177,
    colors: ["#000000", "#cc6600", "#663300"],
    image: "/images/product-handbag.png",
    category: "64c2342de32f4a51b19b9250",
    isFeatured: true,
};

const main = async () => {
    try {
        //? insert data
        // insertOne not working in mongoose previously but now its working
        // await Product.insertOne(dataAdd);
        // const insertedData = await Product.insertMany(dataAdd);
        // console.log("Inserted Data:", insertedData);

        //? update data
        // const updateQuery = await Product.findOneAndUpdate({name: "Designer Handbag1", price:2166}, {$set: {price:2499}});

        //? read data
        const data = await Product.find({name: "Designer Handbag1", price: {$eq: 2166}});
        console.log(data);

        //? delete data
        // await Product.findOneAndDelete({name: "Designer Handbag1", price:2166});

    } catch(error) {
        console.log(error);
    } finally {
        // connection close after all task perform
        mongoose.connection.close();
    }
};

main();