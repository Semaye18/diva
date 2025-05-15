import express from 'express'
import { deleteBasket, getBasket, postBasket } from '../controllers/basketController.js'



const basketRouter=express.Router()

basketRouter.route('/')
.get(getBasket)
.post(postBasket)

basketRouter.route('/:id')
.delete(deleteBasket)

export default basketRouter