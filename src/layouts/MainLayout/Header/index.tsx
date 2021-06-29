import React, { Fragment, useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { logout } from '../../../containers/Auth/Login/store/actions/index'
import CookieHandlerInstance from '../../../utils/cookie'
import toast, { CustomToast } from '../../../utils/notification'
import { selectCartProduct, selectUserLoginPage } from './selectors/index'

interface HeaderType {
  isHomepage: boolean
  getUserLogin?: any
  getCartProduct?: any
}

const Header = (props: HeaderType) => {
  const history = useHistory()
  const { getUserLogin, getCartProduct, isHomepage } = props
  const dispatch = useDispatch()
  const [cartProduct, setCartProduct] = useState([])
  const [valueSearch, setValueSearch] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<any[]>([])
  const getCookie = CookieHandlerInstance.getCookie('token')

  useEffect(() => {
    if (getUserLogin.length === 0) setIsAuthenticated(false)
  }, [])

  useEffect(() => {
    if (getUserLogin.length !== 0) {
      setIsAuthenticated(true)
      setUser(getUserLogin)
    } else setIsAuthenticated(false)
  }, [getUserLogin, isAuthenticated])

  useEffect(() => {
    getCookie === null && setIsAuthenticated(false)
  }, [getCookie])

  useEffect(() => {
    getCartProduct.length !== 0 && setCartProduct(getCartProduct)
  }, [getCartProduct])

  const handleCloseToast = () => {
    dispatch(logout())
  }

  const handleSubmitSearch = e => {
    e.preventDefault()
    history.push({
      pathname: '/category',
      search: `?name=${valueSearch}`
    })
  }

  const handleClickLogout = () => {
    toast.warning(
      <CustomToast
        title='You want to logout?'
        isShowBtn
        titleBtn='Yes'
        onCloseToast={handleCloseToast}
      />,
      {
        position: toast.POSITION.TOP_CENTER
      }
    )
  }

  return (
    <div className='header'>
      <div
        className='wrapped'
        style={{
          backgroundColor: `${isHomepage ? '#454957' : '#3a54d6'}`
        }}
      >
        <div className='header__search'>
          <div className='search-box'>
            <form action='' onSubmit={handleSubmitSearch}>
              <button className='btn-search' type='submit'>
                <i className='fas fa-search'></i>
              </button>
              <input
                type='text'
                className='input-search'
                placeholder='Type to Search...'
                value={valueSearch}
                onChange={e => setValueSearch(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className='header__category'>
          <div className='header__category__icon'>
            <Link to='/category'>
              <i className='fas fa-bars'></i>
            </Link>
          </div>
          <div className='header__category_name'>
            <p>Select</p>
            <span>Category</span>
          </div>
        </div>
        <div className='header__logo'>
          <Link to='/'>AGORA</Link>
        </div>
        <div className='header__user'>
          {!isAuthenticated && (
            <Link to='/user/login'>
              <i className='far fa-user'></i>
            </Link>
          )}
          {isAuthenticated && (
            <Fragment>
              <div className='login-user' style={{ color: 'white' }}>
                {`${user[0].first_name} ${user[0].last_name}`}

                {/* have user login show  */}
                <div className='login-user__info'>
                  <div className='info__name'>
                    <i className='far fa-user'></i>
                    <h5>{`${user[0].first_name} ${user[0].last_name}`}</h5>
                  </div>
                  <div className='info__detail__wrap'>
                    <div className='info__detail__wrap__item'>
                      <i className='far fa-user'></i>
                      <p>Information</p>
                    </div>
                    <div className='info__detail__wrap__item'>
                      <i className='far fa-clipboard'></i>
                      <p>Manage order</p>
                    </div>
                    <button onClick={handleClickLogout}>LOGOUT</button>
                  </div>
                </div>
              </div>
            </Fragment>
          )}
        </div>
        <div className='header__like'>
          <Link to=''>
            <i className='far fa-heart'></i>
          </Link>
        </div>
        <div className='header__cart'>
          <Link to='/cart'>
            <i className='fas fa-shopping-cart'></i>
          </Link>
          <div
            style={{ display: `${isAuthenticated ? 'flex' : 'none'}` }}
            className='header__cart__quantity'
          >
            {isAuthenticated && cartProduct.length}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  getUserLogin: selectUserLoginPage(),
  getCartProduct: selectCartProduct()
})

export default connect(mapStateToProps, null)(Header)
