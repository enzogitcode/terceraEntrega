import CartModel from "../models/cart.model";

export class CartController {
    async createCart() {
        try {
            const newCart = new CartModel({ products: [] });
            await newCart.save();
            return newCart;
        } catch (error) {
            console.log("Error al crear el nuevo carrito", error)
            throw error;
        }
    }
    async getCartById() {
        let cartId = req.params.cid
        try {
            const cart = await CartModel.findById(cartId)
            if (!cart) {
                console.log("carrito no encontrado")

            }
            return cart

        } catch (error) {
            console.log("error al obtener el carrito", error)

        }

    }
    async addProducts(cartId, productId, quantity = 1) {
        try {
            const cart = await this.getCartById(cartId);
            const productExist = cart.products.find(item => item.product.toString() === productId);

            if (productExist) {
                productExist.quantity += quantity;
            } else {
                cart.products.push({ product: productId, quantity });
            }
            cart.markModified("products");

            await cart.save();
            return cart;

        } catch (error) {
            console.log("Error al agregar un producto", error);
            throw error;
        }
    }
    async updateCart(cartId, productId) {
        try {
            const cart = await CartModel.findById(cartId)
            if (!cart) {
                console.log("Carrito no encontrado");

            }
            cart.products = updatedProducts
            cart.markModified("products")
            return cart

        } catch (error) {
            console.log("No se pudo actualizar el carrito", error)
            throw error
        }
    }

    async updateProductQuantity() {

    }
    async updateProductQuantity() {

    }
    async deleteCart() { }
    async cleanCart() {

    }

}
