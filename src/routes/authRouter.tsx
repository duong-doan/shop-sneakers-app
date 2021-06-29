import React from 'react'
const Login = React.lazy(() => import('../containers/Auth/Login/view'))
const Register = React.lazy(() => import('../containers/Auth/Register/view'))

export const authRouter = [
  {
    path: '/user/login',
    name: 'Login',
    Component: Login,
    exact: true
  },
  {
    path: '/user/register',
    name: 'Register',
    Component: Register,
    exact: true
  }
]

// export default authRouter
