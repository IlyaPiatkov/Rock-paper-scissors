import { Request, Response } from 'express'

// import { User } from '../../../models'

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

export type ErrorResponse = {
    messages: Array<string>
    resultCode: ResultCodeEnum.Error
}

export type LoginResponse = Response<ErrorResponse | {
    data: {
        access: string
        refresh: string
        tokenExpire: number
        email: string
        userId: string
    }
    messages: Array<string>
    resultCode: ResultCodeEnum.Success
}>

export type RefreshResponse = Response<ErrorResponse | {
    data: {
        access: string
        refresh: string
        tokenExpire: number
    }
    messages: Array<string>
    resultCode: ResultCodeEnum.Success
}>

export type RefreshRequest = Request<{}, {}, { refreshToken: string, userId: string }>

export type LogoutResponse = Response<ErrorResponse | {
    messages: Array<string>
    resultCode: ResultCodeEnum.Success
}>

export type LogoutRequest = Request<{}, {}, { refreshToken: string }>