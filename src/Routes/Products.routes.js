import express from 'express'
import { getProducts, putProducts, postProducts, deleteProducts } from '../Controllers/Products.controller.js'
import{ verifyAdmin} from '../Middlewares/verifyAdmin.js'
export const Router = express.Router()
.get('/', getProducts)
.get('/:id', getProducts)
.post('/',verifyAdmin, postProducts)
.put('/:id',verifyAdmin, putProducts )
.delete('/:id',verifyAdmin, deleteProducts)
