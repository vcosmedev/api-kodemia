import {Koder} from '../models/koders.model.js'
import bcrypt from '../libs/bcrypt.js'
import { StatusHttp } from '../libs/statusHttp.js'

async function create(newKoder) {
    // Modificar función 
    const {email, password} = newKoder
    // find ({}) -> []
    const KoderFound = await Koder.findOne({email}) // -> {}
    // Si encuentra el user, findOne devuelve objeto con el Koder ->  {}
    // Si no encuentra el user, findOne devuelve indefinido -> undefined

    // if(koderFound) throw new Error('Ya existe un Koder con este email')
    if(koderFound) throw new StatusHttp('Ya existe un Koder con este email', 400)
    
    // Encriptar password
    const encriptedPassword = await bcrypt.hash(password) // Es asíncriono, devuleve promesa, colocar 'await'

    return Koder.create({...newKoder, password: encriptedPassword})
}

function getAll() {
    return Koder.find({}) // Regresa la promesa
}

function getById(idKoder) {
    return Koder.findById(idKoder)
}

function updatedById(idKoder, newData) {
    return Koder.findByIdAndUpdate(idKoder, newData, {new: true}) // -> new: true****
}

function deleteById(idKoder) {
    return Koder.findOneAndDelete(idKoder)
}

export {
    create,
    getAll,
    getById,
    updatedById,
    deleteById
}