import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ConnectDB from './connectDB.js'
import { Router } from './Routes/index.js';

const app = express()
app.use(cors({exposedHeaders:['*', 'authorization']}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/', Router)
//funcion para crear server
export async function createServer(port, dbName){
    await ConnectDB(dbName)
    return app.listen(port, ()=>{
        console.log(`listening on port ${port}`)
    })
}