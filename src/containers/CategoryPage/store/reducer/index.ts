import { typeActions } from '../constants'
import produce from 'immer'

export const initialState = {
  listProductsPerPage: [],
  categoryIdLists: [],
  listNameCategories: [],
  filterProducts: {
    valuePrice: {
      min: 50,
      max: 1000
    },
    valueBrands: [],
    valueColors: [],
    valueSizes: []
  },
  listDataFilterDone: [],
  listDataSearchBar: [],
  isRequesting: false,
  error: {}
}

const categoryReducer = (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case typeActions.GET_DATA_PER_PAGE:
        draft.isRequesting = true
        break

      case typeActions.GET_DATA_SUCCESS_PER_PAGE:
        const { data } = action.payload
        draft.listProductsPerPage = data
        draft.isRequesting = false
        break

      case typeActions.GET_DATA_FAIL_PER_PAGE:
        draft.error = action.payload
        draft.isRequesting = false
        break

      case typeActions.GET_DATA_CATEGORY_ID:
        draft.isRequesting = true
        break

      case typeActions.GET_DATA_CATEGORY_ID_SUCCESS:
        draft.categoryIdLists = action.payload.data
        draft.isRequesting = false
        break

      case typeActions.GET_DATA_CATEGORY_ID_FAIL:
        draft.error = action.payload
        draft.isRequesting = false
        break

      case typeActions.GET_CATEGORY_LIST_NAME:
        draft.isRequesting = true
        break

      case typeActions.GET_CATEGORY_LIST_NAME_SUCCESS:
        draft.listNameCategories = action.payload.data
        draft.isRequesting = false
        break

      case typeActions.GET_CATEGORY_LIST_NAME_FAIL:
        draft.error = action.payload
        draft.isRequesting = false
        break

      case typeActions.GET_VALUE_SEARCH:
        draft.isRequesting = true
        break

      case typeActions.GET_VALUE_SEARCH_SUCCESS:
        draft.listDataSearchBar = action.payload
        draft.isRequesting = false
        break

      case typeActions.GET_VALUE_SEARCH_FAIL:
        draft.error = action.payload
        draft.isRequesting = false
        break
    }
  })

//     case typeActions.VALUE_PRICE:
//       return {
//         ...state,
//         filterProducts: {
//           ...state.filterProducts,
//           valuePrice: action.payload
//         }
//       }

//     case typeActions.VALUE_COLOR:
//       return {
//         ...state,
//         filterProducts: {
//           ...state.filterProducts,
//           valueColors: action.payload
//         }
//       }

//     case typeActions.VALUE_BRANDS:
//       return {
//         ...state,
//         filterProducts: {
//           ...state.filterProducts,
//           valueBrands: action.payload
//         }
//       }

//     case typeActions.VALUE_SIZE:
//       return {
//         ...state,
//         filterProducts: {
//           ...state.filterProducts,
//           valueSize: action.payload
//         }
//       }

//     case typeActions.GET_VALUE_FILTER:
//       return {
//         ...state
//       }

export default categoryReducer
