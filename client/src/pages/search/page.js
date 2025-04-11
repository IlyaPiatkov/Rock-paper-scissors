import React from "react"
import { connect } from "react-redux"
import { useTranslation } from "react-i18next"

import {
  searchRoom,
  errorServer,
  connectRoom,
  resetSearchRoom
} from "../../redux/reduser/search-reduser"
import { createRoom } from "../../redux/reduser/create-reduser"
import { getUserId, getUserName } from "../../redux/selectors/selectors"

import {
  MainContent,
  Title,
  SearchWrap,
  SearchMaps,
  SearchProgress,
  SearchCircle,
  SearchList,
  SearchItem,
  SearchInfo,
  Icon,
  Text,
  ButtonDefault
} from "../../ui"
import {
  CommonContentTemplate,
  CreateRoomReduxForm,
  Modal
  // transition
} from "../../features"
import { useEffect } from "react"

const Form = ({
  handleCreateRoom,
  handleSearchRoom,
  createRoomCapacity,
  t
}) => {
  return (
    <>
      <CreateRoomReduxForm
        onSubmit={handleCreateRoom}
        initialValues={{ createRoomCapacity: createRoomCapacity }}
      />
      <ButtonDefault type="button" onClick={handleSearchRoom}>
        {t("common:search.searchRoom")}
      </ButtonDefault>
    </>
  )
}

const List = ({ userName, userId, t, userReady }) => (
  <SearchList>
    <SearchItem>
      <Icon name="user" />
      <Text medium>{userName ? userName : userId}</Text>
      <SearchInfo>
        <ButtonDefault id="testId" type="button" onClick={userReady} >Ready</ButtonDefault>
      </SearchInfo>
    </SearchItem>
    <SearchItem>
      <Icon name="user" />
      <Text medium>name</Text>
      <SearchInfo>
        <Text medium>Ready</Text>
      </SearchInfo>
    </SearchItem>
  </SearchList>
)

const ButtonRooms = ({ handleChoiceRoom, rooms, t, resetSearchRoom }) => {
  useEffect(() => {
    return () => resetSearchRoom()
  }, [resetSearchRoom])
  return (
    <>
      {rooms.map((item, index) => {
        return (
          <ButtonDefault
            key={item.id}
            onClick={() => handleChoiceRoom(item.id)}
          >
            {/* Room {index + 1} */}
            {item.id}
          </ButtonDefault>
        )
      })}
    </>
  )
}

const Search = ({
  isErrorServer,
  isCreatedRoom,
  isSearchRoom,
  createRoom,
  searchRoom,
  connectRoom,
  createRoomCapacity,
  errorServer,
  userName,
  userId,
  rooms,
  resetSearchRoom
}) => {
  const [t] = useTranslation(["common"])
  // const [openModal, toggleModal] = useState({
  //   isOpen: isErrorServer,
  //   isClose: false
  // })

  const handleCreateRoom = values => {
    createRoom(values.createRoomCapacity)
  }

  const handleSearchRoom = () => {
    searchRoom()
  }

  const handleChoiceRoom = searchRoomId => {
    connectRoom(searchRoomId)
  }

  const closeModal = () => {
    errorServer(false)
    // errorServer(openModal.isClose)
    // transition(openModal, toggleModal, 2000)
  }

  const userReady = () => {
    
  }

  const isShowForm = !isCreatedRoom && !isSearchRoom

  return (
    <CommonContentTemplate>
      <MainContent>
        <Title large center>
          {t("common:search.searchGame")}
        </Title>
        <SearchWrap>
          <SearchMaps>
            <SearchProgress />
            <SearchCircle first />
            <SearchCircle second />
            <SearchCircle third />
            <SearchCircle fourth />
          </SearchMaps>
          {isCreatedRoom && <List userName={userName} userId={userId} t={t} userReady={userReady}/>}
          {isSearchRoom && (
            <ButtonRooms
              rooms={rooms}
              t={t}
              handleChoiceRoom={handleChoiceRoom}
              resetSearchRoom={resetSearchRoom}
            />
          )}
          {isShowForm && (
            <Form
              handleCreateRoom={handleCreateRoom}
              handleSearchRoom={handleSearchRoom}
              createRoomCapacity={createRoomCapacity}
              t={t}
            />
          )}
        </SearchWrap>
        {isErrorServer && (
          <Modal
            title={t("common:modal.errorServerTitle")}
            text={t("common:modal.errorServerText")}
            close={closeModal}
          />
        )}
      </MainContent>
    </CommonContentTemplate>
  )
}

let mapStateToProps = state => {
  return {
    isErrorServer: state.search.isErrorServer,
    isCreatedRoom: state.create.isCreatedRoom,
    isSearchRoom: state.search.isSearchRoom,
    rooms: state.search.rooms,
    createRoomCapacity: state.create.createRoomCapacity,
    userId: getUserId(state),
    userName: getUserName(state)
  }
}

let mapDispatchToProps = dispatch => ({
  createRoom: capacity => dispatch(createRoom(capacity)),
  searchRoom: () => dispatch(searchRoom()),
  connectRoom: searchRoomId => dispatch(connectRoom(searchRoomId)),
  errorServer: isErrorServer => {
    dispatch(errorServer(isErrorServer))
  },
  resetSearchRoom: () => dispatch(resetSearchRoom())
})

export const SearchPage = connect(mapStateToProps, mapDispatchToProps)(Search)
