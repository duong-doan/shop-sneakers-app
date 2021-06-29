import { combineReducers } from 'redux'
import productReducer from '../containers/ProductDetailPage/store/reducer'
import categoryReducer from '../containers/CategoryPage/store/reducer/index'
import homeReducer from '../containers/Homepage/store/reducer'
import cartReducer from '../containers/CartPage/store/reducer/index'
import loginReducer from '../containers/Auth/Login/store/reducer/index'
import registerReducer from '../containers/Auth/Register/store/reducer'

const rootReducer: any = combineReducers({
  category: categoryReducer,
  product: productReducer,
  home: homeReducer,
  cart: cartReducer,
  login: loginReducer,
  register: registerReducer
})

export default rootReducer
