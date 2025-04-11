import styled from 'styled-components'

export const FooterWrap = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0 1rem;
  width: 100%;
  height: 4rem;
  background-color: #000;
  z-index: 20;
`

export const FooterButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 48rem;
  height: 100%;

  > :nth-child(n+2) {
    margin-left: 1rem;
  }
`