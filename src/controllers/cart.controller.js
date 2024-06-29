import { CartRepository } from "../repository/cart.repository.js";
const cartRepository = new CartRepository()
export class CartController {
    async newCart() {
        try {

        } catch (error) {

        }
    }
    async addProducts() { }
    async deleteProducts(req, res) {
        const cartId = req.params.cid
        const productId = req.params.pid
        try {
            const cart = await cartRepository.getCartById(cartId)
            
        } catch (error) {

        }

    }
    async getCartById(req, res) {
        const cartId = req.params.cid
        try {
            const cart = await cartRepository.getCartById(cartId)
            res.json(cart)
        } catch (error) {
            console.log(error)
            res.json(error)
        }
    }
    async updateCart() { }
    async updateQuantity() { }
    async clearCart(req, res) {
        const cartId = req.params.cid
        try {
            const cart = await cartRepository.getCartById(cartId)

        } catch (error) {

        }
    }
    async purchase() { }
}
