import { createSelector } from "@reduxjs/toolkit"

const rootPlayersSelector = state => state.players
const rootGameSelector = state => state.game
const rootProfileSelector = state => state.profile

export const getWinnerText = createSelector(
  rootGameSelector,
  state => state.winnerText
)
export const getPlayers = createSelector(rootPlayersSelector, state =>
  Object.values(state)
)
export const getRound = createSelector(rootGameSelector, state => state.rounds)
export const getCurrentWinner = createSelector(
  rootGameSelector,
  state => state.currentWinner
)
export const getEnemyPlayers = createSelector(
  rootPlayersSelector,
  rootProfileSelector,
  (players, profile) =>
    Object.values(players).filter(player => player.userId !== profile.userId)
)
export const getCurrentPlayer = createSelector(rootProfileSelector, state => ({
  userId: state.userId,
  userName: state.userName
}))
