import React, { Fragment } from 'react'

import ContentLoader from 'react-content-loader'

const LoadProductSale = () => {
  return (
    <Fragment>
      <div className='content-loader__product-sale__PC'>
        <ContentLoader
          backgroundColor='#e9e2e2'
          foregroundColor='#dedede'
          width={'100%'}
          height={'750px'}
        >
          <rect x='20%' y='150' rx='3' ry='3' width='10%' height='20' />
          <rect x='10%' y='200' rx='3' ry='3' width='30%' height='40' />
          <rect x='4%' y='270' rx='4' ry='4' width='42%' height='130' />
          <rect x='10%' y='420' rx='4' ry='4' width='12%' height='50' />
          <rect x='26%' y='420' rx='4' ry='4' width='12%' height='50' />
          <rect x='12%' y='520' rx='4' ry='4' width='25%' height='60' />

          <rect x='50%' y='0' rx='5' ry='5' width='50%' height='90%' />
        </ContentLoader>
      </div>

      <div className='content-loader__product-sale__tablet'>
        <ContentLoader
          backgroundColor='#e9e2e2'
          foregroundColor='#dedede'
          width={'100%'}
          height={'1500px'}
        >
          <rect x='40%' y='150' rx='3' ry='3' width='20%' height='20' />
          <rect x='25%' y='200' rx='3' ry='3' width='50%' height='40' />
          <rect x='10%' y='270' rx='4' ry='4' width='80%' height='130' />
          <rect x='25%' y='420' rx='4' ry='4' width='20%' height='50' />
          <rect x='50%' y='420' rx='4' ry='4' width='20%' height='50' />
          <rect x='22%' y='520' rx='4' ry='4' width='52%' height='60' />

          <rect x='0' y='700' rx='5' ry='5' width='100%' height='600' />
        </ContentLoader>
      </div>

      <div className='content-loader__product-sale__mobile'>
        <ContentLoader
          backgroundColor='#e9e2e2'
          foregroundColor='#dedede'
          width={'100%'}
          height={'750px'}
        >
          <rect x='40%' y='20' rx='3' ry='3' width='20%' height='20' />
          <rect x='25%' y='60' rx='3' ry='3' width='50%' height='40' />
          <rect x='10%' y='120' rx='4' ry='4' width='80%' height='130' />
          <rect x='25%' y='260' rx='4' ry='4' width='20%' height='50' />
          <rect x='50%' y='260' rx='4' ry='4' width='20%' height='50' />
          <rect x='22%' y='340' rx='4' ry='4' width='52%' height='60' />

          <rect x='0' y='420' rx='5' ry='5' width='100%' height='375' />
        </ContentLoader>
      </div>
    </Fragment>
  )
}

export default LoadProductSale
