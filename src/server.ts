import env from '@hn/configs/env'
import loaders from '@hn/loaders'
import express from 'express'

const startServer = async () => {
  const app = express()
  const port = env.port

  await loaders({ app })

  app.listen(port, () => {
    console.log(`Server:  http://localhost:${port}/`)
  })
}

startServer()
