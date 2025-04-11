import { stopSubmit } from "redux-form"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import Cookies from "browser-cookies"

import { RootThunkType } from "../store"
import { authAPI, ResultCodeEnum } from "../../api/api"
import {
  setProfileData,
  getProfileData,
  initialState as profileInitialState
} from "./profile-reduser"

const TOKENS = "token-access"

type TokensType = {
  access: string | null
  refresh: string | null
  tokenExpire: number | null
}

type SetUserDataType = {
  userId: number | null
  email: string | null
  isAuth: boolean
} & TokensType

type ErrorServerType = {
  isErrorServer: boolean
}

type InitializationType = {
  isLoad: boolean
}

type InitialStateType = SetUserDataType &
  TokensType &
  ErrorServerType &
  InitializationType

const initialState: InitialStateType = {
  userId: null,
  email: null,
  access: null,
  refresh: null,
  tokenExpire: null,
  isAuth: false,
  isErrorServer: false,
  isLoad: false
}

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<SetUserDataType>) => ({
      ...state,
      userId: action.payload.userId,
      email: action.payload.email,
      access: action.payload.access,
      refresh: action.payload.refresh,
      tokenExpire: action.payload.tokenExpire,
      isAuth: action.payload.isAuth
    }),
    errorServer: (state, action: PayloadAction<ErrorServerType>) => ({
      ...state,
      isErrorServer: action.payload.isErrorServer
    }),
    initialization: (state, action: PayloadAction<InitializationType>) => ({
      ...state,
      isLoad: action.payload.isLoad
    })
  }
})

const { actions, reducer } = auth

export const { setUserData, errorServer, initialization } = actions
export const authReducer = reducer

// Thunk
export const login = (
  email: string,
  password: string,
  rememberMe: boolean
): RootThunkType => async dispatch => {
  try {
    const data = await authAPI.login(email, password)

    if (data.resultCode === ResultCodeEnum.Success) {
      const { userId, access, refresh, tokenExpire } = data.data
      dispatch(
        setUserData({
          userId,
          email,
          access,
          refresh,
          tokenExpire,
          isAuth: true
        })
      )
      dispatch(getProfileData())

      if (rememberMe) {
        Cookies.set(TOKENS, JSON.stringify({ access, refresh, tokenExpire }), {
          expires: 1
          // httponly: true
        })
      } else {
        Cookies.erase(TOKENS)
      }
    }
    if (data.resultCode === ResultCodeEnum.Error) {
      let messages =
        data.messages.length > 0 ? data.messages[0] : "Common errors"
      dispatch(stopSubmit("login", { _error: messages }))
    }
  } catch (error) {
    dispatch(errorServer({ isErrorServer: true }))
    console.warn(error)
  }
}

export const logout = (): RootThunkType => async (dispatch, getState) => {
  try {
    const { access, refresh } = getState().auth

    if (!access || !refresh) {
      return
    }

    const data = await authAPI.logout(access, refresh)

    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(setUserData(initialState))
      dispatch(setProfileData(profileInitialState))

      Cookies.erase(TOKENS)
    }
  } catch (error) {
    dispatch(errorServer({ isErrorServer: true }))
    console.warn(error)
  }
}

export const relogin = (oldRefresh: string | null): RootThunkType => async (
  dispatch,
  getState
) => {
  try {
    const { userId, email } = getState().auth
    const data = await authAPI.relogin(oldRefresh, String(userId))

    if (data.resultCode === ResultCodeEnum.Success) {
      const { access, refresh, tokenExpire } = data.data
      dispatch(
        setUserData({
          userId,
          email,
          access,
          refresh,
          tokenExpire,
          isAuth: true
        })
      )

      Cookies.set(TOKENS, JSON.stringify({ access, refresh, tokenExpire }), {
        expires: 1
        // httponly: true
      })
    } else {
      console.warn("error relogin")
    }
  } catch (error) {
    dispatch(errorServer({ isErrorServer: true }))
    console.warn(error)
  }
}

export const registr = (
  email: string,
  password: string
): RootThunkType => async (dispatch, getState) => {
  try {
    const { access, refresh, tokenExpire } = getState().auth
    const data = await authAPI.registr(email, password)

    if (data.resultCode === ResultCodeEnum.Success) {
      const { userId, email } = data.data
      dispatch(
        setUserData({
          access,
          refresh,
          tokenExpire,
          userId,
          email,
          isAuth: true
        })
      )
      dispatch(
        setProfileData({
          userId,
          userName: "unknown",
          userLastName: "unknown",
          gender: "unknown"
        })
      )
    } else {
      let messages =
        data.messages.length > 0 ? data.messages[0] : "Common errors"
      dispatch(stopSubmit("registr", { _error: messages }))
    }
  } catch (error) {
    dispatch(errorServer({ isErrorServer: true }))
    console.warn(error)
  }
}

export const loadSession = (): RootThunkType => async (dispatch, getState) => {
  try {
    const tokens = Cookies.get(TOKENS) || null

    if (tokens) {
      const { userId, email } = getState().auth
      const { access, refresh, tokenExpire }: TokensType = JSON.parse(tokens)

      if (tokenExpire && tokenExpire > Date.now()) {
        dispatch(
          setUserData({
            userId,
            email,
            access,
            refresh,
            tokenExpire,
            isAuth: true
          })
        )
        dispatch(getProfileData())
      } else {
        dispatch(relogin(refresh))
      }
    }
  } catch (error) {
    console.warn(error)
  }
}
