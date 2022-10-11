import express from 'express'
import * as kodersUsesCases from '../useCases/koders.use.js'

const router = express.Router() // Generar router
// La comunicación va de fuera hacia dentro
// Endpoint -> Casos de uso -> Modelos

router.get('/', async (request, response, next) => {
    try {
        const allKoders = await kodersUsesCases.getAll()

        response.json({
            success: true,
            data: {
                koders: allKoders
            }
        })
    } catch (error) {
        // Reemplazar por el Middleware del handleErrors, utilizando antes 'next'
        response.status(400)
        response.json({
            sucess: false,
            message: error.message
        })
    }
})


// GET

router.get('/:idKoder', async (request, response) => {
    try {
        const { idKoder } = request.params
        console.log(idKoder)
        const getKoder = await kodersUsesCases.getById(idKoder)

        response.json({
            success: true,
            data: {
                koders: getKoder
            }
        })
    } catch (error) {
        // Reemplazar por el Middleware del handleErrors
        response.status(400)
        response.json({
            sucess: false,
            message: error.message
        })
    }
})


export default router

/*
15mins - Time to practice:

GET     /koders/:id -> Annie
PATCH   /koders/:id -> Héctor
DELETE  /koders/:id -> Fer
POST    /koders -> Cin

*/