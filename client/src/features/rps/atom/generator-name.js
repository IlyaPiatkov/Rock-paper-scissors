import { getRandomInt } from "../../common"

export const generatorName = arr => {
  let namber = getRandomInt(arr.length)

  return arr[namber]
}
