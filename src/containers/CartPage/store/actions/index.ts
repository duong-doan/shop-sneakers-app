import { typeActions } from '../constants/index'

export const increaseCartProduct = data => {
  return {
    type: typeActions.INCREASE_CART_PRODUCT,
    payload: data
  }
}

export const decreaseCartProduct = data => {
  return {
    type: typeActions.DECREASE_CART_PRODUCT,
    payload: data
  }
}

export const deleteProductItem = id => {
  return {
    type: typeActions.ID_DELETE_PRODUCT,
    payload: id
  }
}

// get cart api

export const getCartProgressApi = () => {
  return {
    type: typeActions.GET_CART_PROGRESS_API
  }
}

export const getCartProgressApiSuccess = data => {
  return {
    type: typeActions.GET_CART_PROGRESS_API_SUCCESS,
    payload: data
  }
}

export const getCartProgressApiFail = data => {
  return {
    type: typeActions.GET_CART_PROGRESS_API_FAIL,
    payload: data
  }
}
