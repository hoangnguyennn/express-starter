import { badRequest, notFound } from '@hn/helpers/commonResponse'
import User from '@hn/models/user.model'
import bcryptUtil from '@hn/utils/bcrypt.util'
import tokenUtil from '@hn/utils/token.util'

const AuthService = {
  login: async (loginRequest: Types.ILoginRequest) => {
    const user = await User.findOne({ username: loginRequest.username })

    if (!user) {
      return notFound('User not found')
    }

    if (!bcryptUtil.equal(loginRequest.password, user.hashedPassword)) {
      return badRequest('Password is incorrect')
    }

    const token = tokenUtil.generateToken({ userId: user._id.toString() })
    return { token }
  },

  register: async (registerRequest: Types.IRegisterRequest) => {
    const user = await User.findOne({ username: registerRequest.username })

    if (user) {
      return badRequest('User already exists')
    }

    const hashedPassword = await bcryptUtil.getHashed(registerRequest.password)
    const newUser = await User.create({
      username: registerRequest.username,
      hashedPassword,
      fullName: registerRequest.fullName
    })

    const token = tokenUtil.generateToken({ userId: newUser._id.toString() })
    return { token }
  },

  me: async (userId: string) => {
    const user = await User.findById(userId)

    if (!user) {
      return notFound('User not found')
    }

    return user
  }
}

export default AuthService
