import typeActions from '../constants/index'

// get product id

export const getIdProduct = (id: number) => {
  return {
    type: typeActions.GET_ID_PRODUCT,
    payload: id
  }
}

export const getIdProductSuccess = (data: any) => {
  return {
    type: typeActions.GET_ID_PRODUCT_SUCCESS,
    payload: data
  }
}

export const getIdProductFail = (error: any) => {
  return {
    type: typeActions.GET_ID_PRODUCT_FAIL,
    payload: error
  }
}

// get reviews

export const getReviews = (id: number) => {
  return {
    type: typeActions.GET_REVIEWS_PRODUCT,
    payload: id
  }
}

export const getReviewsSuccess = (data: any) => {
  return {
    type: typeActions.GET_REVIEWS_PRODUCT_SUCCESS,
    payload: data
  }
}

export const getReviewsFail = error => {
  return {
    type: typeActions.GET_REVIEWS_PRODUCT_FAIL,
    payload: error
  }
}

// get list product render

export const getListProduct = () => {
  return {
    type: typeActions.GET_LIST_PRODUCT
  }
}

export const getListProductSuccess = (data: any[]) => {
  return {
    type: typeActions.GET_LIST_PRODUCT_SUCCESS,
    payload: data
  }
}

export const getListProductFail = (error: any) => {
  return {
    type: typeActions.GET_ID_PRODUCT_FAIL,
    payload: error
  }
}

// post like of product

export const postLikeProduct = (id: number) => {
  return {
    type: typeActions.POST_LIKE_PRODUCT,
    payload: id
  }
}

export const postLikeProductSuccess = (data: any) => {
  return {
    type: typeActions.POST_LIKE_PRODUCT_SUCCESS
  }
}

export const postLikeProductFail = error => {
  return {
    type: typeActions.POST_LIKE_PRODUCT_FAIL,
    payload: error
  }
}

// export const getProductFavorite = () => {
//   return {
//     type: typeActions.GET_PRODUCT_FAVORITE
//   }
// }

// add to cart API = btn buy

export const addToCartApi = data => {
  return {
    type: typeActions.ADD_TO_CART_API,
    payload: data
  }
}

export const addToCartApiSuccess = data => {
  return {
    type: typeActions.ADD_TO_CART_API_SUCCESS,
    payload: data
  }
}

export const addToCartApiFail = (error: any) => {
  return {
    type: typeActions.ADD_TO_CART_API_FAIL,
    payload: error
  }
}
