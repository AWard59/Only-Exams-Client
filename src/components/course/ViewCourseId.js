import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'

import { getCourseById, editCourse, deleteCourse } from '../../api/courses'
import { getModules } from '../../api/modules'

const Course = ({ msgAlert, user }) => {
  const [course, setCourse] = useState([])
  const [courseName, setCourseName] = useState('')
  const [courseDescription, setCourseDescription] = useState('')
  const [showCourseEdit, setShowCourseEdit] = useState(false)
  const [modules, setModules] = useState([])
  const [moduleName, setModuleName] = useState('')
  const [moduleContent, setModuleContent] = useState('')
  const [showModuleEdit, setShowModuleEdit] = useState(false)
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

  if (navigateBack) {
    return <Navigate to='/courses/' />
  }

  const handleOnAddModule = () => setShouldNavigateAddModule(true)

  if (navigateAddModule) {
    return <Navigate to={'/courses/:id/modules/create/'} state={{ value: courseId }} />
  }

  const handleShowModuleEdit = (event) => {

  }

  const renderedModules = modules.map((module, i) => {
    return (
      <li key={module.id}>
        <h3>
          {i + 1}: {module.name}
        </h3>
        <h5>{module.content}</h5>
        <Button onClick={handleShowModuleEdit}>Edit</Button>
        <Button variant='danger'>
Delete
        </Button>
        <hr />
      </li>
    )
  })
  const listModules = <ul>{renderedModules}</ul>

  return (
    <>
      <div>
        <br />
        <Button onClick={() => setShouldNavigateBack(true)}>Back</Button>
        <br />
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <h2>{course.name}</h2>
              <h5>{course.description}</h5>
              <Button onClick={() => setShowCourseEdit(true)}>Edit</Button>
              <Button variant='danger' onClick={() => onDelete}>
Delete
              </Button>
            </div>
            <div className='col-6'>
              <h5>Modules:</h5>
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

      {/* Module Edit Modal */}
      <div>
        <Modal show={showModuleEdit} onHide={() => setShowModuleEdit(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Module Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId='moduleName'>
                <Form.Label>Module Name</Form.Label>
                <Form.Control
                  required
                  name='moduleName'
                  value={moduleName}
                  type='text'
                  placeholder='Module Name'
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
                  rows='6'
                  placeholder='Module Content'
                  onChange={(event) => setModuleContent(event.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant='secondary'
              onClick={() => setShowModuleEdit(false)}>
Close
            </Button>
            <Button variant='primary' onClick={() => onEditCourse}>
Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Course
