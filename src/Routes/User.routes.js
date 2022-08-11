import express from 'express'
import {registerUser, loginUser, logOut} from '../Controllers/User.controller.js'
export const Router = express.Router()
.post('/api/users', registerUser)
.post('/login', loginUser)
.post('/logout', logOut)