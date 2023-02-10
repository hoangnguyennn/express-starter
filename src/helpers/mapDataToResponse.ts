export const mapUserToResponse = (user: Types.IUser): Types.IUserResponse => {
  return {
    id: user._id.toString(),
    username: user.username,
    fullName: user.fullName,
    createdAt: user.createdAt.getTime(),
    updatedAt: user.updatedAt.getTime(),
    deletedAt: user.deletedAt ? user.deletedAt.getTime() : null
  }
}
