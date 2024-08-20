import { Router } from 'express'

import { upload } from '@hn/configs/upload'
import UploadController from '@hn/controllers/upload.controller'
import catcherWrapper from '@hn/helpers/catcherWrapper'

const router = Router()

router.post(
  '/',
  upload.single('file'),
  catcherWrapper(UploadController.uploadSingle)
)

export default router
