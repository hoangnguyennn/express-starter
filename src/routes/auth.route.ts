import { Router } from 'express'

import AuthController from '@hn/controllers/auth.controller'
import catcherWrapper from '@hn/helpers/catcherWrapper'
import { checkAuth } from '@hn/middlewares/auth.middleware'

const router = Router()

router.post('/login', catcherWrapper(AuthController.login))

router.post('/register', catcherWrapper(AuthController.register))

router.get('/me', catcherWrapper(checkAuth), catcherWrapper(AuthController.me))

export default router
