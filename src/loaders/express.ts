import { errors } from 'celebrate'
import { Application, json, urlencoded } from 'express'

import env from '@hn/configs/env'
import errorHandler from '@hn/helpers/errorHandler'
import healthcheck from '@hn/helpers/healthcheck'
import apiRoutes from '@hn/routes'

export default async ({ app }: { app: Application }) => {
  // load middlewares
  app.use(json())
  app.use(urlencoded({ extended: true }))

  // health check
  app.get('/', healthcheck)

  // load routes
  app.use(env.apiPrefix, apiRoutes)

  // celebrate error handler
  app.use(errors())

  // load error handler
  app.use(errorHandler)
}
