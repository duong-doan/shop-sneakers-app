import CookieHandlerInstance from '../../../utils/cookie'
import AxiosClient from '../../../utils/axios'

export const getCartProgressApi = () => {
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
