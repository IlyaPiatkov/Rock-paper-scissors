import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export const withAuthRedirect = (Component) => {

  let authRedirectContainer = (props) => {
    if (props.isAuth) {
      return (
        <Redirect to="/"/>
      )
    }
    return <Component {...props}/>
  }

  return connect(mapStateToProps)(authRedirectContainer)
}
