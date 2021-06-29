import React, { useState } from 'react'

interface PaginationCategoryTypes {
  onClickPagination: Function
}

const PaginationCategory = (props: PaginationCategoryTypes) => {
  const [curPage, setCurPage] = useState(1)
  const totalProduct = 50
  const productPerPage = 10
  const totalPage = totalProduct / productPerPage
  const arrTotalPage: number[] = []

  let i: number
  for (i = 1; i <= totalPage; i++) {
    arrTotalPage.push(i)
  }

  const handleClickNumberPage = num => {
    props.onClickPagination(num)
    setCurPage(num)
  }

  const handleClickPagePrev = () => {
    props.onClickPagination(curPage - 1)
    setCurPage(prev => prev - 1)
  }

  const handleClickPageNext = () => {
    props.onClickPagination(curPage + 1)
    setCurPage(prev => prev + 1)
  }

  return (
    <section className='category__pagination'>
      <div className='pagination__space'></div>
      <div className='pagination__main'>
        <div className='pagination__main__left'>
          <button
            onClick={handleClickPagePrev}
            disabled={curPage === 1 ? true : false}
          >
            <i className='fas fa-chevron-left'></i>
          </button>
        </div>

        <ul>
          {arrTotalPage.map((num, index) => (
            <li key={index} onClick={() => handleClickNumberPage(num)}>
              {num}
            </li>
          ))}
        </ul>

        <div className='pagination__main__right'>
          <button
            onClick={handleClickPageNext}
            disabled={
              curPage === arrTotalPage[arrTotalPage.length - 1] ? true : false
            }
          >
            <i className='fas fa-chevron-right'></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default PaginationCategory
