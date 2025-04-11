import styled from "styled-components"

import { mixinTypography } from "../typography"
import { TypographyType } from "../typography/typography" // TODO fix type import

type PropsType = {
  bold?: boolean
}

export const Title = styled.h1<TypographyType & PropsType>`
  font-weight: ${p => (p.bold ? 700 : 400)};

  ${mixinTypography}
`
