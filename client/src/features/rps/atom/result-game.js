export const resultGame = (players, ModeGameList) => {
  let mode = ModeGameList.length

  let rock = []
  let paper = []
  let scissors = []
  let fire = []
  let water = []

  players.forEach(item => {
    switch (item.currentChoice) {
      case "Rock":
        rock.push(item)
        break

      case "Paper":
        paper.push(item)
        break

      case "Scissors":
        scissors.push(item)
        break

      case "Fire":
        fire.push(item)
        break

      case "Water":
        water.push(item)
        break

      default:
        console.warn("error switch")
        return null
    }
  })

  if (mode === 3) {
    if (rock.length && scissors.length && paper.length) {
      console.log("wins", "draw")
      return null
    } else if (rock.length && scissors.length) {
      console.log("wins", "rock")
      return rock
    } else if (scissors.length && paper.length) {
      console.log("wins", "scissors")
      return scissors
    } else if (paper.length && rock.length) {
      console.log("wins", "paper")
      return paper
    } else if (paper.length && rock.length) {
      console.log("wins", "paper")
      return paper
    } else {
      console.log("wins", "draw")
      return null
    }
  } else {
    // TODO не робе для 5 елементів
    if (rock.length && scissors.length && water.length) {
      console.log("wins", "rock")
      return rock
    } else if (scissors.length && paper.length && water.length) {
      console.log("wins", "scissors")
      return scissors
    } else if (paper.length && rock.length && water.length) {
      console.log("wins", "paper")
      return paper
    } else if (fire.length && paper.length && rock.length && water.length) {
      console.log("wins", "fire")
      return fire
    } else if (water.length && fire.length) {
      console.log("wins", "water")
      return water
    } else {
      console.log("error condition")
      return null
    }
  }
}
