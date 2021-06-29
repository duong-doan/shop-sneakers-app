import React from 'react'
const ProductDetailPage = React.lazy(
  () => import('../containers/ProductDetailPage/view')
)

const productRouter = [
  {
    path: '/product_detail/:id',
    name: 'ProductDetailPage',
    Component: ProductDetailPage,
    exact: true,
    breadcrumb: 'Product Detail',
    children: []
  }
]

export default productRouter
