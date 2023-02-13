import { Request, Response } from 'express'

import catcherWrapper from './catcherWrapper'
import { success } from './commonResponse'

const healthcheck = async (req: Request, res: Response) => {
  const healthcheck = {
    message: 'Server is running...',
    uptime: process.uptime(),
    timestamp: Date.now()
  }

  return success(res, healthcheck)
}

export default catcherWrapper(healthcheck)
