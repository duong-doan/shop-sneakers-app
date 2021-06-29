import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../../containers/CartPage/store/actions/index'

const CartProductItem = props => {
  const dispatch = useDispatch()
  const { name, price, quantity, priceIncrement, id, onDelete } = props
  const [quantityLocal, setQuantityLocal] = useState(quantity)
  const [priceIncrementLocal, setPriceIncrementLocal] = useState(priceIncrement)

  const handleDecreaseProduct = () => {
    setQuantityLocal(prev => {
      const result = prev - 1
      dispatch(
        actions.decreaseCartProduct({
          result,
          id
        })
      )
      return prev - 1
    })
    setPriceIncrementLocal(prev => (prev -= price))
  }

  const handleIncreaseProduct = () => {
    setQuantityLocal(prev => {
      const result = prev + 1
      dispatch(
        actions.increaseCartProduct({
          result,
          id
        })
      )
      return prev + 1
    })
    setPriceIncrementLocal(prev => (prev += price))
  }

  return (
    <div className='cart-product-item'>
      <div className='wrap'>
        <div className='img'></div>
        <div className='name'>
          <h6>{name}</h6>
          <span>LIFESTYLE</span>
        </div>
        <p className='price'>${price}.00</p>
        <div className='quantity'>
          <ul>
            <li>
              <button
                disabled={quantityLocal <= 1 ? true : false}
                onClick={handleDecreaseProduct}
              >
                -
              </button>
            </li>
            <li className='center'>{quantityLocal}</li>
            <li>
              <button onClick={handleIncreaseProduct}>+</button>
            </li>
          </ul>
        </div>
        <p className='total-price'>$ {priceIncrement}.00</p>
        <div className='delete' onClick={onDelete}>
          <i className='fas fa-times'></i>
        </div>
      </div>
      <div className='cart-product-item__border'></div>
    </div>
  )
}

export default CartProductItem
