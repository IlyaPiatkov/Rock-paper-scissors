import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialStateType = {
  modeGame: string
  dataGameList: {
    classic: Array<string>
    extended: Array<string>
  }
  enemies: string
}

const MODE = {
  classic: ["Rock", "Paper", "Scissors"],
  extended: ["Rock", "Paper", "Scissors", "Fire", "Water"]
}

const initialState: InitialStateType = {
  modeGame: Object.keys(MODE)[0],
  dataGameList: MODE,
  enemies: "1"
}

const optionsGame = createSlice({
  name: "optionsGame",
  initialState,
  reducers: {
    setModeGame: (state, action: PayloadAction<string>) => ({
      ...state,
      modeGame: action.payload
    }),
    setEnemies: (state, action: PayloadAction<string>) => ({
      ...state,
      enemies: action.payload
    })
  }
})

const { actions, reducer } = optionsGame

export const { setModeGame, setEnemies } = actions
export const optionsReducer = reducer

// Thunk
