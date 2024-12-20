import {Router} from 'express'
import { login, logout, register, profile, verifyToken } from '../controllers/auth.controller.js'
import { authRequired } from '../middlewares/validateToken.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { loginSchema, registerSchema } from '../schemas/auth.schema.js'
import { verifyTokenRequest } from '../../../frontend/src/api/auth.js'


const router = Router()

router.post('/register', validateSchema(registerSchema
), register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)

router.post('/verify', verifyToken)

router.get('/profile', authRequired, profile)


export default router