const express = require("express")
const Product = require("../models/Products")
const router = express.Router();


router.post("/", async (req, res) => {
    try {

       
        const newProduct = await Product.create(req.body);
        res.status(201).send(newProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

});

router.get("/", async (req, res) => {
    try {
        const allProduct = await Product.find();
        res.status(200).send(allProduct)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
});


router.put("/cart/:_id", async (req, res) => {
    try {

        const id = req.params._id;
        const selectedProd = await Product.updateOne({ _id: id }, { $set: { quantity: 1 } });
        res.status(201).send(selectedProd)
    } catch (e) {
        res.status(500).json({ message: e.message });
    }

});
router.put("/cart/:_id/:quantity", async (req, res) => {
    try {

        const id = req.params._id;
        const quantity = req.params.quantity

        if (quantity === 0) {
            const deleteone = await User.DeleteOne({ _id: id });
            res.status(201).send(deleteone)
        } else {
            const selectedProd = await Product.updateOne({ _id: id }, { $set: { quantity: quantity } });
            res.status(201).send(selectedProd)

        }

    } catch (e) {
        res.status(500).json({ message: e.message });
    }

});


router.get("/cart", async (req, res) => {
    try {
        const cart = await Product.find({ quantity: { $gt: 0 } });
        res.status(201).send(cart)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
})

router.delete("/:_id", async (req, res) => {
    const { productId } = req.params
    try {
        const removeproduct = await Product.deleteOne(productId);
        if (!removeproduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ e: "removed successfully" })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
})





module.exports = router