import { errors } from 'celebrate'
import { Application, json, urlencoded } from 'express'

import apiRoutes from '@hn/apis/routes'
import env from '@hn/configs/env'
import errorHandler from '@hn/helpers/errorHandler'
import healthcheck from '@hn/helpers/healthcheck'
import apiV2Route from '@hn/v2/routes'

export default async ({ app }: { app: Application }) => {
  // load middlewares
  app.use(json())
  app.use(urlencoded({ extended: true }))

  // health check
  app.get('/', healthcheck)

  // load routes
  app.use(env.apiPrefix, apiRoutes)
  app.use(`${env.apiPrefix}/v2`, apiV2Route)

  // celebrate error handler
  app.use(errors())

  // load error handler
  app.use(errorHandler)
}
