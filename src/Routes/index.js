import express from 'express'
import {Router as ProductsRouter} from './Products.routes.js'
import {Router as UsersRouter} from './User.routes.js'

export const Router = express.Router()
.use('/productos', ProductsRouter)
.use('/users', UsersRouter)