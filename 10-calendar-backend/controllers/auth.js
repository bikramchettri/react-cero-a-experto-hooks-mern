
const {response} = require('express'); //requiero express para no perder el intellisense
const { validationResult } = require('express-validator'); //para el resultado de la validacion 

const loginUsuario = (req, res = response ) => {

    const { email, password } = req.body;

     //manejo de errores
     const errors = validationResult( req );
    
     if ( !errors.isEmpty() ) {
         return res.status(400).json({
             ok: false,
             errors: errors.mapped()
         })
     }

    res.status(200).json({
        ok: true,
        msg: 'login',
        email, password 
    });
}


const crearUsuario = (req, res = response) => {

    const { name, email, password } = req.body;

    //manejo de errores
    const errors = validationResult( req );
    
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    res.status(201).json({
        ok: true,
        msg: 'Register',
        name, email, password 
    });
}

const revalidarToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew token'
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}