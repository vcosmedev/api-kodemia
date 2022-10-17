// Factory function -> Función que genera funciones

// ... validRoles -> Otra forma de aplicar spread operator
function access(... validRoles) {
    return (request, response, next) => {
        // validRoles ['admin, 'user]
        try {
            console.log('Role del usuario logueado: ', request.roleCurrent)
            if(!validRoles.includes(request.roleCurrent)) throw new Error('Not access!')
            next()
        } catch (error){
            response.status(403)
            response.json({
                success: false,
                message: error.message
            })
        }
    }
    
}

export {access}