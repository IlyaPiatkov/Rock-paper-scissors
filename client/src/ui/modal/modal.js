import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
`

export const ModalClose = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  background-color: #000;

  &::after,
  &::before {
    content: "";
    position: absolute;
    left: 0.7rem;
    top: 0.2rem;
    display: block;
    width: 0.1rem;
    height: 1.1rem;
    background-color: #fff;
  }

  &::after {
    transform: rotate(45deg)
  }

  &::before {
    transform: rotate(-45deg)
  }
`

export const ModalContainer = styled.div`
  position: relative;
  max-width: 50rem;
  padding: 2rem;
  background-color: #fff;

  > :nth-child(n+2):not(${ModalClose}) {
    margin-top: 2rem;
  }
`

