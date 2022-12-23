import { Router } from 'express'
import authRoute from './auth.route'
import uploadRoute from './upload.route'

const router = Router()
router.use('/auth', authRoute)
router.use('/upload', uploadRoute)

export default router
