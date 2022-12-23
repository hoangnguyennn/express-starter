export interface BaseResponse {
  createdAt: number
  updatedAt: number
  deletedAt: Nullable<number>
}

export interface ILoginRequest {
  username: string
  password: string
}

export interface IRegisterRequest {
  username: string
  password: string
  fullName: string
}

export interface ITokenPayload {
  userId: string
}

export interface IUserResponse extends BaseResponse {
  id: string
  username: string
  fullName: string
}

export type Nullable<T> = T | null
