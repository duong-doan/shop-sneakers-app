import { typeActions } from '../constants/index'

// get user register
export const userRegister = (user: { email: string; password: string }) => {
  return {
    type: typeActions.GET_USER_REGISTER,
    payload: user
  }
}

// logout

export const logout = () => {
  return {
    type: typeActions.LOGOUT_REQUESTED
  }
}

export const logoutSuccess = data => {
  return {
    type: typeActions.LOGOUT_SUCCESS,
    payload: data
  }
}

export const logoutFailed = () => {
  return {
    type: typeActions.LOGOUT_FAILED
  }
}
