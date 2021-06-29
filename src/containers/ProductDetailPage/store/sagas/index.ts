import { takeEvery, call, put, fork } from 'redux-saga/effects'
import typeActions, { urlApi } from '../constants/index'
import {
  getDataApi,
  postLikeProductApi,
  getFavoriteProduct,
  addToCartApi,
  getCartApiService
} from '../../services/index'

function* getIdProduct(action) {
  const res = yield call(
    getDataApi,
    `${urlApi.GET_PRODUCT_DETAIL}${action.payload}`
  )
  console.log('saga product item', res)
  if (res.status) {
    yield put({
      type: typeActions.GET_ID_PRODUCT_SUCCESS,
      payload: res.data.data
    })
  } else {
    yield put({
      type: typeActions.GET_ID_PRODUCT_FAIL,
      payload: res.errors
    })
  }
}

function* getReviews(action) {
  const res = yield call(
    getDataApi,
    `${urlApi.GET_PRODUCT}${action.payload}${urlApi.GET_REVIEWS}`
  )
  if (res.status) {
    yield put({
      type: typeActions.GET_REVIEWS_PRODUCT_SUCCESS,
      payload: res.data.data
    })
  } else {
    yield put({
      type: typeActions.GET_REVIEWS_PRODUCT_FAIL,
      payload: res.errors
    })
  }
}

function* getListProduct() {
  const resultListProduct = yield call(getDataApi, urlApi.GET_ALL_PRODUCT)
  if (resultListProduct.status) {
    yield put({
      type: typeActions.GET_LIST_PRODUCT_SUCCESS,
      payload: resultListProduct.data.data
    })
  } else {
    yield put({
      type: typeActions.GET_LIST_PRODUCT_FAIL,
      payload: resultListProduct.errors
    })
  }
}

function* postLikeProduct(action) {
  const res = yield call(postLikeProductApi, {
    product_id: action.payload
  })

  if (res.status) {
    yield put({
      type: typeActions.POST_LIKE_PRODUCT_SUCCESS
    })
  } else {
    yield put({
      type: typeActions.POST_LIKE_PRODUCT_FAIL,
      payload: res.errors
    })
  }
}

// function* getProductFavorite() {
//   const res = yield call(getFavoriteProduct)

//   if (res.status) {
//     console.log('add like success')
//   } else {
//     console.log('add like fail')
//   }
// }

function* addToCart(action) {
  const res = yield call(addToCartApi, {
    items: [
      {
        product_id: action.payload.product_id,
        price: action.payload.price,
        quantity: action.payload.quantity,
        discount: action.payload.discount
      }
    ]
  })
  if (res.status) {
    yield put({
      type: typeActions.ADD_TO_CART_API_SUCCESS
    })
  } else {
    yield put({
      type: typeActions.ADD_TO_CART_API_FAIL,
      payload: res.errors
    })
  }
}

function* watchProduct() {
  yield takeEvery(typeActions.GET_ID_PRODUCT, getIdProduct)
  yield takeEvery(typeActions.GET_REVIEWS_PRODUCT, getReviews)
  yield takeEvery(typeActions.GET_LIST_PRODUCT, getListProduct)
  yield takeEvery(typeActions.POST_LIKE_PRODUCT, postLikeProduct)
  // yield takeEvery(typeActions.GET_PRODUCT_FAVORITE, getProductFavorite)
  yield takeEvery(typeActions.ADD_TO_CART_API, addToCart)
}

const productSaga = [fork(watchProduct)]

export default productSaga
