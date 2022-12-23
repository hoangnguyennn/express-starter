import { Document } from 'mongoose'

interface BaseDocument extends Document {
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}

export interface IUser extends BaseDocument {
  username: string
  hashedPassword: string
  fullName: string
}
