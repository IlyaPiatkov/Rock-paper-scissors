import styled, { css } from "styled-components"

export const buttonStyle = css`
  display: block;
  padding: ${p => (p.small ? "0.5rem 0.9rem" : "0.9rem")};
  width: 100%;
  font-size: 1.4rem;
  text-decoration: none;
  text-align: center;
  transition: all 0.25s ease;

  ${p =>
    p.default &&
    css`
      border: 0.1rem solid #000;
      background-color: #000;
      color: #fff;

      &:hover {
        background-color: #fff;
        color: #000;
      }
    `}

  ${p =>
    p.primary &&
    css`
      border: 0.1rem solid #fff;
      background-color: #000;
      color: #fff;

      &:hover {
        background-color: #fff;
        color: #000;
      }
    `}

  ${p =>
    p.ghost &&
    css`
      background-color: transparent;
      border: 0.1rem solid transparent;
    `}
`

export const ButtonDefault = styled.button`
  ${buttonStyle}

  border: 0.1rem solid #000;
  background-color: #000;
  color: #fff;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`

export const ButtonPrimary = styled.button`
  ${buttonStyle}

  border: 0.1rem solid #fff;
  background-color: #000;
  color: #fff;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`
