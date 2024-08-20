import { badRequest, notFound } from '@hn/helpers/commonResponse'
import { UserModel } from '@hn/models/user.model'
import { LoginRequest, RegisterRequest } from '@hn/types/request'
import bcryptUtil from '@hn/utils/bcrypt.util'
import tokenUtil from '@hn/utils/token.util'

const login = async ({ username, password }: LoginRequest) => {
  const user = await UserModel.findOne({ username: username })

  if (!user) {
    return notFound('User not found')
  }

  const isEqual = await bcryptUtil.equal(password, user.hashedPassword)

  if (!isEqual) {
    return badRequest('Password is incorrect')
  }

  const token = tokenUtil.generateToken({ userId: user._id.toString() })
  return { token }
}

const register = async ({ username, password, fullName }: RegisterRequest) => {
  const user = await UserModel.findOne({ username })

  if (user) {
    return badRequest('User already exists')
  }

  const hashedPassword = await bcryptUtil.getHashed(password)
  const newUser = await UserModel.create({ username, hashedPassword, fullName })

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
