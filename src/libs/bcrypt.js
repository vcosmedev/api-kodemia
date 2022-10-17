// Configurar valor saltRounds recibe un valor de 10 (setear este valor = 10) 
// Configurar métodos hash y script

import bcrypt from 'bcrypt'

const saltRounds = 10;

// Generar función que se llame hash
function hash(plainText) {
    return bcrypt.hash(plainText, saltRounds) // Regresa una promesa

}

export default {
    ... bcrypt, // Todo lo que contenga bcrypt
    hash // Función hash
}

// Spread operator