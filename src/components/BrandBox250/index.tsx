import React from 'react'
import iconBrand from '../../assets/images/icon-brand.png'
import { motion } from 'framer-motion'

function BrandBox250() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className='brand-box-250'
    >
      <img src={iconBrand} alt='' />
    </motion.div>
  )
}

export default BrandBox250
