import React from "react"
import "./i18n"

import GlobalStyle from "./global-style"
import { Routes } from "./pages/routers"
import { AccountLoader } from "./features"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AccountLoader>
        <Routes />
      </AccountLoader>
    </>
  )
}

export default App
