import React from 'react'
import { motion } from 'framer-motion'

function ProductBox375() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className='product-box-375'
    >
      <h1>375x375</h1>
    </motion.div>
  )
}

export default ProductBox375
