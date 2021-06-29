import React from 'react'
const CartPage = React.lazy(() => import('../containers/CartPage/view'))

const cartRouter = [
  {
    path: '/cart',
    name: 'CartPage',
    Component: CartPage,
    exact: true,
    breadcrumb: 'Cart'
  }
]

export default cartRouter
