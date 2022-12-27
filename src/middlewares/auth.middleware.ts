import { NextFunction, Request, Response } from 'express'
import { forbidden, unauthorized } from '~/helpers/commonResponse'
import tokenUtil from '~/utils/token.util'

export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearerToken = req.headers.authorization

  if (!bearerToken) {
    return unauthorized()
  }

  const token = String(bearerToken).split('Bearer ')[1]

  if (!token) {
    return unauthorized()
  }

  const decoded = tokenUtil.decodeToken(token)

  if (!decoded) {
    return forbidden()
  }

  req.user = decoded
  return next()
}
