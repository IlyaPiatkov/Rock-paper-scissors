import { reducer as formReducer } from "redux-form"
import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  Action
} from "@reduxjs/toolkit"

import { playersReducer, gameReducer } from "./reduser/rps-reduser"
import { profileReducer } from "./reduser/profile-reduser"
import { authReducer } from "./reduser/auth-reduser"
import { optionsReducer } from "./reduser/option-reduser"
import { searchReducer } from "./reduser/search-reduser"
import { createReducer } from "./reduser/create-reduser"

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true
})

export type RootDispatchType = typeof store.dispatch
export type RootStateType = ReturnType<typeof store.getState>
export type RootThunkType<ReturnType = Promise<void>> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  Action<string>
>

export const store = configureStore({
  reducer: {
    game: gameReducer,
    search: searchReducer,
    create: createReducer,
    players: playersReducer,
    profile: profileReducer,
    options: optionsReducer,
    auth: authReducer,
    form: formReducer
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production"
})

// @ts-ignore
window.store = store
