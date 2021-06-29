import React from 'react'
const CategoryPage = React.lazy(() => import('../containers/CategoryPage/view'))

const categoryRouter = [
  {
    path: '/category',
    name: 'CategoryPage',
    Component: CategoryPage,
    exact: true,
    breadcrumb: 'Category'
  }
]

export default categoryRouter
