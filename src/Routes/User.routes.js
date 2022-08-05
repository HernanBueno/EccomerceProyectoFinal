import express from 'express'
import {registerUser, loginUser} from '../Controllers/User.controller.js'
export const Router = express.Router()
.post('/register', registerUser)
.post('/login', loginUser)