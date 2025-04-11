import React from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { useTranslation } from "react-i18next"
import i18next from "i18next"
import styled, { keyframes } from "styled-components"

import { buttonStyle } from "../button"
import { logout } from "../../redux/reduser/auth-reduser"
import { languages } from "../../i18n"

const run = keyframes`
  0% {
    transform: translate(100%);
    opacity: 0;
  }
  100% {
    transform: translate(0);
    opacity: 1;
  }
`

const runBack = keyframes`
  0% {
    transform: translate(0);
    opacity: 1;
  }
  100% {
    transform: translate(100%);
    opacity: 0;
  }
`

const NavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-areas:
    "header"
    "list"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  justify-content: center;
  align-items: center;
  padding: 4rem 4rem 4rem 35%;
  height: 100%;
  width: 100%;
  text-align: center;
  background-color: #262626;
`

const List = styled.ul`
  grid-area: list;
  list-style: none;
  // animation: ${p => (p.isOpen ? run : runBack)} 0.5s;
`

const Item = styled.li`
  padding: 8px 0;
  text-align: right;
`

const Link = styled(NavLink)`
  color: #fff;
  display: inline-block;
  font-size: 18px;
`

const Overlay = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  width: 35%;
  height: 100%;
  border: none;
  background-color: transparent;
`

const Header = styled.header`
  grid-area: header;
  padding: 20px 0;
  // animation: ${p => (p.isOpen ? run : runBack)} 0.5s;
`

const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  // animation: ${p => (p.isOpen ? run : runBack)} 0.5s;
`

const ButtonJoin = styled(NavLink)`
  ${buttonStyle}

  color: #fff;
`

const ButtonLan = styled.button`
  border: 1px solid #fff;
  background: transparent;
  padding: 0.5rem 1rem;
  color: #fff;
`

const LanBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  width: 4rem;

  > :nth-child(n + 2) {
    margin-top: 1rem;
  }
`

const Menu = ({ isAuth, openMenu, handleClickMenu, logout }) => {
  const [t] = useTranslation(["common"])

  const handlerLogout = () => {
    logout()
  }

  return openMenu.isClose ? (
    <>
      <Overlay type="button" onClick={handleClickMenu} />
      <NavBar>
        <Header isOpen={openMenu.isOpen}>
          <LanBlock>
            {languages.map(item => {
              return (
                <ButtonLan
                  key={item}
                  onClick={() => {
                    i18next.changeLanguage(item)
                  }}
                >
                  {item}
                </ButtonLan>
              )
            })}
          </LanBlock>
        </Header>
        <List isOpen={openMenu.isOpen}>
          {isAuth && (
            <Item>
              <Link to="/profile">{t("common:mainMenu.profile")}</Link>
            </Item>
          )}
          <Item>
            <Link to="/Team">{t("common:mainMenu.team")}</Link>
          </Item>
          <Item>
            <Link to="/privacy-policies">
              {t("common:mainMenu.privacyPolicies")}
            </Link>
          </Item>
        </List>
        <Footer isOpen={openMenu.isOpen}>
          {isAuth ? (
            <ButtonJoin as="button" ghost onClick={handlerLogout}>
              {t("common:logout")}
            </ButtonJoin>
          ) : (
            <>
              <ButtonJoin to="/login">{t("common:login")}</ButtonJoin>
              <ButtonJoin to="/registration">
                {t("common:registration")}
              </ButtonJoin>
            </>
          )}
        </Footer>
      </NavBar>
    </>
  ) : (
    ""
  )
}

let mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logout())
  }
})

export const MainMenu = connect(mapStateToProps, mapDispatchToProps)(Menu)
