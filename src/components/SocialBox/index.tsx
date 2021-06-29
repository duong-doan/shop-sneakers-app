import React from 'react'
import { motion } from 'framer-motion'

interface SocialBoxType {
  name: string
  number: number
  bgColor: string
  icon: string
}

function SocialBox(props: SocialBoxType) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className='social-box'
      style={{ backgroundColor: `${props.bgColor}` }}
    >
      <i className={`fab fa-${props.icon}`}></i>
      <h6>{props.name}</h6>
      <h1>{props.number}</h1>
      <span>#AgoraStore</span>
    </motion.div>
  )
}

export default SocialBox
