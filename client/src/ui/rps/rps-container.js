import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-areas: "header" "footer";
  grid-row-gap: 3rem;
  align-content: space-between;

  // TODO del
  min-height: calc(100vh - 100px);

  > :first-child {
    grid-area: header;
  }

  > :last-child {
    grid-area: footer;
  }
`

export const RPSContainer = ({ children }) => {
  return <Container>{children}</Container>
}
