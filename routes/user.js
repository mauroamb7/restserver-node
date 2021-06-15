const { Router } = require('express')
const { userGet, userPost, userDelete, userPatch, userPut } = require('../controllers/userController')

const router = Router()

router.get('/', userGet)
router.post('/', userPost)
router.put('/:id', userPut)
router.delete('/', userDelete)
router.patch('/', userPatch)

module.exports = router