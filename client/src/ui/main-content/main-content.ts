import styled, { css } from "styled-components"

export const MainContainer = styled.main`
  margin: 0 auto;
  padding: 50px 10px;
  max-width: 500px;
  min-height: 100vh;
`

export const MainContent = styled.div`
  > :nth-child(n + 2) {
    margin-top: 2rem;
  }
`

export const MainWrap = styled.div<{ isOpenMenu: boolean }>`
  position: relative;
  z-index: 5;
  background-color: #fff;
  ${p =>
    p.isOpenMenu &&
    css`
      transform: translateX(-65%) scale(0.9);
    `};
  transition: all 0.5s;
`
