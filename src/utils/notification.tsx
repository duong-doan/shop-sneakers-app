import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export default toast

export const CustomToast = (props: {
  title: string
  onCloseToast?: any
  isShowBtn?: boolean
  titleBtn?: any
}) => {
  const { title, onCloseToast, isShowBtn, titleBtn } = props
  return (
    <div
      className='custom-toast'
      style={{ fontSize: '1.2rem', textAlign: 'center' }}
    >
      {title}
      <br />
      {isShowBtn ? (
        <button
          onClick={onCloseToast}
          style={{
            outline: 'none',
            border: 'none',
            borderRadius: '10px',
            padding: '0.6rem 1.2rem'
          }}
        >
          {titleBtn}
        </button>
      ) : (
        ''
      )}
    </div>
  )
}
