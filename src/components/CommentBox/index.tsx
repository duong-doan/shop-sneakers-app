import React, { Fragment } from 'react'
import Star from 'react-rating-stars-component'

interface CommentBoxTypes {
  id: number
  name: string
  rating: number
  content: string
  like: number
  dislike: number
  created_at: string
}

function CommentBox(props: CommentBoxTypes) {
  return (
    <Fragment>
      <div className='comment-box'>
        <div className='user'>
          <div className='user__img'></div>
          <div className='user__name'>
            <h4>{props.name}</h4>
            <ul>
              <Star value={props.rating} edit={false} size={26} />
            </ul>
          </div>
        </div>

        <div className='comment'>
          <p>{props.content}</p>
          <div className='comment__like'>
            <div className='comment__like__wrap'>
              <div style={{ color: 'green' }}>
                <i className='fas fa-thumbs-up'></i>
                {props.like}
              </div>
              <div style={{ color: 'red' }}>
                <i className='fas fa-thumbs-down'></i>
                {props.dislike}
              </div>
            </div>
            <span>{props.created_at}</span>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CommentBox
