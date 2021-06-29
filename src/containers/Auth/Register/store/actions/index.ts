import { typeActions } from '../constants/index'

export const register = user => {
  return {
    type: typeActions.REGISTER_REQUESTED,
    payload: user
  }
}

export const registerSuccess = user => {
  return {
    type: typeActions.REGISTER_SUCCESS,
    user
  }
}

export const registerFailed = errors => {
  return {
    type: typeActions.REGISTER_FAILED,
    errors
  }
}
