import { errors } from 'celebrate'
import { Application, json, urlencoded } from 'express'
import apiRoutes from '~/apis/routes'
import env from '~/configs/env'
import errorHandler from '~/helpers/errorHandler'
import healthcheck from '~/helpers/healthcheck'

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
