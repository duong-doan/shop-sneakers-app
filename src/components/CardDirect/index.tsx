import React from 'react'
import { motion } from 'framer-motion'

interface CardDirectType {
  url: string
  title: string
}

function CardDirect(props: CardDirectType) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className='card-direct'
    >
      <img src={props.url} alt='' />
      <h3>{props.title}</h3>
      <p>Suspendisse massa leo, vesti Suspendisse massa leo, </p>
      <a href=''>
        More Product
        <i className='fas fa-arrow-circle-right'></i>
      </a>
    </motion.div>
  )
}

export default CardDirect
