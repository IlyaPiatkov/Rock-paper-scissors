import React from "react"
import { connect } from "react-redux"
import { useTranslation } from "react-i18next"

import { setModeGame, setEnemies } from "../../redux/reduser/option-reduser"

import {
  getModeList,
  getModeGame,
  getEnemies
} from "../../redux/selectors/selectors"

import { OptionsReduxForm, CommonContentTemplate } from "../../features"
import { Title, MainContent } from "../../ui"

const OptionsRPS = ({
  setModeGame,
  setEnemies,
  modeList,
  modeGame,
  enemies
}) => {
  const [t] = useTranslation(["common"])

  const submit = values => {
    setModeGame(values.modeGame)
    setEnemies(values.enemies)
  }

  return (
    <CommonContentTemplate>
      <MainContent>
        <Title large center>
          {t("common:options.title")}
        </Title>
        <OptionsReduxForm
          onSubmit={submit}
          modeList={modeList}
          initialValues={{ enemies, modeGame }}
        />
      </MainContent>
    </CommonContentTemplate>
  )
}

let mapStateToProps = state => {
  return {
    modeList: getModeList(state),
    modeGame: getModeGame(state),
    enemies: getEnemies(state)
  }
}

let mapDispatchToProps = dispatch => ({
  setModeGame: modeGame => dispatch(setModeGame(modeGame)),
  setEnemies: enemies => dispatch(setEnemies(enemies))
})

export const OptionsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsRPS)
