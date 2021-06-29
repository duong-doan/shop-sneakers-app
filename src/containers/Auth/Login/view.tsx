import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { userRegister } from './store/actions/index'
import toast, { CustomToast } from '../../../utils/notification'
import { createStructuredSelector } from 'reselect'
import { selectUserRegister, selectUserlogin } from './store/selectors/index'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface FormValue {
  userName: string
  email: string
  password: any
  password_repeat: any
}

const Login = props => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { getUserRegister, getUserLogin } = props

  useEffect(() => {
    dispatch(userRegister(getUserRegister))
  }, [])

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormValue>()

  const onSubmit = (data: any) => {
    if (getUserLogin.length === 0) {
      toast.error(
        <CustomToast title='You enter wrong email or password 😥' />,
        {
          position: toast.POSITION.TOP_CENTER
        }
      )
    } else if (
      data.email === getUserLogin[0].email &&
      data.password === getUserLogin[0].password
    ) {
      toast.success(<CustomToast title='Welcome to Sneakers Shop 😍' />, {
        position: toast.POSITION.TOP_CENTER
      })
      history.push('/')
    }
  }

  const handleClickBtnRegister = () => {
    history.push('/user/register')
  }

  return (
    <div className='form-login'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='form-login__wrap'
      >
        <motion.h1
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          SIGN UP
        </motion.h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor='email'>Email: </Label>
            <Input
              id='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email'
                }
              })}
            />
            {errors.email?.message && (
              <p className='text-danger error-message'>
                {errors.email.message}
              </p>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor='password'>Password: </Label>
            <Input
              type='password'
              {...register('password', {
                required: 'You must specify a password'
              })}
            />
            {errors.password && (
              <p className='text-danger error-message'>
                {errors.password.message}
              </p>
            )}
          </FormGroup>
          <Button type='submit'>LOGIN</Button>
          <Link to='/'>Back to Home</Link>
          <p className='login__create ' onClick={handleClickBtnRegister}>
            Create a new account
          </p>
        </Form>
      </motion.div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  getUserRegister: selectUserRegister(),
  getUserLogin: selectUserlogin()
})

export default connect(mapStateToProps, null)(Login)
