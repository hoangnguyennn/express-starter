import { badRequest, notFound } from '@hn/helpers/commonResponse'
import { UserModel } from '@hn/models/user.model'
import { LoginRequest, RegisterRequest } from '@hn/types/request'
import bcryptUtil from '@hn/utils/bcrypt.util'
import tokenUtil from '@hn/utils/token.util'

const login = async (loginRequest: LoginRequest) => {
  const user = await UserModel.findOne({ username: loginRequest.username })

  if (!user) {
    return notFound('User not found')
  }

  if (!bcryptUtil.equal(loginRequest.password, user.hashedPassword)) {
    return badRequest('Password is incorrect')
  }

  const token = tokenUtil.generateToken({ userId: user._id.toString() })
  return { token }
}

const register = async (registerRequest: RegisterRequest) => {
  const user = await UserModel.findOne({ username: registerRequest.username })

  if (user) {
    return badRequest('User already exists')
  }

  const hashedPassword = await bcryptUtil.getHashed(registerRequest.password)
  const newUser = await UserModel.create({
    username: registerRequest.username,
    hashedPassword,
    fullName: registerRequest.fullName
  })

  const token = tokenUtil.generateToken({ userId: newUser._id.toString() })
  return { token }
}

const me = async (userId: string) => {
  const user = await UserModel.findById(userId)

  if (!user) {
    return notFound('User not found')
  }

  return user
}

export const AuthService = { login, register, me }
