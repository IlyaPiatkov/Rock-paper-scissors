import { authAPI } from "../../api/api"
import { stopSubmit } from "redux-form"

const SET_LODIN_DATA = 'SET_LODIN_DATA'
const ERROR_SERVER = 'ERROR_SERVER'

let initialState = {
  email: null,
  isAuth: false,
  isErrorServer: false,
}

const authReduser = (state = initialState, action) => {
  switch(action.type) {
    case SET_LODIN_DATA: {
      let stateCopy = {
        ...state,
        userId: action.userId,
        isAuth: action.isAuth,
        email: action.email,
      }

      return stateCopy
    }

    case ERROR_SERVER: {
      let stateCopy = {
        ...state,
        isErrorServer: action.isErrorServer,
      }

      return stateCopy
    }

    default:
      return state
  }
}

// action
const setUserData = (userId, email, isAuth) => ({type: SET_LODIN_DATA, userId, email, isAuth})
export const errorServer = (isErrorServer) => ({type: ERROR_SERVER, isErrorServer})

// Thunk
export const login = (email, password) => {
  return (dispatch) => {
    authAPI.login(email, password)
      .then((response) => {
        if (response.data.resultCode === 0) {
          const {userId} = response.data.data
          dispatch(setUserData(userId, email, true))
        }
        if (response.data.resultCode === 1) {
          let messages = (response.data.messages.length > 0 ? response.data.messages[0] : "Common errors")
          dispatch(stopSubmit("login", {_error: messages}))
        }
      })
      .catch((error) => {
        dispatch(errorServer(true))
        console.warn(error);
      })
  }
}

export const logout = () => {
  return (dispatch) => {
    authAPI.logout()
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setUserData(null, null, false))
        }
      })
      .catch((error) => {
        dispatch(errorServer(true))
        console.warn(error);
      })
  }
}

export const registr = (email, password) => {
  return (dispatch) => {
    authAPI.registr(email, password)
      .then((response) => {
        if (response.data.resultCode === 0) {
          const {userId, email} = response.data.data
          dispatch(setUserData(userId, email, true))
        }
        else {
          let messages = (response.data.messages.length > 0 ? response.data.messages[0] : "Common errors")
          dispatch(stopSubmit("registr", {_error: messages}))
        }
      })
      .catch((error) => {
        dispatch(errorServer(true))
        console.warn(error);
      })
  }
}

export default authReduser