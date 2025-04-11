import React from "react"
import { Field, reduxForm } from "redux-form"
import { useTranslation } from "react-i18next"

import { ElementRadio } from "../../common"
import {
  FormContainer,
  FormLabel,
  FormFieldset,
  FormRadioWrap,
  ButtonDefault
} from "../../../ui"

const RadioInput = ElementRadio("input")

const OptionsForm = ({ handleSubmit, modeList }) => {
  const [t] = useTranslation(["common"])

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormFieldset>
        <FormLabel as="legend" medium>
          {t("common:label.participants")}
        </FormLabel>
        <FormRadioWrap>
          <Field
            label="1"
            name="enemies"
            component={RadioInput}
            type="radio"
            value="1"
          />
          <Field
            label="2"
            name="enemies"
            component={RadioInput}
            type="radio"
            value="2"
          />
          <Field
            label="3"
            name="enemies"
            component={RadioInput}
            type="radio"
            value="3"
          />
        </FormRadioWrap>
      </FormFieldset>
      <FormFieldset>
        <FormLabel as="legend" medium>
          {t("common:label.modeGame")}
        </FormLabel>
        <FormRadioWrap>
          {modeList.map((item, key) => (
            <Field
              label={t(`common:label.${item}`)}
              name="modeGame"
              component={RadioInput}
              type="radio"
              value={item}
              key={key}
            />
          ))}
        </FormRadioWrap>
      </FormFieldset>

      <ButtonDefault>{t("common:save")}</ButtonDefault>
    </FormContainer>
  )
}

export const OptionsReduxForm = reduxForm({
  form: "Options"
})(OptionsForm)
