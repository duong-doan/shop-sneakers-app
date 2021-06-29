import axiosClient from '../../../../utils/axios'
import AxiosClient from '../../../../utils/axios'
import CookieHandlerInstance from '../../../../utils/cookie'

export const postRegister = data => {
  AxiosClient.setHeader(<string>CookieHandlerInstance.getCookie('token'))
  return axiosClient
    .post('user/login', data)
    .then(res => ({
      status: true,
      data: res.data
    }))
    .catch(err => {
      console.log('service error', err)
    })
}
