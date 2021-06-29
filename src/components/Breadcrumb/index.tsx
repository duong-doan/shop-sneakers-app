import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({ crumbs }) => {
  const isCurrentLink = index => {
    return crumbs.length - 1 === index
  }

  return (
    <ol className='breadcrumb'>
      {crumbs.map(({ name, path }, key) =>
        isCurrentLink(key) ? (
          <li key={key}>
            <span className='bold'>{name}</span>
          </li>
        ) : (
          <li key={key}>
            <Link to={path}>{name}</Link>
            <i className='fas fa-chevron-right'></i>
          </li>
        )
      )}
    </ol>
  )
}

export default Breadcrumb
