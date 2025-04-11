import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { useTranslation } from "react-i18next"

import { CommonContentTemplate } from "../../features"
import { MainList, buttonStyle } from "../../ui"

const MainLink = styled(NavLink)`
  ${buttonStyle}
`

const Home = ({ isAuth }) => {
  const [t] = useTranslation(["common"])

  return (
    <CommonContentTemplate>
      <MainList>
        <li>
          <MainLink to="game" default>
            {t("common:mainNav.singleGame")}
          </MainLink>
        </li>
        <li>
          <MainLink to={isAuth ? "search" : "registration"} default>
            {t("common:mainNav.multiplayerGame")}
          </MainLink>
        </li>
        <li>
          <MainLink to="options" default>
            {t("common:mainNav.options")}
          </MainLink>
        </li>
        <li>
          <MainLink to="rules" default>
            {t("common:mainNav.rules")}
          </MainLink>
        </li>
        {/* {!isAuth && (
        )} */}
      </MainList>
    </CommonContentTemplate>
  )
}

let mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

// let mapDispatchToProps = (dispatch) => ({

// })

export const HomePage = connect(mapStateToProps)(Home)
