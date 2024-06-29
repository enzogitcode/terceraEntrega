import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'))
import productRouter from './routes/product.router.js'
import cartRouter from './routes/cart.router.js'

import config from './config/config.js';
import './database.js'
const { port } = config



//Routes
app.use("/api/products", productRouter)
app.use("/api/carts", cartRouter)

//Views
import exphbs from 'express-handlebars'
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

//Listen
app.listen(port)
