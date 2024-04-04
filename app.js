require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect")

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products")


//middleware or to set routes
app.use("/api/products/", products_routes);


app.get("/", (req, res) => {
    res.send("Hi, I am Live")

})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () => {
            console.log(`${PORT}: Yes I am Connected`);
        })
    }
    catch (error) {
        console.log(error)
    }
};

start()