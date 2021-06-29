import React from 'react'
import { Button } from 'reactstrap'
import { motion } from 'framer-motion'

interface GlobalScaleBoxType {
  type: string
  name: string
  width: string
  bgColor: string
}

function GlobalScaleBox(props: GlobalScaleBoxType) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className='global-scale-box'
      style={{
        width: `${props.width}`,
        backgroundColor: `${props.bgColor}`
      }}
    >
      <div className='global-scale-box__wrap'>
        <p>{props.type}</p>
        <h1>{props.name}</h1>
        <Button
          className='btn-global'
          color='primary'
          style={{ backgroundColor: `${props.bgColor}` }}
        >
          More Info
        </Button>
      </div>
    </motion.div>
  )
}

export default GlobalScaleBox
