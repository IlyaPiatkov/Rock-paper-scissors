import React, { useEffect } from "react"
import { connect } from "react-redux"

import {
  setResultGame,
  setPlayers,
  resetGame
} from "../../redux/reduser/rps-reduser"

import { getModeGameList, getEnemies } from "../../redux/selectors/selectors"
import {
  getWinnerText,
  getEnemyPlayers,
  getCurrentPlayer,
  getRound,
  getCurrentWinner,
  getPlayers
} from "../../redux/selectors/rps-selector"

import { RPSHeader, RPSButtons, RPSContainer, Loader } from "../../ui"
import { CommonContentTemplate } from "../../features"

const Game = ({
  ModeGameList,
  isLoading,
  setResultGame,
  setPlayers,
  winnerText,
  enemyPlayers,
  currentPlayer,
  round,
  currentWinner,
  enemies,
  players,
  resetGame
}) => {
  useEffect(() => {
    setPlayers(enemies, currentPlayer)

    return () => {
      resetGame()
    }
  }, [setPlayers, enemies, currentPlayer, resetGame])

  let clickHandler = event => {
    const choiceUser = event.target.id
    setResultGame(
      choiceUser,
      ModeGameList,
      currentPlayer,
      enemyPlayers,
      currentWinner
    )
  }

  return (
    <CommonContentTemplate>
      <RPSContainer>
        <RPSHeader players={players} winnerText={winnerText} round={round} />
        <RPSButtons names={ModeGameList} onClick={clickHandler} />
      </RPSContainer>
      {isLoading && <Loader />}
    </CommonContentTemplate>
  )
}

let mapStateToProps = state => {
  return {
    isLoading: state.game.isLoading,
    ModeGameList: getModeGameList(state),
    winnerText: getWinnerText(state),
    enemyPlayers: getEnemyPlayers(state),
    currentPlayer: getCurrentPlayer(state),
    round: getRound(state),
    currentWinner: getCurrentWinner(state),
    enemies: getEnemies(state),
    players: getPlayers(state)
  }
}

let mapDispatchToProps = dispatch => ({
  setResultGame: (
    choiceUser,
    ModeGameList,
    currentPlayer,
    enemyPlayers,
    round,
    currentWinner
  ) =>
    dispatch(
      setResultGame(
        choiceUser,
        ModeGameList,
        currentPlayer,
        enemyPlayers,
        round,
        currentWinner
      )
    ),
  setPlayers: (players, currentPlayer) =>
    dispatch(setPlayers(players, currentPlayer)),
  resetGame: () => dispatch(resetGame())
})

export const GamePage = connect(mapStateToProps, mapDispatchToProps)(Game)
