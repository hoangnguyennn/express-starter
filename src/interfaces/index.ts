import { DataListSortDirection } from './enums'
import { IUser } from './IDocument'

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface BaseDocumentResponse {
  createdAt: number
  updatedAt: number
  deletedAt: Nullable<number>
}

export interface IDataListFilter<T = any> {
  limit?: number
  offset?: number
  sortBy?: keyof T
  sortDirection?: DataListSortDirection
}

export interface IFieldAndSortField {
  field: string
  sortField: string
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

export interface IUserFilter extends IDataListFilter<IUser> {
  username?: string
  fullName?: string
}

export interface IUserResponse extends BaseDocumentResponse {
  id: string
  username: string
  fullName: string
}

export type Nullable<T> = T | null
