import {Koder} from '../models/koders.model.js'
import {User} from '../models/user.model.js'
import bcrypt from '../libs/bcrypt.js'
import jwt from '../libs/jwt.js'
import {StatusHttp} from '../libs/statusHttp.js'

async function login(email, password) {
    const koderFound = await Koder.findOne({email})

    // if(!koderFound) throw new Error('Credenciales inválidas')
    if(!koderFound) throw new StatusHttp('Credenciales inválidas', 400)

    const isValidPassword = await bcrypt.compare(password, koderFound.password) // Es una promesa, 'await'

    // if(!isValidPassword) throw new Error('Credenciales inválidas')
    if(!isValidPassword) throw new StatusHttp('Credenciales inválidas', 400)

    return jwt.sign({id: koderFound._id}) // Aquí debe regresar un TOKEN
}

async function loginUser(email, password) {
    const userFound = await User.findOne({email});

    // if(!userFound) throw new Error('Credenciales inválidas');
    if(!userFound) throw new StatusHttp('Credenciales inválidas', 400);

    const isValidPassword = await bcrypt.compare(password, userFound.password) // Es una promesa, 'await'

    // if(!isValidPassword) throw new Error('Credenciales inválidas')
    if(!isValidPassword) throw new StatusHttp('Credenciales inválidas', 400)

    // Pasando el payload
    return jwt.sign({id: userFound._id, role: userFound.role}) // Aquí debe regresar un TOKEN
}

export {
    login,
    loginUser
}
