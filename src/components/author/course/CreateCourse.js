import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { createCourse } from '../../../api/courses'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormData from 'form-data'

const CreateCourse = ({ msgAlert, user }) => {
  const [shouldNavigate, setShouldNavigate] = useState(false)
  const [courseName, setCourseName] = useState('')
  const [courseDescription, setCourseDescription] = useState('')
  const [courseImage, setCourseImage] = useState(null)

  const onCreateCourse = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('name', courseName)
    formData.append('description', courseDescription)
    if (courseImage) {
      formData.append('image', courseImage[0], courseImage[0].name)
    }
    try {
      const config = {
        headers: {
          Authorization: `Token ${user.token}`,
          'Content-Type': 'multipart/form-data'
        }
      }
      await createCourse(formData, config)
      msgAlert({
        heading: 'Course Creation Successful!',
        message: `Course ${courseName} Created Successfully!`,
        variant: 'success'
      })
      setShouldNavigate(true)
    } catch (error) {
      msgAlert({
        heading: 'Create Course Failed with error: ' + error.message,
        message: 'Failed to create a new course',
        variant: 'danger'
      })
    }
  }

  if (!user) {
    return <Navigate to='/' />
  }

  if (shouldNavigate) {
    return <Navigate to='/courses/' />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Create Course</h3>
        <Form onSubmit={onCreateCourse}>
          <Form.Group controlId='courseName'>
            <Form.Label>Course Name</Form.Label>
            <Form.Control
              required
              name='courseName'
              value={courseName}
              type='text'
              placeholder='Course Name'
              onChange={(event) => setCourseName(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='courseDescription'>
            <Form.Label>Course Description</Form.Label>
            <Form.Control
              required
              name='courseDescription'
              value={courseDescription}
              type='text'
              as='textarea'
              rows='6'
              placeholder='Course Description'
              onChange={(event) => setCourseDescription(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='image'>
            <Form.Label>Course Image</Form.Label>
            <Form.Control
              name='image'
              type='file'
              accept='image/png, image/jpeg'
              onChange={(event) => setCourseImage(event.target.files)}
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

export default CreateCourse
