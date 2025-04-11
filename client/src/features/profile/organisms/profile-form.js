import React from "react"
import { Field, reduxForm } from "redux-form"
import { useTranslation } from "react-i18next"

import {
  required,
  maxLength,
  minLength,
  ElementInput,
  ElementRadio
} from "../../common"
import {
  FormContainer,
  FormLabel,
  FormFieldset,
  FormRadioWrap,
  ButtonDefault
} from "../../../ui"

const maxLength15 = maxLength(15)
const minLength2 = minLength(2)

const defaultInput = ElementInput("input")
const RadioInput = ElementRadio("input")

const ProfileForm = ({ handleSubmit }) => {
  const [t] = useTranslation(["common"])

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Field
        label={t("common:label.firstName")}
        name="firstName"
        id="firstName"
        component={defaultInput}
        type="text"
        placeholder={t("common:placeholder.firstName")}
        validate={[required, maxLength15, minLength2]}
      />

      <Field
        label={t("common:label.lastName")}
        name="lastName"
        id="lastName"
        component={defaultInput}
        type="text"
        placeholder={t("common:placeholder.lastName")}
        // validate={[required, maxLength15, minLength2]}
      />

      <FormFieldset>
        <FormLabel as="legend" medium>
          {t("common:label.gender")}
        </FormLabel>
        <FormRadioWrap>
          <Field
            label="Male"
            name="gender"
            component={RadioInput}
            type="radio"
            value="Male"
          />
          <Field
            label="Women"
            name="gender"
            component={RadioInput}
            type="radio"
            value="Women"
          />
          <Field
            label="Other"
            name="gender"
            component={RadioInput}
            type="radio"
            value="Other"
          />
        </FormRadioWrap>
      </FormFieldset>

      <ButtonDefault>{t("common:save")}</ButtonDefault>
    </FormContainer>
  )
}

export const ProfileReduxForm = reduxForm({
  form: "profileForm"
})(ProfileForm)
