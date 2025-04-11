import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from 'config'


export const auth = (req: Request, res: Response, next: NextFunction) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const authenticationToken = req.headers['authorization']

        if (authenticationToken !== undefined) {
            const isTokenValid = jwt.verify(
                authenticationToken.replace('Bearer ', ''),
                config.get('jwtSecret')
            )

            if (isTokenValid) {
                // moving to the next middleware
                return next()
            }
        }

        // if the authorization token is invalid or missing returning a 401 error
        res.status(401).json({ messages: ['No authorization'], resultCode: 1 })

    } catch (e) {
        res.status(401).json({ messages: ['No authorization'], resultCode: 1 })
    }
}
