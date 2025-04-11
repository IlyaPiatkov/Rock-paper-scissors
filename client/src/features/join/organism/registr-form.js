import React from "react"
import { Field, reduxForm } from "redux-form"
import { useTranslation, Trans } from "react-i18next"

import { FormContainer, ButtonDefault, FormError, Link } from "../../../ui"
import {
  ElementInput,
  required,
  minLength,
  email,
  ElementCheckbox
} from "../../common"

const DefaultInput = ElementInput("input")
const Checkbox = ElementCheckbox("input")

const minLength5 = minLength(5)

const RegistrForm = ({ handleSubmit, error }) => {
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
        label={
          <Trans i18nKey="common:termsAndConditions">
            1<Link to="/privacy-policies">2</Link>
          </Trans>
        }
        name="rules"
        component={Checkbox}
        validate={[required]}
      />

      <ButtonDefault type="submit">{t("common:registration")}</ButtonDefault>
    </FormContainer>
  )
}

export const RegistrReduxForm = reduxForm({ form: "registr" })(RegistrForm)
