import { Request, Response } from 'express'
import { success } from '~/helpers/commonResponse'
import { mapUserToResponse } from '~/helpers/mapDataToResponse'
import { ILoginRequest, IRegisterRequest } from '~/interfaces'
import AuthService from '~/services/auth.service'

const AuthController = {
  login: async (req: Request, res: Response) => {
    const loginRequest: ILoginRequest = req.body
    const { token } = await AuthService.login(loginRequest)

    return success(res, { token })
  },
  register: async (req: Request, res: Response) => {
    const registerRequest: IRegisterRequest = req.body
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
