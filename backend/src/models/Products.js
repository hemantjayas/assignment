const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    img: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number }
})


const Product = mongoose.model("product", productSchema);

module.exports = Product



