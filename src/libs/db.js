/*
Generar una función que nos permita conectarnos a la BD
*/

import mongoose from 'mongoose'

// Importar todas las variables de entorno

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env

const URL = 

function connect() {
    return mongoose.connect(URL) // Regresa una promesa
}

export default connect