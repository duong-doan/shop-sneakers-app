import CookieHandlerInstance from '../../../utils/cookie'
import AxiosClient from '../../../utils/axios'

export const getDataApi = (url: string) => {
  return AxiosClient.get(url).then(
    res => ({
      status: true,
      data: res.data
    }),
    err => ({
      status: false,
      errors: {
        errors: {},
        status: err.status
      }
    })
  )
}

export const postLikeProductApi = (data: any) => {
  AxiosClient.setHeader(<string>CookieHandlerInstance.getCookie('token'))
  return AxiosClient.post('/user/favorite-products', data).then(
    res => ({
      status: true,
      data: res.data
    }),
    err => {
      console.log(err)
    }
  )
}

export const getFavoriteProduct = () => {
  AxiosClient.setHeader(<string>CookieHandlerInstance.getCookie('token'))
  return AxiosClient.get('/user/favorite-products').then(
    res => ({
      status: true,
      data: res.data
    }),
    err => {
      console.log(err)
    }
  )
}

export const addToCartApi = data => {
  AxiosClient.setHeader(<any>CookieHandlerInstance.getCookie('token'))
  return AxiosClient.post('/user/cart-items', data).then(
    res => ({
      status: true,
      data: res.data
    }),
    err => ({
      status: false,
      errors: {
        errors: {},
        status: err.status
      }
    })
  )
}

export const getCartApiService = () => {
  AxiosClient.setHeader(<string>CookieHandlerInstance.getCookie('token'))
  return AxiosClient.get('/user/carts/me').then(
    res => ({
      status: true,
      data: res.data
    }),
    err => ({
      status: false,
      errors: {
        errors: {},
        status: err.status
      }
    })
  )
}
