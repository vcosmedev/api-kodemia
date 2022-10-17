import express from 'express'
import * as kodersUsesCases from '../useCases/koders.use.js'
import { auth } from '../middlewares/auth.js'
import {access} from '../middlewares/accessRole.js'
import {StatusHttp} from '../libs/statusHttp.js'


const router = express.Router() // Generar router
// La comunicación va de fuera hacia dentro
// Endpoint -> Casos de uso -> Modelos

router.use(auth)

// ROLE: ADMIN
router.post('/', access('admin'), async(request, response, next) => {
    try {
        const {body: newKoder} = request
        await kodersUsesCases.create(newKoder)

        response.json({
            success: true,
            message: 'Koder creado!'
        })
    } catch (error) {
        // TODO: reemplazar por el middleware del handleErrors ✅
        next(new StatusHttp(error.message, error.status, error.name))
    }
})


// ROLE: ADMIN Y USER
router.get('/', access('admin', 'user'), auth, async (request, response, next) => {
    try {
        const allKoders = await kodersUsesCases.getAll()
        response.json({
            success: true,
            data: {
                koders: allKoders
            }
        })
    } catch (error) {
        // TODO: reemplazar por el middleware del handleErrors, utilizando antes 'next' ✅
        // response.status(400)
        // response.json({
        //     sucess: false,
        //     message: error.message
        next(new StatusHttp(error.message, error.status, error.name))
    }
})

// ROLE: ADMIN Y USER
router.get('/:id', access('admin', 'user'), auth, async (request, response, next) => {
    try {
        const {id} = request.params
        const koder = await kodersUsesCases.getById(id)

        response.json({
            success: true,
            data: {
                koder
            }
        })
    } catch (error) {
        // TODO: reemplazar por el middleware del handleErrors ✅
        next(error)
    }
})

// ROLE: ADMIN
router.patch('/:id', access('admin'), auth,  async (request, response, next) => {
    try {
        const {id} = request.params
        const {body} = request
        const koderUpdated = await kodersUsesCases.updateById(id,body)

        response.json({
            success: true,
            data: {
                koder: koderUpdated
            }
        })
    } catch (error) {
        // TODO: reemplazar por el middleware del handleErrors ✅
        // response.status(400)
        // response.json({
        //     success: false,
        //     message: error.message
        // })
        next(new StatusHttp(error.message, error.status, error.name))
    }
})

// ROLE: ADMIN
router.delete('/:id', access('admin'), auth,  async(request, response, next) => {
    try {
        const {id} = request.params
        await kodersUsesCases.deleteById(id)

        response.json({
            success: true,
            message: 'Koder eliminado'
        })
    } catch (error) {
        // PENDING: reemplazar por el middleware del handleErrors ✅
        next(new StatusHttp(error.message, error.status, error.name))
    }
})


export default router

// import algunRouter from 'path'
// export {router}
// import {router} from 'path'

/* 

15mins - Time to practice:

GET     /koders/:id -> Annie
PATCH   /koders/:id -> Héctor
DELETE  /koders/:id -> Fer
POST    /koders -> Cin

*/