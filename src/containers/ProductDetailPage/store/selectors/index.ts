import { createSelector } from 'reselect'
import { initialState } from '../reducer/index'
import { initState } from '../../../Auth/Login/store/reducer/index'
import { get } from 'lodash'

const selectProductDetailPage = (state: any) =>
  get(state, 'product') || initialState

const selectLoginPage = (state: any) => get(state, 'login') || initState

const selectIsRequesting = () =>
  createSelector(selectProductDetailPage, selectProductDetailPage =>
    get(selectProductDetailPage, 'isRequesting')
  )

const selectProductItem = () =>
  createSelector(selectProductDetailPage, selectProductDetailPage =>
    get(selectProductDetailPage, 'productItem')
  )

const selectListReviews = () =>
  createSelector(selectProductDetailPage, selectProductDetailPage =>
    get(selectProductDetailPage, 'listReviews')
  )

const selectListProducts = () =>
  createSelector(selectProductDetailPage, selectProductDetailPage =>
    get(selectProductDetailPage, 'listProducts')
  )

const selectUserLogin = () =>
  createSelector(selectLoginPage, selectLoginPage =>
    get(selectLoginPage, 'user')
  )

const selectListProductAddToCart = () =>
  createSelector(selectProductDetailPage, selectProductDetailPage =>
    get(selectProductDetailPage, 'listProductAddToCart')
  )
export {
  selectProductDetailPage,
  selectProductItem,
  selectListReviews,
  selectListProducts,
  selectUserLogin,
  selectListProductAddToCart,
  selectIsRequesting
}
