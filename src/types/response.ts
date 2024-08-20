import { Nullable } from './utils'

export interface BaseDocumentResponse {
  createdAt: number
  updatedAt: number
  deletedAt: Nullable<number>
}

export interface UserResponse extends BaseDocumentResponse {
  id: string
  username: string
  fullName: string
}
