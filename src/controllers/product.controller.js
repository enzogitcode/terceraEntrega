import ProductModel from '../models/product.model.js';
const productModel = new ProductModel;
import paginate from 'mongoose-paginate-v2'
class ProductController {
    //getProducts
    async getProducts(req, res) {
        let { limit, page, query, sort } = req.query
        try {
            const sortOption = {}
            if (sort !== 0) {
                sortOption.price = sort;
            }

            const products = await ProductModel.paginate({}, { limit, page })

            const productsFinal = products.docs.map(product => {
                const { _id, ...rest } = product.toObject();
                return rest;
            })

            res.render("index", {
                payload: productsFinal,
                products: productsFinal,
                hasPrevPage: products.hasPrevPage,
                hasNextPage: products.hasNextPage,
                prevPage: products.prevPage,
                nextPage: products.nextPage,
                currentPage: products.page,
                totalPages: products.totalPages,
                prevLink: products.hasPrevPage ? `/products?limit=${limit}&page=${products.prevPage}&sort=${sort}&query=${query}` : null,
                nextLink: products.hasNextPage ? `/products?limit=${limit}&page=${products.nextPage}&sort=${sort}&query=${query}` : null,
            })

            console.log(products)
            console.log(productsFinal)


        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
    async getProductById(req, res) {
        let idProduct = req.params.pid
        try {
            const productById = await ProductModel.find(idProduct).lean()
            res.json(productById)

        } catch (error) {
            res.status(500).json({ message: error.message })
        }

    }
    //addProduct
    async addProducts(req, res) {
        let newProduct = req.body
        try {
            let product = await new productModel(newProduct)
            await product.save();
            res.send(product)
            res.status(201).json("Producto agregado con éxito", product)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
    async updateProductById() {
        let idProduct = req.params.pid
        try {

        } catch (error) {

        }
    }
    async deleteProductById(req, res) {
        let idProduct = req.params.pid
        try {

        } catch (error) {

        }

    }

}
export default ProductController