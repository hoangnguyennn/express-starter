/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'

import { HttpError } from './commonResponse'

const isDev = process.env.NODE_ENV !== 'production'

export default (
  err: Error | HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({
      message: err.message,
      stack: isDev ? err.stack : undefined
    })
  }

  return res.status(500).json({
    message: err.message,
    stack: isDev ? err.stack : undefined
  })
}
