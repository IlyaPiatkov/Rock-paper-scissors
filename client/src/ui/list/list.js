import styled, { css } from "styled-components"
import { mixinTypography } from "../typography"

export const List = styled.ol`
  ${p =>
    p.primary &&
    css`
      list-style-type: none;
      counter-reset: list1;

      > :nth-child(n + 2) {
        margin-top: 3rem;
      }
    `}
  ${p =>
    p.secondary &&
    css`
      list-style-type: none;
      counter-reset: list2;

      > :nth-child(n + 2) {
        margin-top: 1rem;
      }
    `}
`

export const ListTitle = styled.h2`
  ${mixinTypography}
  font-weight: ${p => (p.bold ? 700 : 400)};

  ${p =>
    p.primary &&
    css`
      &::before {
        content: counter(list1) ". ";
      }
    `}
`

export const ListItem = styled.li`
  position: relative;
  ${mixinTypography}

  ${p =>
    p.primary &&
    css`
      > :nth-child(n + 2) {
        margin-top: 1rem;
      }
      &::before {
        content: "";
        counter-increment: list1;
        position: absolute;
        left: 0;
      }
    `}
  ${p =>
    p.secondary &&
    css`
      padding-left: 3.5rem;
      &::before {
        content: counter(list1) "." counter(list2);
        counter-increment: list2;
        position: absolute;
        left: 0;
      }
    `}
`
