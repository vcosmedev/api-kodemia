export function errorHandle(error, request, response, next) {
    console.log('======')
    console.log(error.name)
    console.log(error.status)
    console.log(error.message)

    if(error.name === 'Validation Error') {
        response.status(400).json({success: false, message: error.message})
        return
    }
    response.status(error.status).json({
        success: false, 
        message: error.message
    })
}

// export {errorHandle} /* -> Otra forma de exportar: añadiendo 'export' al inicio de la función */