import i18n from "../../../../i18n"

import { email, maxLength, minLength, required } from "../validate"

describe("Testing validation function 'required'", () => {
  test("should be show error massage", () => {
    expect(required(false)).toBe(i18n.t("common:error.required"))
  })

  test("should be validation return undefined", () => {
    expect(required(true)).toBeUndefined()
  })
})

describe("Testing validation function 'maxLength'", () => {
  let maxLengthValue

  beforeEach(() => {
    maxLengthValue = 4
  })

  test("should be show error massage", () => {
    expect(maxLength(maxLengthValue)("hello")).toBe(
      i18n.t("common:error.maxLengthText", {
        maxLengthValue
      })
    )
  })
  test("should be less is equal value length", () => {
    expect(maxLength(maxLengthValue)("test")).toBeUndefined()
  })
})

describe("Testing validation function 'minLength'", () => {
  let minLengthValue

  beforeEach(() => {
    minLengthValue = 4
  })

  test("should be show error massage", () => {
    expect(minLength(minLengthValue)("yes")).toBe(
      i18n.t("common:error.minLengthText", {
        minLengthValue
      })
    )
  })
  test("should be more is equal value length", () => {
    expect(minLength(minLengthValue)("test")).toBeUndefined()
  })
})

describe("Testing validation function 'email'", () => {
  test("should be show error massage, test on '@'", () => {
    expect(email("@te@st@gmail.com")).toBe(i18n.t("common:error.invalidEmail"))
  })

  test("should be show error massage, test on symbol", () => {
    expect(email("te'st@gmail.com")).toBe(i18n.t("common:error.invalidEmail"))
  })

  test("should be undefined", () => {
    expect(email()).toBeUndefined()
  })

  test("should be correctly email", () => {
    expect(email("test@gmail.com")).toBeUndefined()
  })
})
