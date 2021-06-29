import { takeEvery, call, put, fork } from 'redux-saga/effects'
import { typeActions, urlApi } from '../constants/index'
import { getDataApi } from '../../services/index'

function* getAllProductPerPage(action) {
  const result = yield call(
    getDataApi,
    `${urlApi.GET_ALL_PRODUCT}?page=${action.payload}`
  )
  if (result.status) {
    yield put({
      type: typeActions.GET_DATA_SUCCESS_PER_PAGE,
      payload: result.data
    })
  } else {
    yield put({
      type: typeActions.GET_DATA_FAIL_PER_PAGE,
      payload: result.errors
    })
  }
}

function* getDataCategory(action) {
  const result = yield call(
    getDataApi,
    `${urlApi.GET_DATA_CATEGORY_ID}${action.payload}`
  )
  if (result.status) {
    yield put({
      type: typeActions.GET_DATA_CATEGORY_ID_SUCCESS,
      payload: result.data
    })
  } else {
    yield put({
      type: typeActions.GET_DATA_CATEGORY_ID_FAIL,
      payload: result.errors
    })
  }
}

function* getCategoriesListName() {
  const result = yield call(getDataApi, `${urlApi.GET_LIST_CATEGORY_NAME}`)
  if (result.status) {
    yield put({
      type: typeActions.GET_CATEGORY_LIST_NAME_SUCCESS,
      payload: result.data
    })
  } else {
    yield put({
      type: typeActions.GET_CATEGORY_LIST_NAME_FAIL,
      payload: result.errors
    })
  }
}

function* getProductSearch(action) {
  const result = yield call(getDataApi, `/products${action.payload}`)
  if (result.status) {
    yield put({
      type: typeActions.GET_VALUE_SEARCH_SUCCESS,
      payload: result.data.data
    })
  } else {
    yield put({
      type: typeActions.GET_VALUE_SEARCH_FAIL,
      payload: result.errors
    })
  }
}

function* watchCategory() {
  yield takeEvery(typeActions.GET_DATA_PER_PAGE, getAllProductPerPage)
  yield takeEvery(typeActions.GET_DATA_CATEGORY_ID, getDataCategory)
  yield takeEvery(typeActions.GET_CATEGORY_LIST_NAME, getCategoriesListName)
  yield takeEvery(typeActions.GET_VALUE_SEARCH, getProductSearch)
}

const categorySaga = [fork(watchCategory)]

export default categorySaga
