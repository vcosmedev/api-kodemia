/*
server: 
    Este archivo guardará la definición del server:
        - Qué middlewares se van a usar - montar middlewares
        - Montar routers

Definición del servidor (aquí NO se levanta, solo se establecen la configuración)
*/

import express from 'express'
import cors from 'cors' // 
import kodersRouter from './routers/koders.router.js'
import usersRouter from './routers/user.router.js'
import authRouter from './routers/auth.router.js'
import {errorHandle} from './middlewares/errorHandle.js'
const server = express()

// Middlewares
server.use(express.json())
server.use(cors())

// Routers
server.use('/koders', kodersRouter)
server.use('auth', authRouter)
server.use('/users', usersRouter)

// Middleware para manejar errores - Middleware handleErros
server.use(errorHandle)

// Exportar este servidor para que pueda ser usado en el index.js
export {server}