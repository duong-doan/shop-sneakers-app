import { push } from 'connected-react-router'
import { call, fork, put, takeEvery } from 'redux-saga/effects'
import CookieHandlerInstance from '../../../../../utils/cookie'
import { postLogout } from '../../services/index'
import * as actions from '../actions/index'
import { typeActions } from '../constants/index'

// function* login(action) {
//   const res = yield call(postLogin, {
//     email: action.payload.email,
//     password: action.payload.password
//   })

//   if (res.status) {
//     const data = res.data.data
//     const diffMinutes = 36000
//     yield put({ type: typeActions.LOGIN_SUCCESS, user: data.user })
//     yield put(push('/'))
//     CookieHandlerInstance.setCookie({
//       name: 'token',
//       value: data.token,
//       minutesExpired: diffMinutes
//     })
//   } else {
//     yield put(actions.loginFailed(res.errors))
//   }
// }

function* logout() {
  const res = yield call(postLogout)

  CookieHandlerInstance.removeCookie('token')
  if (res.status) {
    const resData = res.data.data
    yield put(actions.logoutSuccess(resData))
    yield put(push('/user/login'))
  }
  yield put(actions.logoutFailed())
}

function* watchAuth() {
  // yield takeEvery(typeActions.LOGIN_REQUESTED, login)
  yield takeEvery(typeActions.LOGOUT_REQUESTED, logout)
}

const authSaga = [fork(watchAuth)]

export default authSaga
