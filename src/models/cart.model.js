import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
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
cartSchema.pre('findOne', function (next) {
    this.populate('products.product', '_id title price');
    next();
});
const CartModel = mongoose.model("carts", cartSchema)

export default CartModel