import express from 'express'
const router = express.Router()
import { CartController } from "../controllers/cart.controller.js";
const cartController = new CartController

//funcionan
router.get("/:cid", cartController.getCartById)
router.post("/", cartController.newCart)
router.delete("/:cid", cartController.clearCart)
//no funcionan
router.post("/:cid/products/:pid", cartController.addProducts)
router.delete("/:cid/products/:pid", cartController.deleteProduct)
router.put("/:cid", cartController.updateCart)
router.put("/:cid/products/:pid", cartController.updateQuantity)

router.post("/:cid/purchase", cartController.purchase)

export default router