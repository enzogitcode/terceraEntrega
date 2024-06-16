import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'))
import productRouter from './routes/product.router.js'

import config from './config/config.js';
import './database.js'
const { port } = config

//Routes
app.use("/api/products", productRouter)

//Listen
app.listen(port)
