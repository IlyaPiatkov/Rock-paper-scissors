import React from 'react'
import {
  Title,
  ButtonDefault,
  ModalOverlay,
  ModalContainer,
  ModalClose,
  Text
} from '../../../ui'

export const Modal = ({title, text, close}) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <Title as="p" center>{title}</Title>
        <Text medium>{text}</Text>
        <ButtonDefault onClick={close}>Ok</ButtonDefault>
        <ModalClose onClick={close}></ModalClose>
      </ModalContainer>
    </ModalOverlay>
  )
}
