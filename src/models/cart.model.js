import mongoose from "mongoose";

const schema = new mongoose.Schema({
    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        require: true
    },
    quantity: {
        type: Number,
        require: true
    }
})


export default CartModel