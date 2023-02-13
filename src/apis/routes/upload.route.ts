import { upload } from '@hn/configs/uploadConfig'
import UploadController from '@hn/controllers/upload.controller'
import catcherWrapper from '@hn/helpers/catcherWrapper'
import { Router } from 'express'

const router = Router()

router.post(
  '/',
  upload.single('file'),
  catcherWrapper(UploadController.uploadSingle)
)

export default router
