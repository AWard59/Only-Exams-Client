import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUp = ({ msgAlert, setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [userType, setUserType] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const onSignUp = async (event) => {
    event.preventDefault()
    try {
      await signUp(email, password, passwordConfirmation, userType)
      const res = await signIn(email, password)
      setUser(res.data.user)
      msgAlert({
        heading: 'Sign Up Success',
        message: signUpSuccess,
        variant: 'success'
      })
      setShouldNavigate(true)
    } catch (error) {
      setEmail('')
      setPassword('')
      setPasswordConfirmation('')
      msgAlert({
        heading: 'Sign Up Failed with error: ' + error.message,
        message: signUpFailure,
        variant: 'danger'
      })
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/profile/' />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Sign Up</h3>
        <Form onSubmit={onSignUp}>
          <Form.Group controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type='email'
              name='email'
              value={email}
              placeholder='Enter email'
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name='password'
              value={password}
              type='password'
              placeholder='Password'
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='passwordConfirmation'>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              required
              name='passwordConfirmation'
              value={passwordConfirmation}
              type='password'
              placeholder='Confirm Password'
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />
          </Form.Group>
          <br />

          <Form.Group controlId='userType'>
            <Form.Label>User Type</Form.Label>
            <div key={'inline-radio}'} className='mb-3'>
              <Form.Check
                inline
                label='Student'
                name='userType'
                value='is_student'
                type='radio'
                id={'inline-radio}-1'}
                onChange={(event) => setUserType(event.target.value)}
              />
              <Form.Check
                inline
                label='Tutor'
                name='userType'
                value='is_tutor'
                type='radio'
                id={'inline-radio}-2'}
                onChange={(event) => setUserType(event.target.value)}
              />
              <Form.Check
                inline
                label='Author'
                name='userType'
                value='is_author'
                type='radio'
                id={'inline-radio}-3'}
                onChange={(event) => setUserType(event.target.value)}
              />
            </div>
          </Form.Group>

          <Button className='mt-2' variant='primary' type='submit'>
Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default SignUp
