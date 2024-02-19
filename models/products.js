const mongoose = require("mongoose")

const ProductsSchema = new mongoose.Schema({
    barcode: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: false,
    },
    Category: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    aisle: {
        type: Number,
        required: true,
    },
    side: {
        type: String,
        required: true,
    },
    section: {
        type: Number,
        require: true,
    },
    shelf: {
        type: Number,
        required: true,
    },
    shelfOrder: {
        type: Number,
        required: true,
    },
});

const ProductModel = mongoose.model("products", ProductsSchema)
module.exports = ProductModel;