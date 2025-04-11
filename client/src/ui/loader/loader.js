import React from 'react';
import styled, { keyframes } from 'styled-components';


const flip1 = keyframes`
  0%, 15% {
    transform: rotate(0);
  }
  35%, 100% {
    transform: rotate(-180deg);
  }
`

const squidge1 = keyframes`
  5% {
    transform-origin: center bottom;
    transform: scalex(1) scaley(1);
  }
  15% {
    transform-origin: center bottom;
    transform: scalex(1.3) scaley(0.7);
  }
  25%, 20% {
    transform-origin: center bottom;
    transform: scalex(0.8) scaley(1.4);
  }
  55%, 100% {
    transform-origin: center top;
    transform: scalex(1) scaley(1);
  }
  40% {
    transform-origin: center top;
    transform: scalex(1.3) scaley(0.7);
  }
`

const flip2 = keyframes`
  0%, 30% {
    transform: rotate(0);
  }
  50%, 100% {
    transform: rotate(-180deg);
  }
`

const squidge2 = keyframes`
  20% {
    transform-origin: center bottom;
    transform: scalex(1) scaley(1);
  }
  30% {
    transform-origin: center bottom;
    transform: scalex(1.3) scaley(0.7);
  }
  40%, 35% {
    transform-origin: center bottom;
    transform: scalex(0.8) scaley(1.4);
  }
  70%, 100% {
    transform-origin: center top;
    transform: scalex(1) scaley(1);
  }
  55% {
    transform-origin: center top;
    transform: scalex(1.3) scaley(0.7);
  }
`

const flip3 = keyframes`
  0%, 45% {
    transform: rotate(0);
  }
  65%, 100% {
    transform: rotate(-180deg);
  }
`

const squidge3 = keyframes`
  35% {
    transform-origin: center bottom;
    transform: scalex(1) scaley(1);
  }
  45% {
    transform-origin: center bottom;
    transform: scalex(1.3) scaley(0.7);
  }
  55%, 50% {
    transform-origin: center bottom;
    transform: scalex(0.8) scaley(1.4);
  }
  85%, 100% {
    transform-origin: center top;
    transform: scalex(1) scaley(1);
  }
  70% {
    transform-origin: center top;
    transform: scalex(1.3) scaley(0.7);
  }
`

const flip4 = keyframes`
  0%, 60% {
    transform: rotate(0);
  }
  80%, 100% {
    transform: rotate(-180deg);
  }
`

const squidge4 = keyframes`
  50% {
    transform-origin: center bottom;
    transform: scalex(1) scaley(1);
  }
  60% {
    transform-origin: center bottom;
    transform: scalex(1.3) scaley(0.7);
  }
  70%, 65% {
    transform-origin: center bottom;
    transform: scalex(0.8) scaley(1.4);
  }
  100%, 100% {
    transform-origin: center top;
    transform: scalex(1) scaley(1);
  }
  85% {
    transform-origin: center top;
    transform: scalex(1.3) scaley(0.7);
  }

`

const slide = keyframes`
  0% {
    transform: translatex(0vw);
  }
  100% {
    transform: translatex(calc(var(--container-size) - (var(--box-size) * 1.25)));
  }
`

const colorChange = keyframes`
  0% { 
    background-color: var(--color-start);
  }
  100% { 
    background-color: var(--color-end);
  }
`

const Container = styled.div`
  --color-start: #000;
  --color-item-2: rgb(21, 21, 21);
  --color-item-3: rgb(41, 41, 41);
  --color-item-4: rgb(61, 61, 61);
  --color-end: rgb(81, 81, 81);
  --duration: 1.5s;
  --container-size: 250px;
  --box-size: 33px;
  --box-border-radius: 15%;

  width: var(--container-size);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const Item = styled.div`
  width: var(--box-size);
  height: var(--box-size);
  position: relative;
  display: block;
  transform-origin: -50% center;
  border-radius: var(--box-border-radius);

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: var(--box-border-radius);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
  }

  &:nth-child(1) {
    animation: ${slide} var(--duration) ease-in-out infinite alternate;

    &:after{
      animation: ${colorChange} var(--duration) ease-in-out infinite alternate;
    }
  }

  &:nth-child(2) {
    animation: ${flip1} var(--duration) ease-in-out infinite alternate;
  
    &:after {
      background-color: var(--color-item-2);
      animation: ${squidge1} var(--duration) ease-in-out infinite alternate;
    }
  }

  &:nth-child(3) {
    animation: ${flip2} var(--duration) ease-in-out infinite alternate;

    &:after {
      background-color: var(--color-item-3);
      animation: ${squidge2} var(--duration) ease-in-out infinite alternate;
    }
  }

  &:nth-child(4) {
    animation: ${flip3} var(--duration) ease-in-out infinite alternate;

    &:after {
      background-color: var(--color-item-4);
      animation: ${squidge3} var(--duration) ease-in-out infinite alternate;
    }
  }

  &:nth-child(5) {
    animation: ${flip4} var(--duration) ease-in-out infinite alternate;

    &:after {
      background-color: var(--color-end);
      animation: ${squidge4} var(--duration) ease-in-out infinite alternate;
    }
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
  background-color: rgba(0, 0, 0, 0.5);
`

export const Loader = () => {
  return (
    <Overlay>
      <Container>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </Container>
    </Overlay>
  )
}