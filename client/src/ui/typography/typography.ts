import { css } from "styled-components"

export type TypographyType = {
  extraSmall?: boolean
  small?: boolean
  medium?: boolean
  normal?: boolean
  big?: boolean
  large?: boolean
  extraLarge?: boolean
  center?: boolean
  right?: boolean
}

export const mixinTypography = css<TypographyType>`
  ${p =>
    p.extraSmall &&
    `
    font-size: 1.2rem;
  `}

  ${p =>
    p.small &&
    `
    font-size: 1.4rem;
  `}

  ${p =>
    p.medium &&
    `
    font-size: 1.6rem;
  `}

  ${p =>
    p.normal &&
    `
    font-size: 1.8rem;
  `}

  ${p =>
    p.big &&
    `
    font-size: 2rem;
  `}

  ${p =>
    p.large &&
    `
    font-size: 2.4rem;
  `}

  ${p =>
    p.extraLarge &&
    `
    font-size: 5rem;
  `}

  ${p =>
    p.center &&
    `
    text-align: center;
  `}

  ${p =>
    p.right &&
    `
    text-align: right;
  `}
`
