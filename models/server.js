const express = require('express');
const cors = require('cors');
require('colors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersEndPoint = '/api/users';

        this.middlewares();
        this.routes();
    }

    routes() {
        this.app.use(this.usersEndPoint, require('../routes/user-routes'));
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${ this.port.blue }`.yellow);
        });
    }
}

module.exports = Server;
