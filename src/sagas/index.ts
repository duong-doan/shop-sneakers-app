import { all } from 'redux-saga/effects'
import productSaga from '../containers/ProductDetailPage/store/sagas'
import categorySaga from '../containers/CategoryPage/store/sagas/index'
import homeSaga from '../containers/Homepage/store/sagas'
import authSaga from '../containers/Auth/Login/store/sagas/index'
import cartSaga from '../containers/CartPage/store/sagas'
import authRegisterSaga from '../containers/Auth/Register/store/sagas'

function* rootSaga() {
  yield all([
    ...categorySaga,
    ...productSaga,
    ...homeSaga,
    ...authSaga,
    ...cartSaga,
    ...authRegisterSaga
  ])
}

export default rootSaga
