import React from "react"
import { Field, reduxForm } from "redux-form"
import { useTranslation } from "react-i18next"

import { FormContainer, ButtonDefault, FormError } from "../../../ui"
import {
  ElementInput,
  ElementCheckbox,
  required,
  minLength,
  email
} from "../../common"

const DefaultInput = ElementInput("input")
const Checkbox = ElementCheckbox("input")

const minLength5 = minLength(5)

const LoginForm = ({ handleSubmit, error }) => {
  const [t] = useTranslation(["common"])

  return (
    <FormContainer onSubmit={handleSubmit}>
      {error && <FormError small> {error} </FormError>}

      <Field
        label={t("common:label.email")}
        name="email"
        id="email"
        component={DefaultInput}
        type="email"
        placeholder={t("common:placeholder.exampleEmail")}
        validate={[required, email]}
      />

      <Field
        label={t("common:label.password")}
        name="password"
        id="password"
        component={DefaultInput}
        type="password"
        placeholder={t("common:placeholder.password")}
        validate={[required, minLength5]}
      />

      <Field
        label={t("common:rememberMe")}
        name="rememberMe"
        component={Checkbox}
      />

      <ButtonDefault type="submit">{t("common:enter")}</ButtonDefault>
    </FormContainer>
  )
}

export const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)
