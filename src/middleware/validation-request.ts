import { AnySchema } from "yup"
import { NextFunction, Request, Response } from "express"

import { log } from "../logger"


export const validate = (schema: AnySchema) => async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await schema.validate({
            body: req.body,
            query: req.query,
            params: req.params,
        })
    
        return next()
    } catch (error: any) {
        log.error(error)

        return res.status(400).send(error.errors)
    }
}