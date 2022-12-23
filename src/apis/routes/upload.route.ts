import { Router } from 'express'
import UploadController from '~/apis/controllers/upload.controller'
import { upload } from '~/configs/uploadConfig'
import catcherWrapper from '~/helpers/catcherWrapper'

const router = Router()

router.post(
  '/',
  upload.single('file'),
  catcherWrapper(UploadController.uploadSingle)
)

export default router
