import { IUserResponse } from '~/interfaces'
import { IUser } from '~/interfaces/IDocument'

export const mapUserToResponse = (user: IUser): IUserResponse => {
  return {
    id: user._id.toString(),
    username: user.username,
    fullName: user.fullName,
    createdAt: user.createdAt.getTime(),
    updatedAt: user.updatedAt.getTime(),
    deletedAt: user.deletedAt ? user.deletedAt.getTime() : null
  }
}
