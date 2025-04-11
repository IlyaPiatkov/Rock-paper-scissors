import styled, { keyframes, css } from "styled-components"

export const SearchWrap = styled.div`
  > :nth-child(n + 2) {
    margin-top: 2rem;
  }
`

export const SearchMaps = styled.div`
  position: relative;
  height: 30rem;
  border: 0.1rem solid #000;
  overflow: hidden;
  background: repeating-linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2) 1px,
      transparent 1px,
      transparent 15px
    ),
    repeating-linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2) 1px,
      transparent 1px,
      transparent 15px
    );
`
const run = keyframes`
  0% {
    background-position: -200% center
  }

  50% {
    background-position: 0 center
  }

  100% {
    background-position: 200% center
  }
`

export const SearchProgress = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right,
      transparent 0,
      transparent 25%,
      rgba(0, 0, 0, 0.8) 50%,
      transparent 50%,
      transparent 100%
    ) -100% center/50% 100%;
  will-change: background;
  animation: 30s linear 0s infinite normal none running ${run};
`

const scale = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(6);
    opacity: 0;
  }
`

export const SearchCircle = styled.div`
  position: absolute;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  transform: scale(0);
  background-image: radial-gradient(
    rgba(0, 0, 0, 0.8) 0%,
    transparent 20%,
    rgba(0, 0, 0, 0.8) 40%,
    transparent 60%,
    rgba(0, 0, 0, 0.8) 80%
  );
  animation-name: ${scale};
  animation-iteration-count: infinite;

  ${p =>
    p.first &&
    css`
      top: 10%;
      left: 40%;
      animation-delay: 6s;
      animation-duration: 3s;
      animation-timing-function: ease;
    `}

  ${p =>
    p.second &&
    css`
      top: 75%;
      left: 60%;
      animation-delay: 3s;
      animation-duration: 5s;
      animation-timing-function: ease-in;
    `}

  ${p =>
    p.third &&
    css`
      top: 30%;
      left: 70%;
      animation-delay: 12s;
      animation-duration: 4s;
      animation-timing-function: ease-out;
    `}

  ${p =>
    p.fourth &&
    css`
      top: 50%;
      left: 20%;
      animation-delay: 9s;
      animation-duration: 4s;
      animation-timing-function: ease-in-out;
    `}
`

export const SearchList = styled.ul`
  list-style: none;

  > :nth-child(n + 2) {
    margin-top: 2rem;
  }
`

export const SearchItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 6.5rem 0.5rem 0.5rem;
  min-height: 3.6rem;
  border: 0.1rem solid #000;

  svg {
    margin-right: 1rem;
    width: 2.4rem;
    height: 2.4rem;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  top: -0.1rem;
  right: -0.1rem;
  bottom: -0.1rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
`
