import { Request, Response } from 'express'

import { success } from '@hn/helpers/commonResponse'

const UploadController = {
  uploadSingle: async (req: Request, res: Response) => {
    return success(res, { message: 'done' })
  }
}

export default UploadController
