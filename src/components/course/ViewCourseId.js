import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import { getCourseById, editCourse, deleteCourse } from '../../api/courses'

const Course = ({ user }) => {
  const [course, setCourse] = useState([])
  const [show, setShow] = useState(false)
  const [courseName, setCourseName] = useState('')
  const [courseDescription, setCourseDescription] = useState('')
  const [navigate, setShouldNavigate] = useState(false)
  const { id } = useParams()
  const courseId = { id }

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(async () => {
    try {
      const res = await getCourseById(user, courseId.id)
      setCourse(res.data.course)
      setCourseName(res.data.course.name)
      setCourseDescription(res.data.course.description)
    } catch (error) {
      console.error(error)
    }
  }, [show])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleBackClick = () => setShouldNavigate(true)

  const onEditCourse = async (event) => {
    event.preventDefault()
    try {
      await editCourse(user, courseId.id, courseName, courseDescription)
      setShow(false)
      msgAlert({
        heading: 'Course Edit Successful!',
        message: `Course ${courseName} Edited Successfully!`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Edit Course Failed with error: ' + error.message,
        message: 'Failed to edit the course',
        variant: 'danger'
      })
    }
  }

  const onDelete = async (event) => {
    event.preventDefault()
    try {
      await deleteCourse(user, courseId.id)
      setShow(false)
      handleBackClick()
      msgAlert({
        heading: 'Course Deletion Successful!',
        message: `Course ${courseName} Deleted Successfully!`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Delete Course Failed with error: ' + error.message,
        message: 'Failed to delete the course',
        variant: 'danger'
      })
    }
  }

  if (navigate) {
    return <Navigate to='/courses/' />
  }

  return (
    <>
      <div>
        <br />
        <Button onClick={handleBackClick}>Back</Button>
        <br />
        <p>{course.name}</p>
        <p>{course.description}</p>
        <Button onClick={handleShow}>Edit</Button>
        <Button variant='danger' onClick={onDelete}>Delete</Button>
      </div>

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Course Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
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
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
Close
            </Button>
            <Button variant='primary' onClick={onEditCourse}>
Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Course
