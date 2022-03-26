import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { profileUpdate, profileView } from '../../api/user'

const Profile = ({ msgAlert, user }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [reRender, setReRender] = useState(false)

  useEffect(async () => {
    try {
      const res = await profileView(user)
      setFirstName(res.data.first_name)
      setLastName(res.data.last_name)
    } catch (error) {
      console.error(error)
    }
  }, [reRender])

  const onUpdateProfile = async (event) => {
    event.preventDefault()
    try {
      await profileUpdate(firstName, lastName, user)
      msgAlert({
        heading: 'Profile Update Success',
        variant: 'success'
      })
      setReRender(true)
    } catch (error) {
      msgAlert({
        heading: 'Profile Update failed',
        variant: 'danger'
      })
    }
  }

  if (!user) {
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
