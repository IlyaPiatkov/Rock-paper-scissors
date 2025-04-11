import { Router } from 'express'
import { validationResult } from 'express-validator'
import { v4 as uuidv4 } from 'uuid'
import jwt from 'jsonwebtoken'
import config from 'config'

import { auth } from '../../../middleware'
import { token } from '../../../models'
import { RefreshRequest, RefreshResponse } from './types'


const JWT_SECRET_KEY = config.get('jwtSecret') as string

const refresh = Router()

refresh.post('/relogin', auth, async (req: RefreshRequest, res: RefreshResponse) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            messages: ['Invalid data'],
            resultCode: 1
        })
    }

    const { refreshToken, userId } = req.body

    const checkRefreshToken = await token.findOneAndDelete({ refreshToken })

    if (!checkRefreshToken) {
        return res.status(400).json({
            messages: ['Refresh token invalid'],
            resultCode: 1
        })
    }

    const accessToken = jwt.sign({ userId }, JWT_SECRET_KEY, { expiresIn: '1h' })
    const newRefreshToken = uuidv4()

    const result = new token({ refreshToken: newRefreshToken })

    await result.save()

    res.json({
        data: {
            access: accessToken,
            refresh: refreshToken,
            tokenExpire: Date.now() + 1000 * 60 * 60,
        },
        messages: [],
        resultCode: 0
    })
})

export { refresh }