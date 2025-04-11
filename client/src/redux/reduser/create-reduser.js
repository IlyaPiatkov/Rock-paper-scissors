import { createSlice } from "@reduxjs/toolkit"
import { stopSubmit } from "redux-form"

import { roomAPI } from "../../api/api"

const createGame = createSlice({
  name: "createGame",
  initialState: {
    createRoomId: null,
    createRoomCapacity: "3",
    isCreatedRoom: false
  },
  reducers: {
    setInfoCreateRoom: (state, action) => ({
      ...state,
      createRoomId: action.payload.createRoomId,
      createRoomCapacity: action.payload.createRoomCapacity.toString(),
      isCreatedRoom: action.payload.isCreatedRoom
    }),
    errorServer: (state, action) => ({
      ...state,
      isErrorServer: action.payload
    })
  }
})

const { actions, reducer } = createGame

export const { setInfoCreateRoom, errorServer } = actions
export const createReducer = reducer

// Thunk
export const createRoom = createRoomCapacity => async (dispatch, getState) => {
  try {
    const authToken = getState().auth.access
    const response = await roomAPI.create(createRoomCapacity, authToken)

    if (response.data.resultCode === 0) {
      const userId = getState().profile.userId
      const { id, capacity } = response.data.data
      dispatch(
        setInfoCreateRoom({
          createRoomId: id,
          createRoomCapacity: capacity,
          isCreatedRoom: true
        })
      )
      let socket = new WebSocket(`ws://tornadogame.club:8080/${id}/${userId}`)

      // Соединение открыто
      // socket.addEventListener('open', function (event) {
      //   socket.send('Hello Server!');
      // });
      // Наблюдает за сообщениями
      socket.addEventListener("message", function(event) {
        console.log("Message from server ", JSON.parse(event.data))
      })

      const testButton = document.querySelector("#testId")

      testButton.addEventListener("click", () => {
        console.log("click")

        socket.send("Hello Server!")
      })
    } else {
      let messages =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Common errors"
      dispatch(stopSubmit("createRoom", { _error: messages }))
    }
  } catch (error) {
    dispatch(errorServer(true))
    console.warn(error)
  }
}
