import React from "react"
import { connect } from "react-redux"
import { useTranslation } from "react-i18next"

import { errorServer, login } from "../../../redux/reduser/auth-reduser"

import { Title, MainContent } from "../../../ui"
import {
  Modal,
  withAuthRedirect,
  LoginReduxForm,
  CommonContentTemplate
} from "../../../features"

const Login = ({ setUserData, isErrorServer, errorServer }) => {
  const [t] = useTranslation(["common"])

  const submit = values => {
    setUserData(values.email, values.password, values.rememberMe)
  }

  const closeModal = () => {
    errorServer(false)
  }

  return (
    <CommonContentTemplate>
      <MainContent>
        <Title large center>
          {t("common:login")}
        </Title>
        <LoginReduxForm onSubmit={submit} />
        {isErrorServer && (
          <Modal
            title={t("common:modal.errorServerTitle")}
            text={t("common:modal.errorServerText")}
            close={closeModal}
          />
        )}
      </MainContent>
    </CommonContentTemplate>
  )
}

let LoginRedirect = withAuthRedirect(Login)

let mapStateToProps = state => {
  return {
    isErrorServer: state.auth.isErrorServer
  }
}

let mapDispatchToProps = dispatch => ({
  setUserData: (email, password, rememberMe) => {
    dispatch(login(email, password, rememberMe))
  },
  errorServer: isErrorServer => {
    dispatch(errorServer(isErrorServer))
  }
})

export const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRedirect)
