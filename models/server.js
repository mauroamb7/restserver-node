const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT

        //paths de las rutas
        this.usersPath = '/api/user'

        //Middlewares
        this.middlewares()

        //Rutas 
        this.routes()
    }

    middlewares() {
        //CORS
        this.app.use(cors())

        //Lectura y paseo del body
        this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }
}

module.exports = Server;