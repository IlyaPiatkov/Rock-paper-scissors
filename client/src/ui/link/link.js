import { NavLink } from "react-router-dom"
import styled from "styled-components"

import { mixinTypography } from "../typography"

export const Link = styled(NavLink)`
  ${mixinTypography}

  color: #000;
  text-decoration: none;
  box-shadow: inset 0 -0.1rem 0 0 #000;
  transition: all 0.25s ease;

  &:hover {
    color: #fff;
    box-shadow: inset 0 -3rem 0 0 #000;
  }
`
