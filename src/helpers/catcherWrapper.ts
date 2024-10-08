/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'

type AsyncController = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>

export default (controller: AsyncController) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    return controller(req, res, next).catch(next)
  }
}
