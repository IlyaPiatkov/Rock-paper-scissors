export const transition = (state, callBack, transition = 0) => {
  if (state.isOpen) {
    callBack({
      isOpen: false,
      isClose: true,
      idDisabled: true
    })
    setTimeout(() => {
      callBack({
        isOpen: false,
        isClose: false,
        idDisabled: false
      })
    }, transition)
  } else {
    callBack({
      isOpen: true,
      isClose: true,
      idDisabled: false
    })
  }
}
