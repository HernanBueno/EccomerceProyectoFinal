import express from 'express'
import {Router as ProductsRouter} from './Products.routes.js'
import {Router as UsersRouter} from './User.routes.js'
import { Router as CartsRouter } from './Carts.routes.js'
import { authorization } from '../Middlewares/authorization.js'
export const Router = express.Router()
.use('/productos', ProductsRouter)
.use('/users', UsersRouter)
.use('/carts', authorization, CartsRouter)