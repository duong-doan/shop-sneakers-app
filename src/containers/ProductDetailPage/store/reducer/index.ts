import produce from 'immer'
import typeActions from '../constants/index'

export const initialState = {
  productItem: {
    name: '',
    colors: [],
    sizes: [],
    price: 0,
    discount: 0,
    images: [{ url: '' }],
    quantity: 1
  },
  listReviews: [],
  listProducts: [],
  listProductAddToCart: [],
  isRequesting: false,
  error: {}
}

const productReducer = (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      // product item detail
      case typeActions.GET_ID_PRODUCT:
        draft.isRequesting = true
        break

      case typeActions.GET_ID_PRODUCT_SUCCESS:
        console.log('reducer product item', action.payload)
        draft.productItem = action.payload
        draft.isRequesting = false
        break

      case typeActions.GET_ID_PRODUCT_FAIL:
        draft.error = action.payload
        draft.isRequesting = false
        break

      // list product render
      case typeActions.GET_LIST_PRODUCT:
        draft.isRequesting = true
        break

      case typeActions.GET_LIST_PRODUCT_SUCCESS:
        draft.listProducts = action.payload
        draft.isRequesting = false
        break

      case typeActions.GET_LIST_PRODUCT_FAIL:
        draft.error = action.payload
        draft.isRequesting = false
        break

      // post like product item
      case typeActions.POST_LIKE_PRODUCT:
        draft.isRequesting = true
        break

      case typeActions.POST_LIKE_PRODUCT_SUCCESS:
        draft.isRequesting = false
        break

      case typeActions.POST_LIKE_PRODUCT_FAIL:
        draft.isRequesting = false
        break

      // get reviews
      case typeActions.GET_REVIEWS_PRODUCT:
        draft.isRequesting = true
        break

      case typeActions.GET_REVIEWS_PRODUCT_SUCCESS:
        draft.listReviews = action.payload
        draft.isRequesting = false
        break

      case typeActions.GET_REVIEWS_PRODUCT_FAIL:
        draft.error = action.payload
        draft.isRequesting = false
        break

      // add to cart
      case typeActions.ADD_TO_CART_API:
        draft.isRequesting = true
        break

      case typeActions.ADD_TO_CART_API_SUCCESS:
        draft.isRequesting = false
        break

      case typeActions.ADD_TO_CART_API_SUCCESS:
        draft.error = action.payload
        draft.isRequesting = false
        break
    }
  })

export default productReducer
