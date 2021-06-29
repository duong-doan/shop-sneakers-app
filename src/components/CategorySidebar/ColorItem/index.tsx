import React, { useState } from 'react'

const ColorItem = (props: { color: string; onClickColor: any }) => {
  const [show, setShow] = useState(false)

  const handleClickColor = () => {
    setShow(prev => !prev)
    props.onClickColor(show)
  }

  return (
    <div
      className='color-item'
      onClick={handleClickColor}
      style={{
        backgroundColor: `${props.color}`
      }}
    >
      <i
        className='fas fa-check'
        style={{
          display: `${show ? 'block' : 'none'}`,
          fontSize: '0.8rem',
          color: '#d6d3d6'
        }}
      ></i>
    </div>
  )
}

export default ColorItem
