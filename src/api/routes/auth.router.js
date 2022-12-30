const { Router } = require('express')
const { httpRegisterUser } = require('../controllers/auth.controller')
const { validateRegisterRoute } = require('../middlewares/auth.middlewares')

const router = Router()

router.post('/register', validateRegisterRoute, httpRegisterUser)

router.post('/login')

module.exports = router
