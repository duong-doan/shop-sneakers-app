import React from 'react'
const HomePage = React.lazy(() => import('../containers/Homepage/view'))

const homeRouter = [
  {
    path: '/',
    name: 'HomePage',
    Component: HomePage,
    exact: true,
    breadcrumb: 'Home'
  }
]

export default homeRouter
