import jwt from 'jsonwebtoken'

import env from '@hn/configs/env'

const generateToken = (payload: Types.ITokenPayload) => {
  return jwt.sign(payload, env.tokenSecret, { expiresIn: env.tokenExpiresIn })
}

const decodeToken = (token: string): Types.Nullable<Types.ITokenPayload> => {
  try {
    const decoded = jwt.verify(token, env.tokenSecret) as Types.ITokenPayload
    return decoded
  } catch {
    return null
  }
}

export default { generateToken, decodeToken }
