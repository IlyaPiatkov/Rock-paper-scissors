import { createSelector } from "@reduxjs/toolkit"

import { RootStateType } from "../store"

const rootOptionsSelector = (state: RootStateType) => state.options
const rootAuthSelector = (state: RootStateType) => state.auth
const rootProfileSelector = (state: RootStateType) => state.profile

export const getModeGameList = createSelector(rootOptionsSelector, state => {
  const key = state.modeGame as keyof typeof state.dataGameList

  return state.dataGameList[key]
})

export const getModeList = createSelector(rootOptionsSelector, state =>
  Object.keys(state.dataGameList)
)

export const getModeGame = createSelector(
  rootOptionsSelector,
  state => state.modeGame
)

export const getEnemies = createSelector(
  rootOptionsSelector,
  state => state.enemies
)

export const getUserName = createSelector(
  rootProfileSelector,
  state => state.userName
)
export const getUserId = createSelector(
  rootProfileSelector,
  state => state.userId
)
export const getAuth = createSelector(rootAuthSelector, state => state.isAuth)
export const getIsLoad = createSelector(rootAuthSelector, state => state.isLoad)
