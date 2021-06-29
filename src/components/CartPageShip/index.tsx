import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CartPageShip = props => {
  const { isAuthenticate } = props
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className='cart-page__ship'
    >
      <section className='ship'>
        <div className='ship__wrap'>
          {!isAuthenticate ? (
            <div className='ship__login'>
              <h4>Sign in</h4>
              <div className='ship__login__form'>
                <form>
                  <input type='text' placeholder='E-mail' />
                  <input type='text' placeholder='Password' />
                  <button>Sign in</button>
                </form>
              </div>
              <Link to=''>Forgot your password</Link>
            </div>
          ) : (
            <h1>WELCOME</h1>
          )}

          <div className='ship__separate'>
            <span>or</span>
          </div>

          <div className='ship__info'>
            <h4>Fill all the fields</h4>
            <div className='ship__info__form'>
              <form action=''>
                <div className='form__wrap'>
                  <input
                    type='text'
                    className='input1'
                    placeholder='First Name'
                  />
                  <input
                    type='text'
                    className='input2'
                    placeholder='Second Name'
                  />
                </div>
                <div className='form__wrap'>
                  <input type='text' className='input3' placeholder='E-mail' />
                  <input type='text' className='input4' placeholder='Phone' />
                </div>
                <div className='form__wrap'>
                  <input type='text' placeholder='City' />
                  <input type='text' placeholder='Aip/Posctal Code' />
                </div>
                <input type='text' className='input7' placeholder='Address' />
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default CartPageShip
