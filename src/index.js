import {PORT, DATABASE_NAME} from './config.js'
import {createServer} from './server.js'

let server = createServer(PORT, DATABASE_NAME)
//funcion para bajar el servidor
function shutDown(){
    console.log('Received kill signal, shutting down gracefully');
    server.close(()=>{
        console.log('close out remaining connections')
        process.exit(0)
    })

    setTimeout(() => {
        console.error('Could not close connections in time,forcefully shutting down')
        process.exit(1)
    }, 10000);

}

process.on('SIGINT', shutDown);
process.on('uncaughtException', shutDown);
process.on('SIGTERM', shutDown);