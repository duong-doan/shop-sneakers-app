import { takeEvery, call, put, fork } from 'redux-saga/effects'
import { typeActions, urlApi } from '../constants/index'
import { getDataApi } from '../../services/index'

function* getProductItem() {
  const result = yield call(getDataApi, `${urlApi.GET_PRODUCT_DETAIL}15`)
  if (result.status) {
    yield put({
      type: typeActions.GET_PRODUCT_ITEM_SUCCESS,
      payload: result.data
    })
  } else {
    yield put({
      type: typeActions.GET_PRODUCT_ITEM_FAIL,
      payload: result.errors
    })
  }
}

function* getProductCategoryId() {
  const result1 = yield call(getDataApi, `${urlApi.GET_PRODUCT_CATEGORY_ID_2}`)
  const result2 = yield call(getDataApi, `${urlApi.GET_PRODUCT_CATEGORY_ID_10}`)
  if (result1.status && result2.status) {
    yield put({
      type: typeActions.GET_ALL_PRODUCT_CATEGORY_ID_SUCCESS,
      payload: {
        category_id_2: result1.data.data,
        category_id_10: result2.data.data
      }
    })
  } else {
    yield put({
      type: typeActions.GET_ALL_PRODUCT_CATEGORY_ID_SUCCESS,
      payload: result1.errors
    })
  }
}

function* watchHome() {
  // yield takeEvery(typeActions.GET_DATA, getListProduct)
  yield takeEvery(typeActions.GET_PRODUCT_ITEM, getProductItem)
  yield takeEvery(typeActions.GET_ALL_PRODUCT_CATEGORY_ID, getProductCategoryId)
}

const homeSaga = [fork(watchHome)]

export default homeSaga
