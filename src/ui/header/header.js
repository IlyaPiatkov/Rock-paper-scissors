import React from 'react'
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import Hamburger from '../hamburger/hamburger'
import { openMenu } from '../../redux/reduser/main-menu-reduser'

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  height: 40px;
  background-color: #000;
  transition: background-color 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 35;
`

const Logo = styled.img`
  width: 30px;
  fill: #fff;
`

const Link = styled(NavLink)`
  display: flex;
`

const Header = (props) => {
  return (
    <Container isOpenMenu={props.isOpenMenu}>
      <Link to='/'>
        <Logo src='img/logo.svg' alt='logo site' />
      </Link>
      <Hamburger
        showMenu={props.showMenu}
        isOpenMenu={props.isOpenMenu}
        />
      </Container>
  )
}

let mapStateToProps = (state) => ({isOpenMenu: state.mainMenu.isOpenMenu})

let mapDispatchTooProps = (dispatch) => ({
  showMenu: () => {dispatch(openMenu())}
})

const HeaderContainer = connect(mapStateToProps, mapDispatchTooProps)(Header)

export default HeaderContainer;