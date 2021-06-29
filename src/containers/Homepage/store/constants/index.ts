export const typeActions = {
  GET_PRODUCT_ITEM: 'GET_PRODUCT_ITEM',
  GET_PRODUCT_ITEM_SUCCESS: 'GET_PRODUCT_ITEM_SUCCESS',
  GET_PRODUCT_ITEM_FAIL: 'GET_PRODUCT_ITEM_FAIL',
  GET_ALL_PRODUCT_CATEGORY_ID: 'GET_ALL_PRODUCT_CATEGORY_ID',
  GET_ALL_PRODUCT_CATEGORY_ID_SUCCESS: 'GET_ALL_PRODUCT_CATEGORY_ID_SUCCESS',
  GET_ALL_PRODUCT_CATEGORY_ID_FAIL: 'GET_ALL_PRODUCT_CATEGORY_ID_FAIL'
}

export const urlApi = {
  // chosse 1 product make show detail product
  GET_PRODUCT_DETAIL: '/products/',
  // filter product same attr
  GET_ALL_PRODUCT: '/products',
  //get all product per page
  GET_PRODUCT_CATEGORY_ID_2: 'products?category_id=2',
  GET_PRODUCT_CATEGORY_ID_10: 'products?category_id=10'
}
