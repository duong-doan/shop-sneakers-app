import React from 'react'
import { Spinner } from 'reactstrap'

function Modal(props: { isOpen: boolean }) {
  return props.isOpen ? (
    <div
      className='modal-manual'
      style={{
        position: 'fixed',
        backgroundColor: 'rgba(0,0,0,0.3)',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 100
      }}
    >
      <Spinner
        style={{
          width: '10rem',
          height: '10rem',
          position: 'absolute',
          top: '30%',
          left: '40%'
        }}
        color='primary'
      />
    </div>
  ) : (
    <div></div>
  )
}

export default Modal
