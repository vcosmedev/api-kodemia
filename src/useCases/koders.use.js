import {Koder} from '../models/koders.model.js'
import bcryt from '../libs/bcrypt.js'

function  getAll() {
    return Koder.find({}) // Regresa la promsea
}

async function create(newKoder) {
    // Modificar función 
    const {email, password} = newKoder
    // find ({}) -> []
    const KoderFound = await Koder.findOne({email}) // -> {}
    // Si encuentra el user, findOne devuelve objeto con el Koder ->  {}
    // Si no encuentra el user, findOne devuelve indefinido -> undefined

    if(koderFound) throw new Erro('Ya existe un Koder con este email')
    
    // Encriptar password
    const encriptedPassword = await bcrypt.hash(password) // Es asíncriono, devuleve promesa, colocar 'await

    return Koder.create({...newKoder, password: encriptedPassword})
}


// Diferencia entre export y export default

function getById(idKoder) {

    return Koder.findById(idKoder)
}

export {
    getById,
    getAll
}


