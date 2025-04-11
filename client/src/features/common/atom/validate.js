import i18n from "../../../i18n"

export const required = value => {
  if (value) return undefined
  return i18n.t("common:error.required")
}

export const maxLength = max => value => {
  if (value && value.length > max)
    return i18n.t("common:error.maxLengthText", {
      max
    })
  return undefined
}

export const minLength = min => value => {
  if (value && value.length < min)
    return i18n.t("common:error.minLengthText", {
      min
    })
  return undefined
}

export const email = value => {
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
    return i18n.t("common:error.invalidEmail")
  return undefined
}
