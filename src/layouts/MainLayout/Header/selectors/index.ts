import { createSelector } from 'reselect'
import { initState } from '../../../../containers/Auth/Login/store/reducer/index'
import { initStateCart } from '../../../../containers/CartPage/store/reducer/index'
import { get } from 'lodash'

const selectLoginPage = (state: any) => get(state, 'login') || initState
const selectCartPage = (state: any) => get(state, 'cart') || initStateCart

const selectUserLoginPage = () =>
  createSelector(selectLoginPage, selectLoginPage =>
    get(selectLoginPage, 'user')
  )

const selectCartProduct = () =>
  createSelector(selectCartPage, selectCartPage =>
    get(selectCartPage, 'cartProductList')
  )

export { selectUserLoginPage, selectCartProduct }
