import axiosClient from '../../../utils/axios';

export const getDataApi = (url: string) => {
  return axiosClient.get(url)
    .then((res) => ({
      status: true,
      data: res.data
    }),
    (err) => ({
      status: false,
      errors: {
        errors: {},
        status: err.status
      }
    }))
}
