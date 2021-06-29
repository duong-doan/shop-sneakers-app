import { typeActions } from '../constants/index'

export const initState = {
  errors: {},
  user: []
}

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case typeActions.GET_USER_REGISTER:
      const getUserRegister = action.payload
      return {
        ...state,
        user: getUserRegister
      }

    case typeActions.LOGOUT_SUCCESS:
      const dataLogout = action.payload
      return {
        ...state,
        user: dataLogout
      }

    default:
      return {
        ...state
      }
  }
}

export default loginReducer
