import { celebrate } from 'celebrate'
import { Router } from 'express'

import UserController from '@hn/controllers/user.controller'
import catcherWrapper from '@hn/helpers/catcherWrapper'
import { GET_USER_LIST_RULES } from '@hn/validations/user.validate'

const router = Router()

router.get(
  '/',
  celebrate(GET_USER_LIST_RULES),
  catcherWrapper(UserController.getList)
)

export default router
