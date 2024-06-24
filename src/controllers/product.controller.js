import ProductRepository from "../repository/product.repository.js"
const productRepository = new ProductRepository()
class ProductController {
    async getProducts(req, res) {
        try {
            let { limit = 10, page = 1, sort, query } = req.query;
            const products = await productRepository.getProducts(limit, page, sort, query);
            res.json(products);

        } catch (error) {
            res.json(error)
        }

    }
    //getProductById funciona No Tocar
    async getProductById(req, res) {
        let productId = req.params.pid
        try {
            const product = await productRepository.getProductById(productId)
            res.json(product)
        } catch (error) {
            res.json(error)
        }
    }
    async addProduct(req, res) {
        const newProduct = req.body
        try {
            const product = await productRepository.addProduct(newProduct)
            res.json(product)
            
        } catch (error) {
            res.json(error)
            console.log(error)
        }
    }
    async updateProductById(req, res) {
        try {
            let productId = req.params.pid
            let newDataProduct = req.body
            const updatedProduct = await productRepository.updateProduct(productId, newDataProduct)
            res.json(updatedProduct)
        } catch (error) {
            console.log(error)
            res.json(error)
        }
    }
    async deleteProductById(req, res) {
        let productId = req.params.pid
        try {
            const deletedProduct = await productRepository.deleteProductById(productId)
            res.json(deletedProduct)
        } catch (error) {
            res.json(error)
        }
    }
}
export default ProductController