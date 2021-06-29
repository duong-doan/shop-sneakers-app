export const typeActions = {
  GET_DATA_PER_PAGE: 'GET_DATA_PER_PAGE',
  GET_DATA_SUCCESS_PER_PAGE: 'GET_DATA_SUCCESS_PER_PAGE',
  GET_DATA_FAIL_PER_PAGE: 'GET_DATA_FAILURE',
  GET_DATA_CATEGORY_ID: 'GET_DATA_CATEGORY_ID',
  GET_DATA_CATEGORY_ID_SUCCESS: 'GET_DATA_CATEGORY_ID_SUCCESS',
  GET_DATA_CATEGORY_ID_FAIL: 'GET_DATA_CATEGORY_ID_FAIL',
  GET_CATEGORY_LIST_NAME: 'GET_CATEGORY_LIST_NAME',
  GET_CATEGORY_LIST_NAME_SUCCESS: 'GET_CATEGORY_LIST_NAME_SUCCESS',
  GET_CATEGORY_LIST_NAME_FAIL: 'GET_CATEGORY_LIST_NAME_FAIL',
  GET_VALUE_FILTER: 'GET_VALUE_FILTER',
  VALUE_BRANDS: 'VALUE_BRANDS',
  VALUE_PRICE: 'VALUE_PRICE',
  VALUE_COLOR: 'VALUE_COLOR',
  VALUE_SIZE: 'VALUE_SIZE',
  GET_VALUE_SEARCH: 'GET_VALUE_SEARCH',
  GET_VALUE_SEARCH_SUCCESS: 'GET_VALUE_SEARCH_SUCCESS',
  GET_VALUE_SEARCH_FAIL: 'GET_VALUE_SEARCH_FAIL'
}

export const urlApi = {
  // chosse 1 product make show detail product
  GET_PRODUCT_DETAIL: '/products/',
  // filter product same attr
  GET_ALL_PRODUCT: '/products',
  // reviews product in product detail page
  GET_LIST_REVIEWS: '/products/4/reviews',
  // vote product
  GET_ASSESSMENT_REVIEW: '/products/4/assessment-reviews',
  // list name categories
  GET_LIST_CATEGORY_NAME: '/categories',
  GET_DATA_CATEGORY_ID: '/products?category_id=',
  //get all product per page
  GET_PRODUCT_PAGE_1: '/products?page=1',
  GET_PRODUCT_PAGE_2: '/products?page=2',
  GET_PRODUCT_PAGE_3: '/products?page=3',
  GET_PRODUCT_PAGE_4: '/products?page=4',
  GET_PRODUCT_PAGE_5: '/products?page=5'
}
