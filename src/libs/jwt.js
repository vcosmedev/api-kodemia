import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()

const {JWT_SECRET} = process.env // Pasar al archivo .env

function sign(payload){
    return jwt.sign(payload, JWT_SECRET, {expire: '1d'})
}

// Función que verifica si el token es válido
function verify(token) {
    return jwt.verify(token, JWT_SECRET)
}

// Exportar

export default {
    ... jwt,
    sign,
    verify
}

