import { createSelector } from 'reselect'
import { initialState } from '../reducer/index'
import { get } from 'lodash'

const selectCategory = (state: any) => get(state, 'category') || initialState

const selectListProductPerPage = () =>
  createSelector(selectCategory, selectCategory =>
    get(selectCategory, 'listProductsPerPage')
  )

const selectIsRequesting = () =>
  createSelector(selectCategory, selectCategory =>
    get(selectCategory, 'isRequesting')
  )

const selectCategoryIdList = () =>
  createSelector(selectCategory, selectCategory =>
    get(selectCategory, 'categoryIdLists')
  )

const selectCategoryListName = () =>
  createSelector(selectCategory, selectCategory =>
    get(selectCategory, 'listNameCategories')
  )

const selectListSearch = () =>
  createSelector(selectCategory, selectCategory =>
    get(selectCategory, 'listDataSearchBar')
  )
export {
  selectListProductPerPage,
  selectCategoryListName,
  selectCategoryIdList,
  selectListSearch,
  selectIsRequesting
}
