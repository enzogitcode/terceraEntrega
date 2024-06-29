import CartModel from "../models/cart.model.js";
import { CartRepository } from "../repository/cart.repository.js";
const cartRepository = new CartRepository()
export class CartController {
    async newCart(req, res) {
        try {
            const newCart = await cartRepository.createCart()
            res.json(newCart)
            console.log("Nuevo carrito creado")
        } catch (error) {
            console.log("error al crear el carrito", error)
            res.json(error)
        }
    }
    async addProducts(req, res) {
        const productId = req.params.pid
        const cartId = req.params.cid
        const quantity = req.body.quantity || 1
        try {
            const product = await cartRepository.addProducts(productId, cartId, quantity)
            res.json(product)
        } catch (error) {
            console.log(error)
            res.json(error)
        }

    }
    async deleteProduct(req, res) {
        const cartId = req.params.cid
        const productId = req.params.pid
        try {
            const cart = await cartRepository.getCartById(cartId, productId)
            res.json(cart)
        } catch (error) {
            console.log(error)
        }

    }
    async getCartById(req, res) {
        const cartId = req.params.cid
        try {
            const cart = await cartRepository.getCartById(cartId)
            if (!cart) {
                res.json("No existe un carrito con ese Id")
            }
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
            const cart = await cartRepository.clearCart(cartId)
            if (!cart) {
                res.json("No existe un carrito con ese Id")
            }
            res.json("carrito eliminado")
        } catch (error) {
            console.log("no se pudo vaciar el carrito", error)
        }

    }
    async purchase() { }
}
