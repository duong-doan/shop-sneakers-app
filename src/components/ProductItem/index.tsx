import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as actions from '../../containers/ProductDetailPage/store/actions/index'
import { motion } from 'framer-motion'

interface ProductItemType {
  name: string
  price: number
  id: number
  imgUrl: string
}

function ProductItem(props: ProductItemType) {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleClickProductItem = e => {
    e.isPropagationStopped()
    dispatch(actions.getIdProduct(props.id))
    history.push(`/product_detail/${props.id}`)
  }

  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='product-item'
      >
        <div className='product-item__wrap'>
          <img src={props.imgUrl} alt='sneaker' />
          <div className='product-item__wrap__info'>
            <h5>{props.name}</h5>
            <span>$ {props.price}.00</span>
          </div>
        </div>

        <div onClick={handleClickProductItem}>
          <div className='product-item__hover'>
            <h6>LIFESTYLE</h6>
            <button>
              <i className='fas fa-cart-arrow-down'></i>Buy
            </button>
            <div className='hover__icon--copy'>
              <a href=''>
                <i className='far fa-copy'></i>
              </a>
            </div>
            <div className='hover__icon--heart'>
              <a href=''>
                <i className='far fa-heart'></i>
              </a>
            </div>
            <h4>{props.name}</h4>
            <span>$ {props.price}.00</span>
          </div>
        </div>
      </motion.div>
    </Fragment>
  )
}

export default ProductItem
