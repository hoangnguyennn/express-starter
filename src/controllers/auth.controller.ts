import { success } from '@hn/helpers/commonResponse'
import { mapUserToResponse } from '@hn/helpers/mapDataToResponse'
import { AuthService } from '@hn/services/auth.service'
import { LoginRequest, RegisterRequest } from '@hn/types/request'
import { Request, Response } from 'express'

const AuthController = {
  login: async (req: Request, res: Response) => {
    const loginRequest: LoginRequest = req.body
    const { token } = await AuthService.login(loginRequest)

    return success(res, { token })
  },
  register: async (req: Request, res: Response) => {
    const registerRequest: RegisterRequest = req.body
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
