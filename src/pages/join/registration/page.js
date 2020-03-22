import React from "react"
import { connect } from "react-redux"

import { errorServer, registr } from "../../../redux/reduser/auth-reduser"

import { Title, MainContent } from "../../../ui"
import {
  Modal,
  withAuthRedirect,
  RegistrReduxForm,
  CommonContentTemplate
} from "../../../features"

const Registr = ({ setUserData, isErrorServer, errorServer }) => {
  const submit = values => {
    setUserData(values.email, values.password)
  }

  const closeModal = () => {
    errorServer(false)
  }

  return (
    <CommonContentTemplate>
      <MainContent>
        <Title large center>
          Registration
        </Title>
        <RegistrReduxForm onSubmit={submit} />
        {isErrorServer && (
          <Modal
            title={"Oops"}
            text={"Something went wrong, try again later"}
            close={closeModal}
          />
        )}
      </MainContent>
    </CommonContentTemplate>
  )
}

let RegistrRedirect = withAuthRedirect(Registr)

let mapStateToProps = state => {
  return {
    isErrorServer: state.auth.isErrorServer
  }
}

let mapDispatchToProps = dispatch => ({
  setUserData: (email, password) => {
    dispatch(registr(email, password))
  },
  errorServer: isErrorServer => {
    dispatch(errorServer(isErrorServer))
  }
})

export const registrationPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrRedirect)
