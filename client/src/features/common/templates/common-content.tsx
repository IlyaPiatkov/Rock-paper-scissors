import React, { useState } from "react"

import {
  Header,
  MainMenu,
  MainContainer,
  MainWrap,
  Hamburger
} from "../../../ui"

import { transition } from "../atom"

type PropsType = {
  children: React.ReactNode
  footer?: any
}

export const CommonContentTemplate: React.FC<PropsType> = ({ children, footer }) => {
  const [openMenu, toggleMenu] = useState({
    isOpen: false,
    isClose: false,
    idDisabled: false
  })

  const handleClickMenu = () => {
    const container = document.querySelector('body')

    if (container) {
      // @ts-ignore
      container.dataset.openMenu = !openMenu.isOpen
      transition(openMenu, toggleMenu, 500)
    }
  }

  return (
    <>
      <MainMenu 
      // @ts-ignore
      handleClickMenu={handleClickMenu} openMenu={openMenu} />
      <Hamburger handleClickMenu={handleClickMenu} openMenu={openMenu} />
      <MainWrap isOpenMenu={openMenu.isOpen}>
        <Header />
        <MainContainer>{children}</MainContainer>
        {footer && footer}
      </MainWrap>
    </>
  )
}
