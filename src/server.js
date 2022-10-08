/*
server: 
    Este archivo guardará la definición del server:
        - Qué middlewares se van a usar - montar middlewares
        - Montar routers
*/

// Definición de nuestro servidor (aquí no se levanta, solo se establecen la configuración)

import express from 'express'

const server = express()

// Middlewares
server.use(express.json())

// Routers


// Middleware para manejar errores - Middleware handleErros


// Exportar este servidor para que pueda ser usado en el index.js
export {server}