import { celebrate } from 'celebrate'
import { Router } from 'express'
import catcherWrapper from '~/helpers/catcherWrapper'
import { GET_USER_LIST_RULES } from '~/validations/user.validate'
import UserController from '../controllers/user.controller'

const router = Router()

router.get(
  '/',
  celebrate(GET_USER_LIST_RULES),
  catcherWrapper(UserController.getList)
)

export default router
