import { createSlice } from "@reduxjs/toolkit"
import * as R from "ramda"

import { generatorName, resultGame } from "../../features/rps"
import { ARRAY_NAMES } from "../../libs"

const players = createSlice({
  name: "players",
  initialState: {
    // player: { score: 0, currentChoice: null, isWinPrevRound: false },
    // bot1: { score: 0, currentChoice: null, isWinPrevRound: false }
    // bot2: { score: 0, currentChoice: null, isWinPrevRound: false },
    // bot3: { score: 0, currentChoice: null, isWinPrevRound: false }
  },
  reducers: {
    addPlayers: (state, action) =>
      action.payload.reduce(
        (acc, item) => ({
          ...acc,
          [item.userId]: {
            userId: item.userId,
            userName: item.userName,
            score: 0,
            currentChoice: null,
            isWinPrevRound: false
          }
        }),
        {}
      ),
    removePlayers: () => ({}),
    resetPlayer: state =>
      Object.keys(state).reduce(
        (acc, keyPlayer) => ({
          ...acc,
          [keyPlayer]: { score: 0, currentChoice: null }
        }),
        {}
      ),
    incrementScorePlayer: (state, action) =>
      R.over(R.lensPath([action.payload.userId, "score"]), R.inc, state),
    setChoicePlayer: (state, action) =>
      R.set(
        R.lensPath([action.payload.userId, "currentChoice"]),
        action.payload.currentChoice,
        state
      ),
    setWinnerPrevRound: (state, action) =>
      R.set(R.lensPath([action.payload.userId, "isWinPrevRound"]), true, state),
    resetWinnerPrevRound: state =>
      Object.keys(state).reduce(
        (acc, keyPlayer) => ({
          ...acc,
          [keyPlayer]: { ...state[keyPlayer], isWinPrevRound: false }
        }),
        {}
      )
  }
})

const { actions, reducer } = players

export const {
  addPlayers,
  incrementScorePlayer,
  setChoicePlayer,
  setWinnerPrevRound,
  resetWinnerPrevRound,
  removePlayers
} = actions
export const playersReducer = reducer

const game = createSlice({
  name: "currentGame",
  initialState: {
    currentWinner: null,
    rounds: 1,
    winnerText: null,
    isLoading: false
  },
  reducers: {
    resetWinners: state => R.set(R.lensProp("currentWinner"), null, state),
    setWinners: (state, action) =>
      R.set(R.lensProp("currentWinner"), action.payload.userId, state),
    setRounds: state => R.over(R.lensProp("rounds"), R.inc, state),
    resetRounds: state => R.set(R.lensProp("rounds"), 1, state),
    setWinnerText: (state, action) => ({
      ...state,
      winnerText: action.payload
    }),
    resetWinnerText: state => R.set(R.lensProp("winnerText"), null, state),
    toggleIsLoading: (state, action) => ({
      ...state,
      isLoading: action.payload
    })
  }
})

const { actions: actions1, reducer: reducer1 } = game

export const {
  setWinners,
  setRounds,
  resetRounds,
  setWinnerText,
  toggleIsLoading,
  resetWinners,
  resetWinnerText
} = actions1
export const gameReducer = reducer1

// Thunk
export const setPlayers = (enemies, currentPlayer) => {
  return dispatch => {
    let arrPlayers = [currentPlayer]

    for (let i = 0; i < enemies; i++) {
      arrPlayers.push({
        userId: `bot${i}`,
        userName: generatorName(ARRAY_NAMES)
      })
    }
    dispatch(addPlayers(arrPlayers))
  }
}

export const setResultGame = (
  choiceUser,
  ModeGameList,
  currentPlayer,
  enemyPlayers,
  currentWinner
) => {
  return dispatch => {
    // dispatch(toggleIsLoading(true))

    let choicePlayers = enemyPlayers.map(item => ({
      ...item,
      currentChoice: generatorName(ModeGameList)
    }))

    choicePlayers.push({
      ...currentPlayer,
      currentChoice: choiceUser
    })

    if (currentWinner) {
      choicePlayers = choicePlayers.filter(el =>
        currentWinner.includes(el.userId)
      )
    }

    choicePlayers.map(item => dispatch(setChoicePlayer(item)))

    const winners = resultGame(choicePlayers, ModeGameList)

    if (winners === null) {
      dispatch(setWinnerText("Draw"))
    } else if (winners.length > 1) {
      let arrWinnersName = []
      let arrWinnersId = []
      winners.forEach(item => {
        arrWinnersName.push(item.userName ? item.userName : item.userId)
        arrWinnersId.push(item.userId)
        dispatch(setWinnerPrevRound({ userId: item.userId }))
      })
      dispatch(setWinners({ userId: arrWinnersId }))
      dispatch(setWinnerText("Go to the next round: " + arrWinnersName))
      dispatch(setRounds())
    } else {
      winners.forEach(item => {
        dispatch(
          setWinnerText(
            "Winner: " + (item.userName ? item.userName : item.userId)
          )
        )
        dispatch(incrementScorePlayer({ userId: item.userId }))
      })
      dispatch(resetWinnerPrevRound())
      dispatch(resetRounds())
      dispatch(resetWinners())
    }
    // setTimeout(() => {
    //   dispatch(toggleIsLoading(false))
    // }, 1500)
  }
}

export const resetGame = () => {
  return dispatch => {
    dispatch(resetRounds())
    dispatch(resetWinners())
    dispatch(resetWinnerText())
  }
}
