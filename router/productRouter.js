import express from 'express'
import { deleteProduct, getProduct, postProduct } from '../controllers/productController.js'


const productRouter=express.Router()

productRouter.route('/')
.get(getProduct)
.post(postProduct)

productRouter.route('/:id')
.delete(deleteProduct)

export default productRouter