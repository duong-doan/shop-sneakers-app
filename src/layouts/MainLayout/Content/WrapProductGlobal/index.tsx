import React, { Fragment } from 'react'
import iconStar from '../../../../assets/images/icon-card-direct-star.png'
import CardDirect from '../../../../components/CardDirect/index'
import GlobalScaleBox from '../../../../components/GlobalScaleBox/index'
import ProductItem from '../../../../components/ProductItem/index'

interface WrapProductGlobalType {
  isCardDirect: boolean
  isGlobalScaleBox: boolean
  isNormal: boolean
  listProduct: any[]
}

function WrapProductGlobal(props: WrapProductGlobalType) {
  return (
    <Fragment>
      {props.isCardDirect ? (
        <div className='wrap-product-item'>
          <CardDirect url={iconStar} title='POPULAR PRODUCT' />
          {props.listProduct.slice(0, 3).map((product, index) => (
            <ProductItem
              key={index}
              name={product.name}
              price={product.price}
              id={product.id}
              imgUrl={product.images[0].url}
            />
          ))}
        </div>
      ) : (
        ''
      )}
      {props.isGlobalScaleBox ? (
        <div className='wrap-scale-box'>
          {props.listProduct.slice(4, 6).map((product, index) => (
            <ProductItem
              key={index}
              name={product.name}
              price={product.price}
              id={product.id}
              imgUrl={product.images[0].url}
            />
          ))}
          <GlobalScaleBox
            type='LIFESTYLE'
            name='WATERFLY: Running Shoes'
            width='50%'
            bgColor='#50a3e4'
          />
        </div>
      ) : (
        ''
      )}
      {props.isNormal ? (
        <div className='wrap-product-normal'>
          {props.listProduct.slice(6, 10).map((product, index) => (
            <ProductItem
              key={index}
              name={product.name}
              price={product.price}
              id={product.id}
              imgUrl={product.images[0].url}
            />
          ))}
        </div>
      ) : (
        ''
      )}
    </Fragment>
  )
}

export default WrapProductGlobal
