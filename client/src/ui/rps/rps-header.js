import React from "react"
import { useTranslation } from "react-i18next"
import styled, { css, keyframes } from "styled-components"

import { Icon } from "../icon"

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px 10px;
`

const Block = styled.div`
  position: relative;
  display: grid;
  grid-gap: 20px 10px;

  ${p =>
    p.left &&
    css`
      grid-template-areas:
        "name name"
        "counter avatar"
        "choice choice";
    `}
  ${p =>
    p.right &&
    css`
      grid-template-areas:
        "name name"
        "avatar counter"
        "choice choice";
    `}
`

const Avatar = styled.div`
  grid-area: avatar;
`

const Counter = styled.div`
  grid-area: counter;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
`

const Choice = styled.div`
  grid-area: choice;
  text-align: center;
`

const Name = styled.span`
  grid-area: name;
  font-size: 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`

const Winner = styled.span`
  grid-area: 2 / 1 / 3 / 3;
  font-size: 2.5rem;
  text-align: center;
`

const roundScale = keyframes`
  from {
    font-size: 0rem;
    opacity: 1;
  }
  to {
    font-size: 10rem;
    opacity: 0;
  }
`

const Round = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  max-width: 32rem;
  transform: translate(-50%, -50%);
  text-align: center;
  animation: ${roundScale} 2s ease forwards;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 1rem;
    height: 100%;
    background-color: #000;
  }

  &::after {
    transform: rotate(45deg);
  }

  &::before {
    transform: rotate(-45deg);
  }
`

export const RPSHeader = ({ players, winnerText, round }) => {
  const [t] = useTranslation(["common"])

  return (
    <Header>
      {players.map((item, key) => {
        let positionBlock = key === 0 || key === 2 ? true : false
        let iconName = item.userId !== `bot${key - 1}` ? "user" : "bot"
        let disabled = !item.isWinPrevRound && round !== 1 ? true : false

        return (
          <Block right={positionBlock} left={!positionBlock} key={key}>
            <Name>{item.userName ? item.userName : item.userId}</Name>
            <Avatar>
              <Icon name={iconName} />
            </Avatar>
            <Counter>{item.score}</Counter>
            {item.currentChoice && <Choice>{item.currentChoice}</Choice>}
            {disabled && <Overlay />}
          </Block>
        )
      })}
      <Winner>{winnerText}</Winner>
      <Round>
        {t("common:round")} <br />
        {round}
      </Round>
    </Header>
  )
}
