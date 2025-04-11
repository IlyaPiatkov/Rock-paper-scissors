import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { profileAPI, ResultCodeEnum } from "../../api/api"
import { RootThunkType } from "../store"

type InitialStateType = {
  userId: number
  userName: string | null
  userLastName?: string | null // недоробленний функционал
  gender?: string | null // недоробленний функционал
}

export const initialState: InitialStateType = {
  userId: 0,
  userName: null,
  userLastName: null,
  gender: null
}

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<InitialStateType>) => ({
      ...state,
      userId: action.payload.userId,
      userName: action.payload.userName,
      userLastName: action.payload.userLastName,
      gender: action.payload.gender
    })
  }
})

const { actions, reducer } = profile

export const { setProfileData } = actions
export const profileReducer = reducer

// Thunk

export const sendProfileData = (userData: any): RootThunkType => async (
  dispatch,
  getState
) => {
  try {
    const authToken = getState().auth.access
    const data = await profileAPI.setUser(authToken, userData)

    if (data.resultCode === ResultCodeEnum.Success) {
      const { userId, username } = data.data // TODO rename filed to userName

      dispatch(setProfileData({ userId, userName: username })) // TODO rename filed to userName
    } else {
      console.warn("error sendProfileData")
    }
  } catch (error) {
    console.warn(error)
  }
}

export const getProfileData = (): RootThunkType => async (
  dispatch,
  getState
) => {
  try {
    const authToken = getState().auth.access
    const data = await profileAPI.getUser(authToken)

    if (data.resultCode === ResultCodeEnum.Success) {
      const { userId, username } = data.data // TODO rename filed to userName

      dispatch(setProfileData({ userId, userName: username })) // TODO rename filed to userName
    } else {
      console.warn("error getProfileData")
    }
  } catch (error) {
    console.warn(error)
  }
}
