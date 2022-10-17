import express from 'express'
import * as userUseCases from '../useCases/users.use.js'

const router = express.Router()

router.post('/', async (request, response, next) => {
    try {
        const userCreated = await usersUseCases.create(request.body)
        response.json({
            success: true,
            message: '¡Usuario creado!'
        })
    } catch (error) {
        next(new StatusHttp(error.message, error.status, error.name))
    }
})