import { Document } from 'mongoose'

export interface BaseDocument extends Document {
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}

export interface User extends BaseDocument {
  username: string
  fullName: string
  hashedPassword: string
}
