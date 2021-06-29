import { typeActions } from '../constants'
import produce from 'immer'

export const initialState = {
  listProducts: [],
  productItem: {},
  allProductsCategory: {
    arr_category_id_2: [],
    arr_category_id_10: []
  },
  isRequesting: false,
  error: {}
}

const homeReducer = (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case typeActions.GET_PRODUCT_ITEM:
        draft.isRequesting = true
        break

      case typeActions.GET_PRODUCT_ITEM_SUCCESS:
        draft.productItem = action.payload.data
        draft.isRequesting = false
        break

      case typeActions.GET_PRODUCT_ITEM_FAIL:
        draft.error = action.payload
        draft.isRequesting = false
        break

      case typeActions.GET_ALL_PRODUCT_CATEGORY_ID:
        draft.isRequesting = true
        break

      case typeActions.GET_ALL_PRODUCT_CATEGORY_ID_SUCCESS:
        draft.allProductsCategory.arr_category_id_10 =
          action.payload.category_id_10
        draft.allProductsCategory.arr_category_id_2 =
          action.payload.category_id_2
        draft.isRequesting = false
        break

      case typeActions.GET_ALL_PRODUCT_CATEGORY_ID_FAIL:
        draft.error = action.payload
        draft.isRequesting = false
        break
    }
  })

export default homeReducer
