import React, { useState } from 'react'

const CartNextBtn = props => {
  const { onClickPrev, onClickNext } = props
  const [changeStatus, setChangeStatus] = useState(1)

  const handleClickPrev = () => {
    onClickPrev()
    setChangeStatus(prev => {
      return prev - 1
    })
  }

  const handleClickNext = () => {
    onClickNext()
    setChangeStatus(prev => {
      return prev + 1
    })
  }

  return (
    <div className='checkout__next'>
      <div className='prev'>
        <button
          onClick={handleClickPrev}
          disabled={changeStatus <= 1 ? true : false}
        >
          <i className='fas fa-chevron-left'></i>
          PREV STEP
        </button>
      </div>
      <div className='next'>
        <button
          onClick={handleClickNext}
          disabled={changeStatus === 3 ? true : false}
        >
          NEXT STEP
          <i className='fas fa-chevron-right'></i>
        </button>
      </div>
    </div>
  )
}

export default CartNextBtn
