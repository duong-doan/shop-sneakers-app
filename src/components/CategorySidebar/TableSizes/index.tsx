import React, { useState } from 'react'

const TableSizes = (props: { number: number; onClickedSize: Function }) => {
  const [show, setShow] = useState(false)

  const handleClickSize = () => {
    props.onClickedSize()
    setShow(prev => !prev)
  }

  return (
    <div className='table__item' onClick={handleClickSize}>
      {props.number}
      <div
        className='click__table__item'
        style={{
          transform: `${show ? 'scale(1)' : ''}  `
        }}
      >
        {props.number}
      </div>
    </div>
  )
}

export default TableSizes
