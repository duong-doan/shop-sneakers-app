import React from 'react'
import { motion } from 'framer-motion'

const CartStatus = props => {
  const { status } = props

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className='cart__status'
    >
      <div className={`${status === 1 ? `active` : ''}`}>
        {status === 1 ? (
          <i className='fas fa-hourglass-half'></i>
        ) : (
          <i className='fas fa-check'></i>
        )}
        <h5>CHECKOUT</h5>
      </div>

      <div className={`${status === 2 ? `active` : ''}`}>
        {status === 2 ? (
          <i className='fas fa-hourglass-half'></i>
        ) : (
          <i className='fas fa-check'></i>
        )}
        <h5>SHIPPING INFOMATION</h5>
      </div>

      <div className={`${status === 3 ? `active` : ''}`}>
        {status === 3 ? (
          <i className='fas fa-hourglass-half'></i>
        ) : (
          <i className='fas fa-check'></i>
        )}
        <h5>PAYMENT</h5>
      </div>
    </motion.section>
  )
}

export default CartStatus
