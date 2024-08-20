import env from '@hn/configs/env'
import mongoose from 'mongoose'

export default async () => {
  console.log('MongoDB is connecting...')
  mongoose.set('strictQuery', true)
  mongoose.set('debug', true)
  await mongoose.connect(env.mongoUri)
  console.log('MongoDB is connected')
}
