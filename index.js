const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ProductModel = require("./models/products");

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://Admin:EasyPass123@cluster0.kad2fld.mongodb.net/ProductFinder?retryWrites=true&w=majority"
    );

/* app.get("/getProducts", async (req, res) => {
    ProductModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
}); */

app.get("/getProducts", async (req, res) => {
    try {
        const data = await ProductModel.find({});
        res.send(data);
    } catch (err) {
        throw err;
    }
});

app.post("/createProduct", async (req, res) => {
    const product = req.body;
    const newProduct = new ProductModel(product);
    await newProduct.save();

    res.json(product);
})

app.listen(3001, () => {
    console.log("SERVER RUNS!");
});
