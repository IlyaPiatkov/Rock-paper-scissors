import React from "react"
import { connect } from "react-redux"
import { useTranslation } from "react-i18next"

import { RootStateType, RootDispatchType } from "../../redux/store"
import { sendProfileData } from "../../redux/reduser/profile-reduser"
import { getUserName } from "../../redux/selectors/selectors"

import { CommonContentTemplate, ProfileReduxForm } from "../../features"
import { Title, MainContent } from "../../ui"

type ProfileData = {
  username: string | null // TODO rename filed to userName
  userLastName: string | null
  gender: string | null
}

type MapStateType = {
  userName: string | null
}

type MapDispatchType = {
  sendProfileData: (profileData: ProfileData) => void
}

type PropsType = MapStateType & MapDispatchType

const Profile: React.FC<PropsType> = ({ sendProfileData, userName }) => {
  const [t] = useTranslation(["common"])

  const submit = (values: any) => {
    sendProfileData({
      username: values.firstName, // TODO rename filed to userName
      userLastName: values.lastName,
      gender: values.gender
    })
  }

  return (
    <CommonContentTemplate>
      <MainContent>
        <Title large center>
          {t("common:profile.title")}
        </Title>
        <ProfileReduxForm
          onSubmit={submit}
          initialValues={{ firstName: userName }}
        />
      </MainContent>
    </CommonContentTemplate>
  )
}

let mapStateToProps = (state: RootStateType): MapStateType => {
  return {
    userName: getUserName(state)
  }
}

let mapDispatchToProps = (dispatch: RootDispatchType): MapDispatchType => ({
  sendProfileData: (userData: ProfileData) => {
    dispatch(sendProfileData(userData))
  }
})

export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(Profile)
