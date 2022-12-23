import { Response } from 'express'

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

export enum CommonMessage {
  OK = 'OK',
  CREATED = 'CREATED',
  BAD_REQUEST = 'BAD_REQUEST',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR'
}

export class HttpError extends Error {
  statusCode: HttpStatus

  constructor(message: string, statusCode: HttpStatus) {
    super(message)
    this.statusCode = statusCode
  }
}

export const success = <T>(res: Response, data?: T) => {
  return res.status(HttpStatus.OK).json(data)
}

export const badRequest = (message: string = CommonMessage.BAD_REQUEST) => {
  throw new HttpError(message, HttpStatus.BAD_REQUEST)
}

export const unauthorized = (message: string = CommonMessage.UNAUTHORIZED) => {
  throw new HttpError(message, HttpStatus.UNAUTHORIZED)
}

export const forbidden = (message: string = CommonMessage.FORBIDDEN) => {
  throw new HttpError(message, HttpStatus.UNAUTHORIZED)
}

export const notFound = (message: string = CommonMessage.NOT_FOUND) => {
  throw new HttpError(message, HttpStatus.NOT_FOUND)
}
