import mongoose from 'mongoose'
import env from '~/configs/env'

export default async () => {
  console.log('MongoDB is connecting...')
  await mongoose.connect(env.mongoUri)
  console.log('MongoDB is connected')
}
