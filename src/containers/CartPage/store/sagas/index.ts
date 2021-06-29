import { call, fork, put, takeEvery } from 'redux-saga/effects'
import { getCartProgressApi } from '../../services/index'
import { typeActions } from '../constants/index'

function* getCartProgress() {
  const res = yield call(getCartProgressApi)
  if (res.status) {
    yield put({
      type: typeActions.GET_CART_PROGRESS_API_SUCCESS,
      payload: res.data.data
    })
  } else {
    console.log('get cart progress fail')
  }
}

function* watchCart() {
  yield takeEvery(typeActions.GET_CART_PROGRESS_API, getCartProgress)
}

const cartSaga = [fork(watchCart)]

export default cartSaga
