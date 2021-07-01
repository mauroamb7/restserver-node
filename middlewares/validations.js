const { check, validationResult } = require('express-validator');
const { rolValido, existeEmail, existeId } = require('../helpers/db-validators');


// Validacion de campos del formulario de usuario
const userValidations = () => {
    return [
        check('nombre', 'El nombre es obligatorio').notEmpty(),
        check(
            "password",
            "Ingrese contraseña que contenga al menos 8 caracteres, 1 mayúscula, 1 minúscula, y un caracter especial. ",
        )
        .isLength({ min: 8 })
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/, "i"),
        check('email', 'El email no es valido').isEmail(),
        check('email').custom(existeEmail),

        // check('rol', 'No es un rol válido').isIn(['ADMIN_ROL', 'USER_ROL'])
        check('rol').custom(rolValido)
    ];
}

const actualizaValidations = () => {
    return [
        check('id', 'formato de id incorrecto').isMongoId(),
        check('id').custom(existeId),
        check('rol').custom(rolValido)
    ];
}

const deleteValidations = () => {
    return [
        check('id', 'formato de id incorrecto').isMongoId(),
        check('id').custom(existeId)
    ];
}

// Respuesta de las validaciones de los campos
const respErrors = (req, res, next) => {
    //Devuelve errores del middleware check()
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }

    next()
}


module.exports = { userValidations, respErrors, actualizaValidations, deleteValidations };