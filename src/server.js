import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ConnectDB from './connectDB.js'
import { Router } from './Routes/index.js';
import { Server as HttpServer } from 'http'
import  { Server as IOServer } from 'socket.io'
import MessageModel from './Models/Messages.model.js'
const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

 //chat con ws
io.on('connection', async socket => {
    const mensajes = await MessageModel.find()
    socket.emit('mensajes', mensajes)
    socket.on('nuevoMensaje', mensaje => {
        mensajes.push(mensaje)
        io.sockets.emit('mensajes', mensajes)
        MessageModel.create(mensaje)
        .then(m=> mensajes.push(m))
        .catch(e=>console.log(e))
    })
})


app.use(cors({exposedHeaders:['*', 'authorization']}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/', Router)
//funcion para crear server
export async function createServer(port, dbName){
    await ConnectDB(dbName)
    return httpServer.listen(port, ()=>{
        console.log(`listening on port ${port}`)
    })
}