// import React from 'react';
import styled, { keyframes, css } from 'styled-components'
import { mixinTypography } from '../typography'

export const FormContainer = styled.form`
  > :nth-child(n+2) {
    margin-top: 1rem;
  }
`

export const FormBlock = styled.div`
  position: relative;
`

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;

  ${mixinTypography}
`

export const FormLabelCheckbox = styled.label`
  display: flex;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    width: 2rem;
    height: 2rem;
    border: 0.1rem solid ${p => p.error ? '#e20012' : '#000'};
    cursor: pointer;
    transition: all .2s ease;
  }

  svg {
    width: 1.4rem;
    height: 1.4rem;
    pointer-events: none;

    path {
      fill: none;
      stroke: #000;
      stroke-width: 0.4rem;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 100;
      stroke-dashoffset: 101;
      transition: all 350ms cubic-bezier(1,0,.37,.91);
    }
  }

  &:active div {
    transform: scale(1.05);
    border-radius: 1rem;
  }

  input {
    position: absolute;
    pointer-events: none;
    opacity: 0;

    &:checked + div svg path {
      stroke-dashoffset: 0;
    }

    &:focus + div {
      transform: scale(1.03);
    }
  }

  ${mixinTypography}
`

export const FormLabelRadio = styled.label`
  cursor: pointer;
  user-select: none;

  svg {
    width: 2rem;
    height: 2rem;
    fill: none;
    vertical-align: middle;

    circle {
      stroke-width: 1;
      stroke: #c8c8c8;
    }

    path {
      stroke: #000;
      transition: all 0.4s ease;

      &:first-of-type {
        stroke-width: 6;
        stroke-dasharray: 19;
        stroke-dashoffset: 19;

        ${p => p.isChecked && css`
          stroke-dashoffset: 0;
          transition-delay: .3s;
        `}
      }

      &:last-of-type {
        stroke-width: 1;
        stroke-dasharray: 57;
        stroke-dashoffset: 57;

        ${p => p.isChecked && css`
          stroke-dashoffset: 0;
        `}
      }
    }
  }

  span {
    padding-left: 0.5rem;
    vertical-align: middle;
  }

  input[type="radio"] {
    position: absolute;
    pointer-events: none;
    opacity: 0;
  }

  ${mixinTypography}
`

export const FormRadioWrap = styled.div`
  > :nth-child(n+2) {
    padding-left: 1rem;
  }
`

export const FormFieldset = styled.fieldset`
  border: none;
`

const animationError = keyframes`
  0% {
    font-size: 0;
  }
  100% {
    font-size: 1.4rem;
  }
`

export const FormError = styled.span`
  display: block;
  color: #e20012;
  animation: ${animationError} 0.25s ease;
  ${mixinTypography}
`

export const InputBlock = styled.div`
  position: relative;

  > input {
    width: 100%;
    min-height: 3.5rem;
    padding: 0 1rem;
    border: 0.1rem solid #000;
    transition: border-color 0.25s ease;

    ${p => p.error && `
      border-color: #e20012;
    `}
  }
`