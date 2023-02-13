import { Request, Response } from 'express'

import { success } from '@hn/helpers/commonResponse'
import { mapUserToResponse } from '@hn/helpers/mapDataToResponse'
import UserService from '@hn/services/user.service'

const UserController = {
  getList: async (req: Request, res: Response) => {
    const dataListFilter: Types.IUserFilter = req.query
    const { data, total } = await UserService.getList(dataListFilter)
    return success(res, { data: data.map(mapUserToResponse), total })
  }
}

export default UserController
