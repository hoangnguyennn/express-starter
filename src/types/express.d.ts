declare namespace Express {
  import { TokenPayload } from '.'
  export interface Request {
    user?: TokenPayload
  }
}
