import { Router } from 'express'
import authRoute from './auth.route'
import uploadRoute from './upload.route'
import userRoute from './user.route'

const router = Router()
router.use('/auth', authRoute)
router.use('/upload', uploadRoute)
router.use('/users', userRoute)

export default router
