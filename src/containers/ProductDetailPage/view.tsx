import LoadProductDetail from '../../components/ContentLoader/ContentLoaderProductPage/LoadProductDetail'
import { motion } from 'framer-motion'
import React, { useEffect, useState, Fragment } from 'react'
import Star from 'react-rating-stars-component'
import { connect, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import CardDirect from '../../components/CardDirect/index'
import CommentBox from '../../components/CommentBox'
import InfoProductDetail from '../../components/InfoProductDetail'
import Modal from '../../components/Modal'
import ProductItem from '../../components/ProductItem/index'
import ScrollToTop from '../../components/ScrollToTop/index'
import Header from '../../layouts/MainLayout/Header/index'
import toast, { CustomToast } from '../../utils/notification'
import LoadComment from '../../components/ContentLoader/ContentLoaderProductPage/LoadComment'
import * as actions from './store/actions/index'
import {
  selectListProductAddToCart,
  selectListProducts,
  selectListReviews,
  selectProductItem,
  selectUserLogin,
  selectIsRequesting
} from './store/selectors/index'

function ProductDetailPage(props) {
  const {
    getProductItem,
    getReviewsProduct,
    getProductList,
    getUserLogin,
    isRequesting
  } = props
  const [productItem, setProductItem] = useState<any>('')
  const [reviews, setReviews] = useState([])
  const [quantityProduct, setQuantityProduct] = useState(1)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()
  const idProduct = props.match.params.id

  useEffect(() => {
    if (getUserLogin.length === 0) setIsAuthenticated(false)
  }, [])

  useEffect(() => {
    dispatch(actions.getIdProduct(idProduct))
    dispatch(actions.getReviews(idProduct))
    dispatch(actions.getListProduct())
  }, [dispatch, idProduct])

  useEffect(() => {
    setProductItem(getProductItem)
  }, [getProductItem])

  useEffect(() => {
    setReviews(getReviewsProduct)
  }, [getReviewsProduct])

  useEffect(() => {
    getUserLogin.length !== 0 && setIsAuthenticated(true)
  }, [getUserLogin])

  const handleClickBuy = () => {
    if (!isAuthenticated) {
      toast.warning(
        <CustomToast
          isShowBtn
          onCloseToast={() => {
            history.push('/user/login')
          }}
          titleBtn='Go to login'
          title='You must login first!!!'
        />,
        {
          position: toast.POSITION.TOP_CENTER
        }
      )
    } else {
      const productItemAfterChange = {
        ...getProductItem,
        quantity: quantityProduct
      }
      const { id, price, quantity, discount } = productItemAfterChange
      const data = {
        product_id: id,
        price: price,
        quantity: quantity,
        discount: discount
      }
      dispatch(actions.addToCartApi(data))
      toast.success(<CustomToast title='Add to cart success :D' />, {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }

  const handleClickLike = (id: number) => {
    if (!isAuthenticated) {
      toast.warning(
        <CustomToast
          isShowBtn
          onCloseToast={() => {
            history.push('/user/login')
          }}
          titleBtn='Go to login'
          title='You must login first!!!'
        />,
        {
          position: toast.POSITION.TOP_CENTER
        }
      )
    } else {
      dispatch(actions.postLikeProduct(id))
      toast.success(<CustomToast title='Add wish list success :D' />, {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }

  const handleClickDecreaseQuantity = () => {
    setQuantityProduct(prev => prev - 1)
  }

  const handleClickIncreaseQuantity = () => {
    setQuantityProduct(prev => prev + 1)
  }

  return (
    <Fragment>
      <ScrollToTop>
        <Header isHomepage={false} />
        <div className='product-detail-page'>
          {!isRequesting && productItem ? (
            <InfoProductDetail
              productItem={productItem}
              quantityProduct={quantityProduct}
              onClickDecrease={handleClickDecreaseQuantity}
              onClickIncrease={handleClickIncreaseQuantity}
              onClickLike={() => handleClickLike(productItem.id)}
              onClickBuy={() => handleClickBuy()}
            />
          ) : (
            <LoadProductDetail />
          )}

          <div className='comment__nav'>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <li>
                <Link to=''>REVIEWS</Link>
              </li>
              <li>
                <Link to=''>SPECIFICATION</Link>
              </li>
              <li>
                <Link to=''>DESCRIPTION</Link>
              </li>
            </motion.ul>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className='wrap__comment'
          >
            <div className='comment__content'>
              <div className='comment__content__user'>
                <h3>
                  All Reviews <strong>{getReviewsProduct.length}</strong>
                </h3>
                {!isRequesting && reviews ? (
                  reviews.map((review: any, index: number) => (
                    <CommentBox
                      id={review.id}
                      key={index}
                      content={review.content}
                      rating={review.rating}
                      like={review.like}
                      dislike={review.dislike}
                      created_at={review.created_at}
                      name={`${review.user.first_name}
                 ${
                   review.user.middle_name === null
                     ? ''
                     : review.user.middle_name
                 }
                 ${review.user.last_name}`}
                    />
                  ))
                ) : (
                  <LoadComment />
                )}

                <div className='pagination'>
                  <button>
                    <i className='fas fa-arrow-circle-down'></i>Load More
                  </button>
                  <ul>
                    <li>
                      <Link to=''>1</Link>
                    </li>
                    <li>
                      <Link to=''>2</Link>
                    </li>
                    <li>
                      <Link to=''>3</Link>
                    </li>
                    <li>
                      <Link to=''>4</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='comment__review'>
                <h3>Assessment reviews</h3>
                <div className='comment__review__item'>
                  <Star
                    value={4.5}
                    size={30}
                    color='#888'
                    isHalf={true}
                    halfIcon={<i className='fas fa-star-half'></i>}
                  />
                  <p>68%</p>
                  <span>14 reviews</span>
                </div>
                <div className='comment__review__item'>
                  <Star
                    value={3.5}
                    size={30}
                    color='#888'
                    isHalf={true}
                    halfIcon={<i className='fas fa-star-half'></i>}
                  />
                  <p>68%</p>
                  <span>14 reviews</span>
                </div>
                <div className='comment__review__item'>
                  <Star
                    value={2.5}
                    size={30}
                    color='#888'
                    isHalf={true}
                    halfIcon={<i className='fas fa-star-half'></i>}
                  />
                  <p>68%</p>
                  <span>14 reviews</span>
                </div>
                <div className='comment__review__item'>
                  <Star
                    value={1.5}
                    size={30}
                    color='#888'
                    isHalf={true}
                    halfIcon={<i className='fas fa-star-half'></i>}
                  />
                  <p>68%</p>
                  <span>14 reviews</span>
                </div>
                <button>Add Review</button>
              </div>
            </div>
          </motion.div>
          <div className='wrap__product'>
            <div className='wrap__product__card-direct'>
              <CardDirect title='SIMILAR PRODUCT' url='' />
              {getProductList &&
                [...getProductList]
                  .slice(0, 3)
                  .map((product, index) => (
                    <ProductItem
                      key={index}
                      name={product.name}
                      imgUrl={product.images[0].url}
                      price={product.price}
                      id={product.id}
                    />
                  ))}
            </div>
            <div className='wrap__product__normal'>
              {getProductList &&
                [...getProductList]
                  .slice(4, 8)
                  .map((product, index) => (
                    <ProductItem
                      key={index}
                      name={product.name}
                      imgUrl={product.images[0].url}
                      price={product.price}
                      id={product.id}
                    />
                  ))}
            </div>
          </div>
        </div>
      </ScrollToTop>
    </Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  getProductItem: selectProductItem(),
  getReviewsProduct: selectListReviews(),
  getProductList: selectListProducts(),
  getUserLogin: selectUserLogin(),
  getListProductAddToCart: selectListProductAddToCart(),
  isRequesting: selectIsRequesting()
})

export default connect(mapStateToProps, null)(ProductDetailPage)
