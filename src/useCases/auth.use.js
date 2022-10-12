import {Koder} from '../models/koders.model.js'
import bcrypt from '../libs/bcrypt.js'

async function login(email, password) {
    const koderFound = await Koder.findOne({email});

    if(!koderFound) throw new Error('Credenciales inválidas');

    const isValidPassword = bcrypt.compare(password, koderFound.password) // Es una promesa, 'await'

    if(!isValidPassword) throw new Erro('Credenciales inválidas')

    return jwt.sign({id: koderFound._id}) // Aquí debe regresar un TOKEN
}

export{login}

