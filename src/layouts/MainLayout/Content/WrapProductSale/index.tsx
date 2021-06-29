import React from 'react'
import ImgShowProductBox from '../../../../components/ImgShowProductBox/index'
import ProductSaleBox from '../../../../components/ProductSaleBox/index'

function WrapProductSale({ productItem }) {
  return (
    <section className='wrap-product-sale'>
      <ProductSaleBox
        name={productItem.name}
        price={productItem.price}
        discount={productItem.discount}
      />
      <ImgShowProductBox
        imgUrl={productItem.images ? productItem.images[0].url : ''}
      />
    </section>
  )
}

export default WrapProductSale
