import { config } from 'dotenv'

const envFound = config()
if (envFound.error) {
  throw new Error("Couldn't find .env file")
}

export default {
  port: Number(process.env.PORT),
  apiPrefix: String(process.env.API_PREFIX),
  mongoUri: String(process.env.MONGODB_URI),
  maxOfSalt: Number(process.env.TOKEN_MAX_OF_SALT),
  tokenSecret: String(process.env.TOKEN_SECRET),
  tokenExpiresIn: String(process.env.TOKEN_EXPIRES_IN),
  mailHost: String(process.env.MAIL_HOST),
  mailPort: Number(process.env.MAIL_PORT),
  mailUser: String(process.env.MAIL_USER),
  mailPassword: String(process.env.MAIL_PASSWORD)
}
