const mongoose = require("mongoose");


const connectDB = (uri) => {
    console.log("Connecting to the database");
    return mongoose.connect(uri);
};

module.exports = connectDB;
