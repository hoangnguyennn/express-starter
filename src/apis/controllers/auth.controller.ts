import { Request, Response } from 'express'

import { success } from '@hn/helpers/commonResponse'
import { mapUserToResponse } from '@hn/helpers/mapDataToResponse'
import AuthService from '@hn/services/auth.service'

const AuthController = {
  login: async (req: Request, res: Response) => {
    const loginRequest: Types.ILoginRequest = req.body
    const { token } = await AuthService.login(loginRequest)

    return success(res, { token })
  },
  register: async (req: Request, res: Response) => {
    const registerRequest: Types.IRegisterRequest = req.body
    const { token } = await AuthService.register(registerRequest)

    return success(res, { token })
  },
  me: async (req: Request, res: Response) => {
    const userId = req.user?.userId as string
    const user = await AuthService.me(userId)

    return success(res, { user: mapUserToResponse(user) })
  }
}

export default AuthController
