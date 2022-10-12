import jwt from '../libs/jwt.js'

// Middleware -> function

function auth(request, response, next){
    try {
        const {authorization: token} = request.headers // HEADERS

        const isValidToken = jwt.verify(token) // Comprobar a través de la función verify si es un token válido
        console.log(isValidToken)

        if(!isValidToken) throw new Error('No autorizado D:')

        next()

    } catch (error) {
        response.status(401)
        response.json({
            success: true,
            message: 'No autorizado u.u',
            error: error.message
        })
    }
}

export {auth}