import React from "react"
import { Field, reduxForm } from "redux-form"
import { useTranslation } from "react-i18next"

import { ElementRadio } from "../../common"
import {
  FormContainer,
  FormLabel,
  FormFieldset,
  FormRadioWrap,
  ButtonDefault,
  FormError
} from "../../../ui"

const RadioInput = ElementRadio("input")

const CreateRoomForm = ({ handleSubmit, error }) => {
  const [t] = useTranslation(["common"])

  return (
    <FormContainer onSubmit={handleSubmit}>
      {error && <FormError small> {error} </FormError>}

      <FormFieldset>
        <FormLabel as="legend" medium>
          {t("common:label.capacityRoom")}
        </FormLabel>
        <FormRadioWrap>
          <Field
            label="1"
            name="createRoomCapacity"
            component={RadioInput}
            type="radio"
            value="1"
          />
          <Field
            label="2"
            name="createRoomCapacity"
            component={RadioInput}
            type="radio"
            value="2"
          />
          <Field
            label="3"
            name="createRoomCapacity"
            component={RadioInput}
            type="radio"
            value="3"
          />
        </FormRadioWrap>
      </FormFieldset>

      <ButtonDefault>{t("common:search.createRoom")}</ButtonDefault>
    </FormContainer>
  )
}

export const CreateRoomReduxForm = reduxForm({
  form: "createRoom"
})(CreateRoomForm)
