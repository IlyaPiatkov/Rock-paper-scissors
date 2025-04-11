import React from "react"
import styled, { keyframes } from "styled-components"

import { Icon } from "../icon"

const stagger = keyframes`
  0% {
    transform: rotate(0);
  }
  10% {
    transform: rotate(2deg);
  }
  20% {
    transform: rotate(-2deg);
  }
  30% {
    transform: rotate(1deg);
  }
  40% {
    transform: rotate(-1deg);
  }
  50% {
    transform: rotate(0.5deg);
  }
  50% {
    transform: rotate(-0.5deg);
  }
  60% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #000;
`

const Container = styled.div`
  width: 70%;
  max-width: 30rem;

  g:nth-child(1) {
    animation: ${stagger} 3s linear 0.1s infinite;
  }

  g:nth-child(2) {
    animation: ${stagger} 3s linear 0.2s infinite;
    transform-origin: 50% 150%;
  }

  g:nth-child(3) {
    animation: ${stagger} 3s linear infinite;
    transform-origin: 100% 50%;
  }
`

export const Preloader = () => {
  return (
    <Overlay>
      <Container>
        <Icon name="RPS" />
      </Container>
    </Overlay>
  )
}
