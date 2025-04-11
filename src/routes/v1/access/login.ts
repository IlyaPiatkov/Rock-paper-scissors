import { Router, Request } from 'express'
import { check, validationResult } from 'express-validator'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config'

import { user, token } from '../../../models'
import { LoginResponse } from './types'


const JWT_SECRET_KEY = config.get('jwtSecret') as string

const validation = [
    check('email', 'Enter a valid email').normalizeEmail().isEmail(),
    check('password', 'Enter your password').exists()
]

const login = Router()

login.post('/login', validation, async (req: Request, res: LoginResponse) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                messages: ['Incorrect data when logging into the system'],
                resultCode: 1
            })
        }

        const { email, password } = req.body

        const thisUser = await user.findOne({ email })

        if (!thisUser) {
            return res.status(400).json({ messages: ['User not found'], resultCode: 1 })
        }

        const isMatch = await bcrypt.compare(password, thisUser.password)

        if (!isMatch) {
            return res.status(400).json({
                messages: ['Invalid password, try again'],
                resultCode: 1
            })
        }

        const accessToken = jwt.sign({ userId: thisUser._id }, JWT_SECRET_KEY, { expiresIn: '1h' })
        const refreshToken = uuidv4()

        const result = new token({ refreshToken })

        await result.save()

        res.json({
            data: {
                access: accessToken,
                refresh: refreshToken,
                tokenExpire: Date.now() + 1000 * 60 * 60,
                userId: thisUser._id,
                email: thisUser.email,
            },
            messages: [],
            resultCode: 0
        })

    } catch (error) {
        res.status(500).json({
            messages: ['Something went wrong, please try again'],
            resultCode: 1
        })
    }
})

export { login }