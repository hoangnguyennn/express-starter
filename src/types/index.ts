/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataListSortDirection } from '@hn/constants'
import { User } from './model'

export interface DataListFilter<T = any> {
  limit?: number
  offset?: number
  sortBy?: keyof T
  sortDirection?: DataListSortDirection
}

export interface FieldAndSortField {
  field: string
  sortField: string
}

export interface TokenPayload {
  userId: string
}

export interface UserFilter extends DataListFilter<User> {
  username?: string
  fullName?: string
}
