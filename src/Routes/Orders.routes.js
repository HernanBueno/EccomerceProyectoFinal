import {createOrder, getOrderByID, updateOrder,deleteOrder, getAllOrders} from '../Controllers/Order.controller.js'
import express from 'express'
import { verifyAdmin } from '../Middlewares/verifyAdmin.js'



export const Router = express.Router()
.post('/:cartID',createOrder )
.get('/:userID', getOrderByID)
.put('/:id', updateOrder)
.delete('/:id',deleteOrder)
//solo admin
.get('/', verifyAdmin,getAllOrders)