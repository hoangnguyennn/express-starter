import { Request, Response } from 'express'
import { mapUserToResponse } from '~/helpers/mapDataToResponse'
import { ILoginRequest, IRegisterRequest } from '~/interfaces'
import AuthService from '~/services/auth.service'

const AuthController = {
  login: async (req: Request, res: Response) => {
    const loginRequest: ILoginRequest = req.body
    const { token } = await AuthService.login(loginRequest)

    return res.status(200).json({ token })
  },
  register: async (req: Request, res: Response) => {
    const registerRequest: IRegisterRequest = req.body
    const { token } = await AuthService.register(registerRequest)

    return res.status(200).json({ token })
  },
  me: async (req: Request, res: Response) => {
    const userId = req.user?.userId as string
    const user = await AuthService.me(userId)

    return res.status(200).json({ user: mapUserToResponse(user) })
  }
}

export default AuthController
