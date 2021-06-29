import { initStateRegister } from '../../../Register/store/reducer/index'
import { initState } from '../reducer/index'
import { createSelector } from 'reselect'
import { get } from 'lodash'

const selectRegister = state => get(state, 'register') || initStateRegister
const selectLogin = state => get(state, 'login') || initState

const selectUserRegister = () =>
  createSelector(selectRegister, selectRegister =>
    get(selectRegister, 'userRegister')
  )

const selectUserlogin = () =>
  createSelector(selectLogin, selectLogin => get(selectLogin, 'user'))

export { selectUserRegister, selectUserlogin }
