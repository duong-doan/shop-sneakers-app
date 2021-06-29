import { createSelector } from 'reselect'
import { initialState } from '../reducer/index'
import { get } from 'lodash'
import { initState } from '../../../Auth/Login/store/reducer/index'

const selectHomePage = (state: any) => get(state, 'home') || initialState
const selectUserLoginPage = (state: any) => get(state, 'login') || initState

const selectUserLogin = () =>
  createSelector(selectUserLoginPage, selectUserLoginPage =>
    get(selectUserLoginPage, 'user')
  )

const selectIsRequesting = () =>
  createSelector(selectHomePage, selectHomePage =>
    get(selectHomePage, 'isRequesting')
  )

const selectProductItem = () =>
  createSelector(selectHomePage, selectHomePage =>
    get(selectHomePage, 'productItem')
  )

const selectAllProductCategoryId2 = () =>
  createSelector(selectHomePage, selectHomePage =>
    get(selectHomePage.allProductsCategory, 'arr_category_id_2')
  )
const selectAllProductCategoryId10 = () =>
  createSelector(selectHomePage, selectHomePage =>
    get(selectHomePage.allProductsCategory, 'arr_category_id_10')
  )

export {
  selectHomePage,
  selectProductItem,
  selectAllProductCategoryId2,
  selectAllProductCategoryId10,
  selectUserLogin,
  selectIsRequesting
}
