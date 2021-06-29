import { motion } from 'framer-motion'
import React, { Fragment, useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import iconList from '../../assets/images/icon-category-list.png'
import CategorySidebar from '../../components/CategorySidebar'
import LoadProductItemCate from '../../components/ContentLoader/ContentLoaderCategoryPage/LoadProductItemCate'
import GlobalScaleBox from '../../components/GlobalScaleBox/index'
import PaginationCategory from '../../components/PaginationCategory'
import ProductItem from '../../components/ProductItem'
import ScrollToTop from '../../components/ScrollToTop'
import Header from '../../layouts/MainLayout/Header/index'
import * as actions from './store/actions/index'
import {
  selectCategoryIdList,
  selectCategoryListName,
  selectIsRequesting,
  selectListProductPerPage,
  selectListSearch
} from './store/selectors/index'

function CategoryPage(props) {
  const dispatch = useDispatch()
  const paramSearch = props.location.search

  const {
    listProductsPerPage,
    filterCategoryListProducts,
    listNameCategories,
    listProductSearch,
    isRequesting
  } = props

  const [defaultListProduct, setDefaultListProduct] = useState([])
  const [numPage, setNumPage] = useState(1)

  useEffect(() => {
    paramSearch === ''
      ? dispatch(actions.getDataPerPage(numPage))
      : dispatch(actions.getValueSearch(paramSearch))
    dispatch(actions.getDataPerPage(numPage))
    dispatch(actions.getCategories())
  }, [dispatch, numPage, paramSearch])

  useEffect(() => {
    if (listProductSearch.length !== 0 && paramSearch !== '') {
      setDefaultListProduct(listProductSearch)
    }
  }, [listProductSearch])

  useEffect(() => {
    if (listProductsPerPage && paramSearch === '') {
      setDefaultListProduct(listProductsPerPage)
    }
  }, [listProductsPerPage])

  useEffect(() => {
    if (filterCategoryListProducts)
      setDefaultListProduct(filterCategoryListProducts)
  }, [filterCategoryListProducts])

  const handlePagination = (num: number) => {
    setNumPage(num)
  }

  const handleClickFilter = () => {
    dispatch(actions.getDataFilter())
  }

  const handleClickSortPrice = () => {
    const arrSortPrice = [...defaultListProduct]
    const arrSortedPrice = arrSortPrice.sort(
      (a: any, b: any) => a.price - b.price
    )
    setDefaultListProduct(arrSortedPrice)
  }

  return (
    <Fragment>
      <ScrollToTop>
        <Header isHomepage={false} />
        {/* {isRequesting && <Modal isOpen={showModal} />} */}
        <div className='category-page'>
          <section className='wrap__show-product'>
            <GlobalScaleBox
              type='MOUNTAIN BIKE'
              name='Trek Speed Concept'
              width='67%'
              bgColor='#61ade2'
            />
            <GlobalScaleBox
              type='MOUNTAIN BIKE'
              name='Sale Collection 2015'
              width='33%'
              bgColor='#7d6de5'
            />
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='filter'
          >
            <h3>Filter</h3>
            <div className='filter__refresh' onClick={handleClickFilter}>
              <i className='fas fa-sync-alt'></i>
            </div>

            <div className='filter__sort'>
              <div className='sort__list'>
                <h6 onClick={handleClickSortPrice}>SORT BY: Price $-$$</h6>
                <i className='fas fa-sort-down'></i>
              </div>
            </div>

            <div className='filter__show'>
              <div className='show__list'>
                <h6>SHOW: 10</h6>
                <i className='fas fa-sort-down'></i>
              </div>
              <div className='show__item'>{/* list item in here */}</div>
            </div>

            <div className='filter__all'>
              <Link to=''>
                <img src={iconList} alt='' />
              </Link>
            </div>

            <div className='filter__list'>
              <Link to=''>
                <i className='fas fa-list'></i>
              </Link>
            </div>

            <div className='filter__compare'>
              <h6>
                COMPARE:<span>{defaultListProduct.length}</span>
              </h6>
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='category__wrap'
          >
            <section className='sidebar'>
              <CategorySidebar
                name='CATEGORIES'
                showListCate
                lisNameCateApi={listNameCategories}
              />
              <CategorySidebar name='PRICE' showPrice />
              <CategorySidebar name='BRAND' showRadio />
              <CategorySidebar name='COLORS' showColor />
              <CategorySidebar name='SIZE' showTable />
            </section>

            <section className='category__wrap__list-product'>
              {!isRequesting ? (
                defaultListProduct.map((product: any) => (
                  <ProductItem
                    id={product.id}
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    imgUrl={product.images[0].url}
                  />
                ))
              ) : (
                <LoadProductItemCate />
              )}
            </section>
          </motion.div>

          <PaginationCategory onClickPagination={handlePagination} />
        </div>
      </ScrollToTop>
    </Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  filterCategoryListProducts: selectCategoryIdList(),
  listNameCategories: selectCategoryListName(),
  listProductsPerPage: selectListProductPerPage(),
  listProductSearch: selectListSearch(),
  isRequesting: selectIsRequesting()
})

export default connect(mapStateToProps, null)(CategoryPage)
