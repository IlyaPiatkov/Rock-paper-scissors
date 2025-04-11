import React from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

import { Icon } from "../icon"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
`
const Button = styled.button`
  background-color: transparent;
  border: none;
`

const IconStyle = styled(Icon)`
  pointer-events: none;
`

export const RPSButtons = ({ names, onClick }) => {
  const [t] = useTranslation(["common"])

  return (
    <Container>
      {names.map((name, key) => {
        return (
          <Button id={name} key={key} type="button" onClick={onClick}>
            <IconStyle name={name} />
            {t(`common:game.${name}`)}
          </Button>
        )
      })}
    </Container>
  )
}
