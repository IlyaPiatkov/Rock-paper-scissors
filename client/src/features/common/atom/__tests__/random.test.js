import { getRandomInt } from "../random"

describe("Testing random function", () => {
  test("should be number", () => {
    expect(getRandomInt(100)).not.toBeNaN()
  })

  test("should be less value", () => {
    expect(getRandomInt(100)).toBeLessThanOrEqual(100)
  })
})
