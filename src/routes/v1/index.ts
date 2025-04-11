import { Express, Response, Request } from 'express'

import {
    registration,
    login,
    refresh,
    logout
} from './access'


const ROOT_URL = '/api/v1' as string

export const routers = (app: Express) => {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))

    app.use(ROOT_URL, registration)

    app.use(ROOT_URL, login)

    app.use(ROOT_URL, refresh)

    app.use(ROOT_URL, logout)
}