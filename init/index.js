const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async ()=>{
    await Listing.deleteMany({}); //phele wla data clean
    initData.data = initData.data.map((obj) => ({...obj, owner: '6800f8902e4e97a134a6bad1'}));
    await Listing.insertMany(initData.data); // new data insert
    console.log("data was initialized");
}

initDB();