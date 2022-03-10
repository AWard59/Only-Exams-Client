import React, { useEffect, useState } from 'react'
import { Navigate, useParams, Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Select from 'react-select'

import { getCourseById, editCourse, deleteCourse } from '../../api/courses'
import { getModules } from '../../api/modules'
import { getTutors } from '../../api/user'

const Course = ({ msgAlert, user }) => {
  const [course, setCourse] = useState([])
  const [courseName, setCourseName] = useState('')
  const [courseDescription, setCourseDescription] = useState('')
  const [showCourseEdit, setShowCourseEdit] = useState(false)
  const [modules, setModules] = useState([])
  const [tutors, setTutors] = useState([])
  const [showAssignTutors, setShowAssignTutors] = useState(false)
  const [loading, setLoading] = useState(false)
  const [navigateBack, setShouldNavigateBack] = useState(false)
  const [navigateAddModule, setShouldNavigateAddModule] = useState(false)
  const [reRender, setReRender] = useState(false)
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
      try {
        const resMod = await getModules(user, courseId.id)
        setModules(resMod.data.modules)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    } catch (error) {
      console.error(error)
    }
  }, [reRender])

  const onEditCourse = async (event) => {
    event.preventDefault()
    try {
      await editCourse(user, courseId.id, courseName, courseDescription)
      setShowCourseEdit(false)
      setReRender(true)
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
      setShowCourseEdit(false)
      setShouldNavigateBack(true)
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

  const handleShowAssignTutors = async (event) => {
    event.preventDefault()
    try {
      const res = await getTutors(user)
      console.log('tutors res', res.data.tutors)
      setTutors(res.data.tutors)
      console.log('tutors state', tutors)
      setShowAssignTutors(true)
    } catch (error) {
      console.error(error)
    }
  }

  if (navigateBack) {
    return <Navigate to='/courses/' />
  }

  const handleOnAddModule = () => setShouldNavigateAddModule(true)

  if (navigateAddModule) {
    return <Navigate to={'/courses/:id/modules/create/'} state={{ value: courseId }} />
  }

  const renderedModules = modules.map((m) => {
    return (
      <li key={m.id}>
        <Link to={`/courses/:id/modules/${m.id}/`}>
          <h3>{m.name}</h3>
        </Link>
      </li>
    )
  })
  const listModules = <ol>{renderedModules}</ol>

  return (
    <>
      <div>
        <br />
        <Button onClick={() => setShouldNavigateBack(true)}>Back</Button>
        <br />
        <br />
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <div className='container shadow'>
                <h2>{course.name}</h2>
                <h5>{course.description}</h5>
                <Button onClick={() => setShowCourseEdit(true)}>Edit</Button>
                <Button variant='danger' onClick={() => onDelete}>
Delete
                </Button>
                <br />
                <br />
              </div>
              <br />
              <div className='container shadow'>
                <h5>Tutors:</h5>
                <Button onClick={handleShowAssignTutors}>Assign Tutors</Button>
                <br />
                <br />
              </div>
            </div>

            <div className='col-6 container'>
              <h3>Modules:</h3>
              {!loading
                ? (
                  listModules
                )
                : (
                  <Spinner animation='border' variant='primary' />
                )}
              <Button onClick={() => handleOnAddModule}>Add Module</Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Modal show={showCourseEdit} onHide={() => setShowCourseEdit(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Course Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId='courseName'>
                <FloatingLabel label="Course Name">
                  <Form.Control
                    required
                    name='courseName'
                    value={courseName}
                    type='text'
                    placeholder='Course Name'
                    onChange={(event) => setCourseName(event.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId='courseDescription'>
                <FloatingLabel label="Course Description">
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
                </FloatingLabel>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant='secondary'
              onClick={() => setShowCourseEdit(false)}>
Close
            </Button>
            <Button variant='primary' onClick={() => onEditCourse}>
Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* Tutor Assign Modal */}
      <div>
        <Modal
          show={showAssignTutors}
          onHide={() => setShowAssignTutors(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Assign Tutors</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Select
                isMulti
                className='basic-multi-select'
                options={Object.values(tutors)} />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary'>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Course
