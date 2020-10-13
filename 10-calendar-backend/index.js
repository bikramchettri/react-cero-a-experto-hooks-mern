const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors')


//crear el servidor de express 
const app = express();

//Base de datos
dbConnection();

//Cors
app.use(cors())

//directorio público
app.use( express.static('public') )

//lectura y parseo del body
app.use( express.json() );

//rutas
app.use('/api/auth', require('./routes/auth') ); //auth
    //Crud eventos


//escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo el puerto ${process.env.PORT}`)
});

