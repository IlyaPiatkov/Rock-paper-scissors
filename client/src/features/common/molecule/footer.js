// import React from "react"
import { connect } from "react-redux"
// import { NavLink } from "react-router-dom"
// import { useTranslation } from "react-i18next"

const Footer = ({ isAuth }) => {
  // const [t] = useTranslation(["common"])
  return
}

let mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

// let mapDispatchToProps = (dispatch) => ({})

export const FooterContainer = connect(mapStateToProps)(Footer)
