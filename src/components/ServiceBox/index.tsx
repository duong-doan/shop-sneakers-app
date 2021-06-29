import React from 'react'
import { motion } from 'framer-motion'

interface ServiceBoxType {
  url: string
  title: string
  des: string
}

function ServiceBox(props: ServiceBoxType) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className='service-box'
    >
      <img src={props.url} alt='' />
      <h3>{props.title}</h3>
      <p>{props.des}</p>
    </motion.section>
  )
}

export default ServiceBox
