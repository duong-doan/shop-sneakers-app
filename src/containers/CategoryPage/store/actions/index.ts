import { typeActions } from '../constants/index'

// get list product per page

export const getDataPerPage = (pageNum: number) => {
  return {
    type: typeActions.GET_DATA_PER_PAGE,
    payload: pageNum
  }
}

export const getDataPerPageSuccess = (data: any[]) => {
  return {
    type: typeActions.GET_DATA_SUCCESS_PER_PAGE,
    payload: data
  }
}

export const getDataPerPageFail = (error: any[]) => {
  return {
    type: typeActions.GET_DATA_FAIL_PER_PAGE,
    payload: error
  }
}

// list category from id

export const getDataCategoryId = (id: number) => {
  return {
    type: typeActions.GET_DATA_CATEGORY_ID,
    payload: id
  }
}

export const getDataCategoryIdSuccess = (data: any) => {
  return {
    type: typeActions.GET_DATA_CATEGORY_ID_SUCCESS,
    payload: data
  }
}

export const getDataCategoryIdFail = (error: any) => {
  return {
    type: typeActions.GET_DATA_CATEGORY_ID_FAIL,
    payload: error
  }
}

// list category name

export const getCategories = () => {
  return {
    type: typeActions.GET_CATEGORY_LIST_NAME
  }
}

export const getCategoriesSuccess = (data: any) => {
  return {
    type: typeActions.GET_CATEGORY_LIST_NAME_SUCCESS,
    payload: data
  }
}

export const getCategoriesFail = (error: any) => {
  return {
    type: typeActions.GET_CATEGORY_LIST_NAME_FAIL,
    payload: error
  }
}

// handle data filter

export const getDataFilter = () => {
  return {
    type: typeActions.GET_VALUE_FILTER
  }
}

export const getValuePrice = (data: any) => {
  return {
    type: typeActions.VALUE_PRICE,
    payload: data
  }
}

export const getValueBrands = (data: any) => {
  return {
    type: typeActions.VALUE_BRANDS,
    payload: data
  }
}

export const getValueColors = (data: any) => {
  return {
    type: typeActions.VALUE_COLOR,
    payload: data
  }
}

export const getValueSizes = (data: any) => {
  return {
    type: typeActions.VALUE_SIZE,
    payload: data
  }
}

// value search input

export const getValueSearch = value => {
  return {
    type: typeActions.GET_VALUE_SEARCH,
    payload: value
  }
}

export const getValueSearchSuccess = data => {
  return {
    type: typeActions.GET_VALUE_SEARCH_SUCCESS,
    payload: data
  }
}

export const getValueSearchFail = error => {
  return {
    type: typeActions.GET_VALUE_SEARCH_FAIL,
    payload: error
  }
}
