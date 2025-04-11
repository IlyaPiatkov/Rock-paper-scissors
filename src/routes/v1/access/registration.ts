import { Router, Request, Response } from 'express'
import { check, validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'

import { user } from '../../../models'


const validation = [
    check('email', 'Invalid email address').isEmail(),
    check('password', 'Must be 5 characters or more').isLength({ min: 5 })
]

const registration = Router()

registration.post('/signup', validation, async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data'
            })
        }

        const { email, password } = req.body

        const candidate = await user.findOne({ email })

        if (candidate) {
            return res.status(400).json({
                messages: ['This user already exists'],
                resultCode: 1
            })
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const result = new user({ email, password: hashedPassword })

        await result.save()

        res.status(201).json({
            data: {
                email: result.email,
                userId: result._id
            },
            messages: ['User created'],
            resultCode: 0
        })
    } catch (error) {
        res.status(500).json({
            messages: ['Something went wrong, please try again'],
            resultCode: 1
        })
    }
})

export { registration }