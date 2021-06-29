import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import { Spinner } from 'reactstrap'

const InfoProductDetail = props => {
  const {
    productItem,
    quantityProduct,
    onClickDecrease,
    onClickIncrease,
    onClickBuy,
    onClickLike,
    isLoading
  } = props
  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className='wrap__info'
      >
        <div className='product-detail__info'>
          <h6>LIFESTYLE</h6>
          <h1>{productItem.name}</h1>

          <div className='rating'>
            <ul>
              <li>
                <i className='fas fa-star'></i>
              </li>
              <li>
                <i className='fas fa-star'></i>
              </li>
              <li>
                <i className='fas fa-star'></i>
              </li>
              <li>
                <i className='fas fa-star'></i>
              </li>
              <li>
                <i className='fas fa-star-half-alt'></i>
              </li>
            </ul>

            <span>23 reviews</span>
          </div>

          <div className='wrap__attr'>
            <div className='wrap__attr__color'>
              <h6>COLORS:</h6>
              <ul>
                {productItem.colors.map((color: any, index) => (
                  <li
                    key={index}
                    style={{ backgroundColor: `${color.color_name}` }}
                  ></li>
                ))}
              </ul>
            </div>

            <div className='wrap__attr__size'>
              <h6>SIZE:</h6>
              <ul>
                {productItem.sizes.map((size: any, index) => (
                  <li key={index}>{size.size_name}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className='wrap__payment'>
            <div className='payment__price'>
              <div className='payment__price__detail'>
                <h4>${productItem.price}.00</h4>
                <span>{productItem.price - productItem.discount}.00</span>
              </div>
              <div className='payment__discount'>
                -{((productItem.discount / productItem.price) * 100).toFixed(0)}
                %
              </div>
            </div>

            <div className='payment__quantity'>
              <ul>
                <li>
                  <button
                    disabled={quantityProduct <= 1 ? true : false}
                    onClick={onClickDecrease}
                    className='payment__quantity__btn'
                  >
                    -
                  </button>
                </li>
                <li className='center'>{quantityProduct}</li>
                <li>
                  <button
                    onClick={onClickIncrease}
                    className='payment__quantity__btn'
                  >
                    +
                  </button>
                </li>
              </ul>
              <button onClick={() => onClickBuy()}>
                {isLoading ? (
                  <Spinner />
                ) : (
                  <i className='fas fa-cart-arrow-down'></i>
                )}
                Buy
              </button>
            </div>
          </div>

          <ul className='wrap__add'>
            <li>
              <i className='far fa-copy'></i>Compare
            </li>
            <li onClick={() => onClickLike()}>
              <i className='far fa-heart'></i>Add to Wish List
            </li>
          </ul>
        </div>

        <div className='product-detail__img'>
          <img src={productItem && productItem.images[0].url} alt='sneaker' />
        </div>

        <div className='product-detail__img__describe'>
          {productItem.images.map((image, index) => (
            <img key={index} src={image.url} alt='sneakers' />
          ))}
        </div>
      </motion.div>
    </Fragment>
  )
}

export default InfoProductDetail
