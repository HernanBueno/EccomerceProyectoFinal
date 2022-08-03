import express from 'express'
import { getProducts, putProducts, postProducts, deleteProducts } from '../Controllers/Products.controller.js'


export const Router = express.Router()
.get('/', getProducts)
.get('/:id', getProducts)
.post('/', postProducts)
.put('/:id',putProducts )
.delete('/:id', deleteProducts)
