import React from 'react'
import { motion } from 'framer-motion'

interface ImgShowProductType {
  imgUrl: string
}

function ImgShowProduct(props: ImgShowProductType) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className='img-show'
    >
      <img src={props.imgUrl} style={{ width: '100%', height: '100%' }} />
    </motion.div>
  )
}

export default ImgShowProduct
