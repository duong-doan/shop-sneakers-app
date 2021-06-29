import AxiosClient from '../../../../utils/axios'
import CookieHandlerInstance from '../../../../utils/cookie'

export const postLogout = () => {
  AxiosClient.setHeader(<string>CookieHandlerInstance.getCookie('token'))
  return AxiosClient.get('/user/logout').then(
    res => ({
      status: true,
      data: res.data
    }),
    err => {
      return {
        status: false,
        errors: {}
      }
    }
  )
}
