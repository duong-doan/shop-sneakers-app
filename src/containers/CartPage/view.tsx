import { motion } from 'framer-motion'
import React, { Fragment, useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import CartNextBtn from '../../components/CartNextBtn/index'
import CartPageShip from '../../components/CartPageShip/index'
import CartProductItem from '../../components/CartProductItem'
import CartStatus from '../../components/CartStatus/index'
import Header from '../../layouts/MainLayout/Header'
import * as actions from './store/actions/index'
import { selectCartProduct, selectUserLoginPage } from './store/selectors/index'

function CartPage(props) {
  const { getCartProduct, getUserLogin } = props
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [cart, setCart] = useState<any[]>([])
  const [status, setStatus] = useState(1)
  const dispatch = useDispatch()

  const totalPriceCur = getCartProduct.reduce((acc, cur) => {
    return (acc += cur.price_current)
  }, 0)

  useEffect(() => {
    dispatch(actions.getCartProgressApi())
    setIsAuthenticated(false)
  }, [])

  useEffect(() => {
    getUserLogin.length !== 0
      ? setIsAuthenticated(true)
      : setIsAuthenticated(false)
  }, [getUserLogin])

  useEffect(() => {
    setCart(getCartProduct)
  }, [getCartProduct])

  const handleClickNext = () => {
    setStatus(prev => prev + 1)
  }

  const handleClickPrev = () => {
    setStatus(prev => prev - 1)
  }

  return (
    <Fragment>
      <Header isHomepage={false} />

      <div className='cart-page'>
        <CartStatus status={status} />
        {status === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className='cart-page__checkout'
          >
            <section className='checkout'>
              <div className='checkout__wrap__cart-item'>
                {isAuthenticated ? (
                  cart.map((product, index) => (
                    <CartProductItem
                      key={index}
                      name={product.product.name}
                      quantity={product.quantity}
                      price={product.price}
                      priceIncrement={product.price_current}
                      id={product.id}
                      onDelete={() => {
                        dispatch(actions.deleteProductItem(product.id))
                      }}
                    />
                  ))
                ) : (
                  <img
                    src='https://i.imgur.com/Drj57qu.png'
                    style={{ display: 'flex', margin: 'auto' }}
                  />
                )}
              </div>

              <div className='checkout__total'>
                <div className='checkout__total__wrap'>
                  <div className='checkout__total__title'>
                    <i className='far fa-clock'></i>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                  </div>

                  <p className='checkout__total__price'>
                    Total Value: <span>$ {totalPriceCur}.00</span>{' '}
                  </p>
                  <Link to='' className='checkout__total__refresh'>
                    <i className='fas fa-sync-alt'></i>
                  </Link>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {status === 2 && <CartPageShip isAuthenticate={isAuthenticated} />}
        <CartNextBtn
          onClickNext={() => handleClickNext()}
          onClickPrev={() => handleClickPrev()}
        />

        <section className='payment'></section>
      </div>
    </Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  getUserLogin: selectUserLoginPage(),
  getCartProduct: selectCartProduct()
})

export default connect(mapStateToProps, null)(CartPage)
