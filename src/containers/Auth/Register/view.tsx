import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { motion } from 'framer-motion'
import toast, { CustomToast } from '../../../utils/notification'
import { Link } from 'react-router-dom'
import * as actions from './store/actions/index'

interface FormValue {
  userName: string
  email: string
  password: any
  password_repeat: any
}

const Register = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch
  } = useForm<FormValue>()

  const onSubmit = data => {
    if (data) {
      dispatch(actions.register(data))
      toast.success(
        <CustomToast
          title='Register success!!'
          onCloseToast={() => {
            history.push('/user/login')
          }}
          isShowBtn
          titleBtn='LOGIN'
        />,
        {
          position: toast.POSITION.TOP_CENTER
        }
      )
    }
  }

  return (
    <div className='form-register'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='form-register__wrap'
      >
        <motion.h1
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          SIGN IN
        </motion.h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor='userName'>Username: </Label>
            <Input
              {...register('userName', {
                required: 'User name is required',
                maxLength: { value: 20, message: 'You exceeded 20 character' },
                minLength: { value: 8, message: 'You at least 8 characters' }
              })}
              id='userName'
            />
            {errors.userName?.message && (
              <p className='text-danger error-message'>
                {errors.userName.message}
              </p>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor='email'>Email: </Label>
            <Input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email'
                }
              })}
              id='email'
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
                required: 'You must specify a password',
                minLength: {
                  value: 6,
                  message: 'Password must have at least 8 characters'
                }
              })}
            />
            {errors.password && (
              <p className='text-danger error-message'>
                {errors.password.message}
              </p>
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor='confirmPassword'>Confirm password: </Label>
            <Input
              type='password'
              {...register('password_repeat', {
                required: 'Password repeat is required',
                minLength: {
                  value: 6,
                  message: 'Password must have at least 8 characters'
                },
                validate: value =>
                  value === watch('password') || 'The passwords do not match'
              })}
            />
            {errors.password_repeat && (
              <p className='text-danger error-message'>
                {errors.password_repeat.message}
              </p>
            )}
          </FormGroup>

          <Button type='submit'>REGISTER</Button>
          <Link to='/'>Back to Home</Link>
        </Form>
      </motion.div>
    </div>
  )
}

export default Register
