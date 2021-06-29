import React from 'react'
import { motion } from 'framer-motion'

interface ProductSaleBoxTypes {
  name: ''
  price: number
  discount: number
}

function ProductSaleBox(props: ProductSaleBoxTypes) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className='product-sale-box'
    >
      <span>DEAL OF DAY</span>
      <h2>{props.name}</h2>
      <p>
        Suspendisse massa leo, vesti Suspendisse massa leo, vesti Suspendisse
        massa leo, vesti Suspendisse massa leo, vesti Suspendisse massa leo,
        vesti Suspendisse massa leo, vestiSuspendisse massa leo,
        vestiSuspendisse massa leo, vesti
      </p>
      <div className='product-sale-box__money'>
        <h1>$ {props.price}</h1>
        <span>$ {props.price - props.discount}</span>
      </div>
      <div className='product-sale-box__times'>
        <div className='product-sale-box__times__item'>
          <h4>01</h4>
          <span>DAY</span>
        </div>
        <div className='product-sale-box__times__item'>
          <h4>23</h4>
          <span>HOURS</span>
        </div>
        <div className='product-sale-box__times__item'>
          <h4>55</h4>
          <span>MINS</span>
        </div>
        <div className='product-sale-box__times__item'>
          <h4>32</h4>
          <span>SECS</span>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductSaleBox
