import { typeActions } from '../constants/index'

export const initStateRegister = {
  errors: {},
  userRegister: []
}

const registerReducer = (state = initStateRegister, action) => {
  switch (action.type) {
    case typeActions.REGISTER_REQUESTED:
      return {
        ...state
      }

    case typeActions.REGISTER_SUCCESS:
      const itemUser = { ...action.user }
      return {
        ...state,
        userRegister: [...state.userRegister, itemUser]
      }

    case typeActions.REGISTER_FAILED:
      return {
        ...state
      }

    default:
      return {
        ...state
      }
  }
}

export default registerReducer
