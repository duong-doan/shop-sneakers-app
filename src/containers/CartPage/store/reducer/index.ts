import { typeActions } from '../constants/index'
import produce from 'immer'

export const initStateCart = {
  cartProductList: [],
  isRequesting: false,
  error: {}
}

const cartReducer = (state = initStateCart, action) =>
  produce(state, draft => {
    switch (action.type) {
      case typeActions.DECREASE_CART_PRODUCT:
        const idDe = action.payload.id
        const quantityDe = action.payload.result
        const cartDecrease: any = [...draft.cartProductList]
        const productItemSameDe = cartDecrease.find(item => item.id === idDe)
        productItemSameDe.quantity = quantityDe
        productItemSameDe.price_current = quantityDe * productItemSameDe.price
        draft.cartProductList = cartDecrease
        break

      case typeActions.INCREASE_CART_PRODUCT:
        const idIn = action.payload.id
        const quantityIn = action.payload.result
        const cartIncrease: any = [...draft.cartProductList]
        const productItemSameIn = cartIncrease.find(item => item.id === idIn)
        productItemSameIn.quantity = quantityIn
        productItemSameIn.price_current = quantityIn * productItemSameIn.price
        draft.cartProductList = cartIncrease
        break

      case typeActions.ID_DELETE_PRODUCT:
        const cartDeleteProduct = [...draft.cartProductList]
        const indexDel = cartDeleteProduct.findIndex(
          (product: any) => product.id === action.payload
        )
        cartDeleteProduct.splice(indexDel, 1)
        draft.cartProductList = cartDeleteProduct
        break

      // get cart api

      case typeActions.GET_CART_PROGRESS_API:
        draft.isRequesting = true
        break

      case typeActions.GET_CART_PROGRESS_API_SUCCESS:
        const getCartProductList = action.payload.items.map(item => {
          return { ...item, price_current: item.price * item.quantity }
        })
        draft.cartProductList = getCartProductList
        draft.isRequesting = false
        break

      case typeActions.GET_CART_PROGRESS_API_FAIL:
        draft.error = action.payload
        draft.isRequesting = false
        break
    }
  })

export default cartReducer
