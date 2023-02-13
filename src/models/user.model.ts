import { Schema, model } from 'mongoose'

import { CollectionNames } from '@hn/constants'

const userSchema = new Schema<Types.IUser>(
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

export default model<Types.IUser>(CollectionNames.USER, userSchema)
