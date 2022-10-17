import {User} from '../models/user.model.js'
import bcrypt from '../libs/bcrypt.js'
import {StatusHttp} from '../libs/statusHttp.js' // Crear carpeta StatusHttp

async function create () {
    // Modificar función 
    const {email, password} = newUser
    // find ({}) -> []
    const userFound = await User.findOne({email}) // -> {}
    // Si encuentra el user, findOne devuelve objeto con el Koder ->  {}
    // Si no encuentra el user, findOne devuelve indefinido -> undefined

    if(userFound) throw new Error('Ya existe un usuario con este email')
    
    // Encriptar password
    const encriptedPassword = await bcrypt.hash(password) // Es asíncriono, devuleve promesa, colocar 'await

    return User.create({...newUser, password: encriptedPassword})
}


