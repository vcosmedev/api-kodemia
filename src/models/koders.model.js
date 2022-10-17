import mongoose from 'mongoose'

// Schema de Koders
const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    gender: {
        type: String,
        required: true,
        enum: ['h', 'm'] // Qué valores son válidos para este campo -> Este campo solo puede recibir estos dos valores
    },
    isGraduate: {
        type: Boolean,
        default: false // Tener un valor por defecto
    },
    email: {
        type: String,
        required: true,
        tirm: true,
        match: /.*@.*\..*/
    },
    password: {
        type: String,
        required: true
    }
})


// Regex -> Permite trabajar con patrones de búsquedas sobre texto
// match: -> Forma en la que se registra una regex en un Schema -> match: /regex/

// Crear el modelo
// export const Koder = mongoose.model('nombre colección a la que se hace referencia', Schema)
export const Koder = mongoose.model('koders', koderSchema)

// export {Koder} /* Export -> También se puede exportar en la constante anterior añadiendo 'export' */