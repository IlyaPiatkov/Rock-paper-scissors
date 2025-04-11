import express, { Express } from 'express'
import config from 'config'

import { routers } from './routes'
import { log } from './logger'
import { connect } from './db'


const PORT = config.get('port') || 5000 as number
const HOST = config.get('host') || 'localhost' as string

const app = express() as Express;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, async () => {
  log.info(`App has been started on http://${HOST}:${PORT}...`)

  await connect();

  routers(app);
})
