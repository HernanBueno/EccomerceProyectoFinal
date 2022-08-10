import express from 'express'
import {createCart,
    addProductsToCart,
    deleteCart,
    getCartByID,
    getAllCarts, deleteProductByid} from '../Controllers/Cart.controller.js'
import { verifyAdmin } from '../Middlewares/verifyAdmin.js'
import {verifyProduct} from '../Middlewares/verifyProduct.js'
export const Router = express.Router()
.post("/",verifyProduct,  createCart)
.put('/:id',verifyProduct, addProductsToCart)
.delete("/:id", deleteCart)
.get("/:id", getCartByID)
.delete('/product/:cartid',deleteProductByid)
//Solo Admin
.get('/', verifyAdmin, getAllCarts)