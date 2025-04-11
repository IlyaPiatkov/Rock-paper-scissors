import { Router } from 'express'
import { validationResult } from 'express-validator'

import { auth } from '../../../middleware'
import { token } from '../../../models'
import { LogoutRequest, LogoutResponse } from './types'


const logout = Router()

logout.post('/logout', auth, async (req: LogoutRequest, res: LogoutResponse) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            messages: ['Invalid data'],
            resultCode: 1
        })
    }

    const { refreshToken } = req.body

    await token.findOneAndDelete({ refreshToken })

    res.json({
        messages: [],
        resultCode: 0
    })
})

export { logout }