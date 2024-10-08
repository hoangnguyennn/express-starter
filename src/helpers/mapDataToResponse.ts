import { User } from '@hn/types/model'
import { UserResponse } from '@hn/types/response'

export const mapUserToResponse = (user: User): UserResponse => {
  return {
    id: user._id.toString(),
    username: user.username,
    fullName: user.fullName,
    createdAt: user.createdAt.getTime(),
    updatedAt: user.updatedAt.getTime(),
    deletedAt: user.deletedAt ? user.deletedAt.getTime() : null
  }
}
