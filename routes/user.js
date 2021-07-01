const { Router } = require('express')
const { userGet, userPost, userDelete, userPatch, userPut } = require('../controllers/userController')
const { userValidations, actualizaValidations, respErrors, deleteValidations } = require('../middlewares/validations')

const router = Router()

router.get('/', userGet)

//POST - Crear usuario
router.post('/', userValidations(), respErrors, userPost)

router.put('/:id', actualizaValidations(), respErrors, userPut)

router.delete('/:id', deleteValidations(), respErrors, userDelete)

router.patch('/', userPatch)

module.exports = router