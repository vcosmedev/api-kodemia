import {Koder} from '../models/koders.model.js'

function  getAll() {
    return Koder.find({}) // Regresa la promsea
}

// Diferencia entre export y export default

function getById(idKoder) {

    return Koder.findById(idKoder)
}

export {
    getById,
    getAll
}


