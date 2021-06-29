import { get } from 'lodash'
import { createSelector } from 'reselect'
import { initState } from '../../../Auth/Login/store/reducer/index'
import { initStateCart } from '../reducer/index'

const selectLoginPage = (state: any) => get(state, 'login') || initState
const selectCartPage = (state: any) => get(state, 'cart') || initStateCart

const selectCartProduct = () =>
  createSelector(selectCartPage, selectCartPage =>
    get(selectCartPage, 'cartProductList')
  )

const selectUserLoginPage = () =>
  createSelector(selectLoginPage, selectLoginPage =>
    get(selectLoginPage, 'user')
  )

export { selectCartProduct, selectUserLoginPage }
