import { CollectionName } from '@hn/constants'
import { User } from '@hn/types/model'
import { Schema, model } from 'mongoose'

const userSchema = new Schema<User>(
  {
    username: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    fullName: { type: String, required: true, index: true },
    deletedAt: { type: Date, required: false }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
)

userSchema.index({ fullName: 'text' })

export const UserModel = model(CollectionName.USER, userSchema)
