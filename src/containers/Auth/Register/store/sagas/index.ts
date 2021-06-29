import { push } from 'connected-react-router'
import { call, fork, put, takeEvery } from 'redux-saga/effects'
import CookieHandlerInstance from '../../../../../utils/cookie'
import { postRegister } from '../../services/index'
import { typeActions } from '../constants/index'

function* register(action) {
  const res = yield call(postRegister, {
    email: action.payload.email,
    password: action.payload.password
  })

  if (res.status) {
    const data = res.data.data
    const diffMinutes = 36000
    yield put({
      type: typeActions.REGISTER_SUCCESS,
      user: { ...data.user, password: action.payload.password }
    })
    yield put(push('/'))
    CookieHandlerInstance.setCookie({
      name: 'token',
      value: data.token,
      minutesExpired: diffMinutes
    })
  } else {
    console.log('register fail')
  }
}

function* watchAuthRegister() {
  yield takeEvery(typeActions.REGISTER_REQUESTED, register)
}

const authRegisterSaga = [fork(watchAuthRegister)]

export default authRegisterSaga
