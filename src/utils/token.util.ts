import env from '@hn/configs/env'
import { TokenPayload } from '@hn/types'
import { Nullable } from '@hn/types/utils'
import jwt from 'jsonwebtoken'

const generateToken = (payload: TokenPayload) => {
  return jwt.sign(payload, env.tokenSecret, { expiresIn: env.tokenExpiresIn })
}

const decodeToken = (token: string): Nullable<TokenPayload> => {
  try {
    const decoded = jwt.verify(token, env.tokenSecret) as TokenPayload
    return decoded
  } catch {
    return null
  }
}

export default { generateToken, decodeToken }
