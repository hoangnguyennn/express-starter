/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Object<T = any> {
  [key: string]: T
}

export type Nullable<T> = T | null
