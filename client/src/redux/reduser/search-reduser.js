import { createSlice } from "@reduxjs/toolkit"

import { roomAPI } from "../../api/api"

const searchGame = createSlice({
  name: "searchGame",
  initialState: {
    searchRoomId: null,
    searchRoomCapacity: "3",
    rooms: [],
    numberRooms: null,
    isSearchRoom: false
  },
  reducers: {
    setSearchRoom: (state, action) => ({
      ...state,
      isSearchRoom: action.payload.isSearchRoom,
      rooms: action.payload.rooms,
      numberRooms: action.payload.numberRooms
    }),
    setInfoSearchRoom: (state, action) => ({
      ...state,
      searchRoomId: action.payload.searchRoomId
    }),
    errorServer: (state, action) => ({
      ...state,
      isErrorServer: action.payload
    }),
    resetSearchRoom: () => ({
      searchRoomId: null,
      searchRoomCapacity: "3",
      rooms: [],
      numberRooms: null,
      isSearchRoom: false
    })
  }
})

const { actions, reducer } = searchGame

export const {
  setInfoSearchRoom,
  setSearchRoom,
  errorServer,
  resetSearchRoom
} = actions
export const searchReducer = reducer

// Thunk
export const searchRoom = () => async dispatch => {
  try {
    const response = await roomAPI.search()

    if (response.data.resultCode === 0) {
      const { data } = response.data
      const rooms = Object.values(data)
      const numberRooms = rooms.length
      dispatch(setSearchRoom({ isSearchRoom: true, rooms, numberRooms }))
    } else {
      dispatch(errorServer(true))
      console.log("error search")
    }
  } catch (error) {
    dispatch(errorServer(true))
    console.warn(error)
  }
}

export const connectRoom = searchRoomId => (dispatch, getState) => {
  const userId = getState().profile.userId

  dispatch(setInfoSearchRoom({ searchRoomId }))

  let socket = new WebSocket(`ws://tornadogame.club:8080/${searchRoomId}/${userId}`)

  // Соединение открыто
  // socket.addEventListener('open', function (event) {
  //   socket.send('Hello Server!');
  // });
  // Наблюдает за сообщениями
  // socket.addEventListener('message', function (event) {
  //   console.log('Message from server ', JSON.parse(event.data));
  // });

  console.log("search socket", socket)
}
