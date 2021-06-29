import React from 'react'
import { motion } from 'framer-motion'

function ProductBox250() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className='product-box-250'
    >
      <h1>250x250</h1>
    </motion.div>
  )
}

export default ProductBox250
