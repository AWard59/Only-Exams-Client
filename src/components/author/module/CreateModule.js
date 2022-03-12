import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { createModule } from '../../../api/modules'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CreateModule = ({ msgAlert, user }) => {
  const [moduleName, setModuleName] = useState('')
  const [moduleContent, setModuleContent] = useState('')
  const location = useLocation()
  const courseId = location.state.value

  const onCreateModule = async (event) => {
    event.preventDefault()
    try {
      await createModule(user, moduleName, moduleContent, courseId)
      msgAlert({
        heading: 'Module Creation Successful!',
        message: `Module ${moduleName} Created Successfully!`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Create Module Failed with error: ' + error.message,
        message: 'Failed to create a new Module',
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
        <h3>Create Module</h3>
        <Form onSubmit={onCreateModule}>
          <Form.Group controlId='moduleName'>
            <Form.Label>Module Name</Form.Label>
            <Form.Control
              required
              name='moduleName'
              value={moduleName}
              type='text'
              placeholder='Course Name'
              onChange={(event) => setModuleName(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='moduleContent'>
            <Form.Label>Module Content</Form.Label>
            <Form.Control
              required
              name='moduleContent'
              value={moduleContent}
              type='text'
              as='textarea'
              rows='10'
              placeholder='Module Content'
              onChange={(event) => setModuleContent(event.target.value)}
            />
          </Form.Group>
          <Button className='mt-2' variant='primary' type='submit'>
Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default CreateModule
