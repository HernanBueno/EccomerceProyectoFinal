import express from 'express'
import {Router as ProductsRouter} from './Products.routes.js'

export const Router = express.Router()
.use('/productos', ProductsRouter)