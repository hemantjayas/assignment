const mongoose = require("mongoose")


const connect = () => {
    try {
        console.log("database Connected")
        return mongoose.connect("mongodb+srv://hemantprep:hemant123@cluster0.3xdfsjy.mongodb.net/prep")
    } catch (error) {
        console.log(`error while connecting the database due to ${error.message}`)
    }
}


module.exports = connect



// Create an E-commerce Platform

// 1. Create shopping dashboard and list available products.
// 2. Show product description with product image, title, actual price and offer price.
// 3. Product can be added to cart and cart will show total. Also you should be able to change product quantity while in cart.
// 4. GST should be applicable depending on product. You can look for appropriate tax slab on internet.
// 5. Everything should be managed via backend. There should be no need to do anything statically.
// 6. UI should be well made. Code should be clean and understandable.

// Note: You can add some additional functionalities as improvements on your own.

// Duration : 2 hours