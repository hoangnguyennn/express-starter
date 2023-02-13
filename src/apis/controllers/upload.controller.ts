import { success } from '@hn/helpers/commonResponse'
import { Request, Response } from 'express'

const UploadController = {
  uploadSingle: async (req: Request, res: Response) => {
    return success(res, { message: 'done' })
  }
}

export default UploadController
