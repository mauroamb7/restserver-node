const Rol = require('../models/rol')
const User = require('../models/usuario')

//Chequea si existe un rol valido en db
const rolValido = async(rol = '') => {

    const existeRol = await Rol.findOne({ rol })
    if (!existeRol) {
        throw new Error(`El rol ${rol} no existe en base de datos`)
    }

}

//Chequea si existe el mail en db
const existeEmail = async(email = '') => {

    const existeEmail = await User.findOne({ email }).exec()
    if (existeEmail) {
        throw new Error(`El email ${email} ya existe en base de datos`)
    }

}

//Chequea si existe el id en db
const existeId = async(id) => {
    const existeId = await User.findById(id)
    if (!existeId) {
        throw new Error(`No se encuentra el usuario en base de datos`)
    }
}

module.exports = { rolValido, existeEmail, existeId }