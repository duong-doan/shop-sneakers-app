import { typeActions } from '../constants/index'

export const getProductItem = () => {
  return {
    type: typeActions.GET_PRODUCT_ITEM
  }
}

export const getProductItemSuccess = (data: any): any => {
  return {
    type: typeActions.GET_PRODUCT_ITEM_SUCCESS,
    payload: data
  }
}

export const getProductItemFail = (error: any): any => {
  return {
    type: typeActions.GET_PRODUCT_ITEM_FAIL,
    payload: error
  }
}

// get product

export const getAllProduct = () => {
  return {
    type: typeActions.GET_ALL_PRODUCT_CATEGORY_ID
  }
}

export const getAllProductSuccess = (data: any) => {
  return {
    type: typeActions.GET_ALL_PRODUCT_CATEGORY_ID_SUCCESS,
    payload: data
  }
}

export const getAllProductFail = (error: any) => {
  return {
    type: typeActions.GET_ALL_PRODUCT_CATEGORY_ID_FAIL,
    payload: error
  }
}
