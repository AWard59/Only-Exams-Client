import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { profileUpdate, profileView } from '../../api/user'

const Profile = ({ msgAlert, user }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  useEffect(async () => {
    try {
      const res = await profileView(user)
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const onUpdateProfile = async (event) => {
    event.preventDefault()

    try {
      await profileUpdate(firstName, lastName, user)
      // msgAlert({
      //   heading: 'Change Password Success',
      //   message:
      //   variant: 'success'
      // })
      setShouldNavigate(true)
    } catch (error) {
      // msgAlert({
      //   heading: 'Change Password Failed with error: ' + error.message,
      //   message:
      //   variant: 'danger'
      // })
    }
  }

  if (!user || shouldNavigate) {
    return <Navigate to='/' />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Update profile</h3>
        <Form onSubmit={onUpdateProfile}>
          <Form.Group controlId='firstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name='firstName'
              value={firstName}
              type='text'
              placeholder='First Name'
              onChange={(event) => setFirstName(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='lastName'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name='lastName'
              value={lastName}
              type='text'
              placeholder='Last Name'
              onChange={(event) => setLastName(event.target.value)}
            />
          </Form.Group>
          <Button className='mt-2' variant='primary' type='submit'>
Update
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Profile
