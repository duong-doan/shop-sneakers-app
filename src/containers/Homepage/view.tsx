import React, { Fragment, useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Spinner } from 'reactstrap'
import { createStructuredSelector } from 'reselect'
import Banner from '../../components/Carousel/index'
import LoadMore from '../../components/LoadMore/index'
import Modal from '../../components/Modal/index'
import ScrollToTop from '../../components/ScrollToTop/index'
import { getCartProgressApi } from '../../containers/CartPage/store/actions/index'
import Content from '../../layouts/MainLayout/Content/index'
import WrapProductGlobal from '../../layouts/MainLayout/Content/WrapProductGlobal/index'
import WrapProductSale from '../../layouts/MainLayout/Content/WrapProductSale/index'
import WrapServiceBox from '../../layouts/MainLayout/Content/WrapServiceBox/index'
import WrapSocial from '../../layouts/MainLayout/Content/WrapSocial/index'
import Header from '../../layouts/MainLayout/Header/index'
import * as actions from './store/actions/index'
import LoadProductSale from '../../components/ContentLoader/ContentLoaderHomepage/LoadProductSale'
import {
  selectAllProductCategoryId10,
  selectAllProductCategoryId2,
  selectProductItem,
  selectUserLogin,
  selectIsRequesting
} from './store/selectors/index'
import LoadProductItem from '../../components/ContentLoader/ContentLoaderHomepage/LoadProductItem'

function HomePage(props) {
  const {
    getProductItem,
    productCategoryId2,
    productCategoryId10,
    getUserLogin,
    isRequesting
  } = props
  const dispatch = useDispatch()

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showModal, setShowModal] = useState(true)
  const [defaultAllProduct, setDefaultAllProduct] = useState<any[]>([])

  const allProducts = [...productCategoryId10, ...productCategoryId2]

  useEffect(() => {}, [isRequesting])

  useEffect(() => {
    dispatch(getCartProgressApi())
    dispatch(actions.getProductItem())
    dispatch(actions.getAllProduct())
  }, [dispatch])

  useEffect(() => {
    if (productCategoryId2 && productCategoryId10) {
      setShowModal(false)
      setDefaultAllProduct(allProducts)
    }
  }, [productCategoryId10, productCategoryId2])

  useEffect(() => {
    getUserLogin.length !== 0
      ? setIsAuthenticated(true)
      : setIsAuthenticated(false)
  }, [getUserLogin])

  return (
    <Fragment>
      <ScrollToTop>
        <Header isHomepage />
        <Banner />
        <Content>
          <WrapServiceBox />
          {!isRequesting ? (
            <WrapProductSale productItem={getProductItem} />
          ) : (
            <LoadProductSale />
          )}

          {!isRequesting ? (
            <Fragment>
              <WrapProductGlobal
                listProduct={defaultAllProduct}
                isCardDirect
                isGlobalScaleBox={false}
                isNormal={false}
              />
              <WrapProductGlobal
                listProduct={defaultAllProduct}
                isCardDirect={false}
                isGlobalScaleBox
                isNormal={false}
              />
              <WrapProductGlobal
                listProduct={defaultAllProduct}
                isCardDirect={false}
                isGlobalScaleBox={false}
                isNormal
              />
              <LoadMore />
              <WrapSocial />
            </Fragment>
          ) : (
            <LoadProductItem />
          )}
        </Content>
      </ScrollToTop>
    </Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  getProductItem: selectProductItem(),
  productCategoryId2: selectAllProductCategoryId2(),
  productCategoryId10: selectAllProductCategoryId10(),
  getUserLogin: selectUserLogin(),
  isRequesting: selectIsRequesting()
})

export default connect(mapStateToProps, null)(HomePage)
