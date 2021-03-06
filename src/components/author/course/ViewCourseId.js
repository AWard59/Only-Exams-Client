import React, { useEffect, useState } from 'react'
import { Navigate, useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import { getCourseById, editCourse, deleteCourse } from '../../../api/courses'
import { getModules } from '../../../api/modules'
import { getTutors, assignTutor, getAssignedTutors } from '../../../api/user'
import apiUrl from '../../../apiConfig'

const Course = ({ msgAlert, user, userType }) => {
  const [course, setCourse] = useState([])
  const [courseName, setCourseName] = useState('')
  const [courseDescription, setCourseDescription] = useState('')
  const [courseImage, setCourseImage] = useState(null)
  const [showCourseEdit, setShowCourseEdit] = useState(false)
  const [modules, setModules] = useState([])
  const [assignedTutors, setAssignedTutors] = useState([])
  const [tutors, setTutors] = useState([])
  const [showAssignTutors, setShowAssignTutors] = useState(false)
  const [newTutor, setNewTutor] = useState(false)
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
      if (res.data.course.image) {
        setCourseImage(res.data.course.image)
      }
      try {
        const resMod = await getModules(user, courseId.id)
        setModules(resMod.data.modules)
        setLoading(false)
        try {
          const resTut = await getAssignedTutors(user, courseId.id)
          setAssignedTutors(resTut.data.assigned_tutors)
          setReRender(false)
        } catch (error) {
          console.error(error)
        }
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
      const filteredTutors = res.data.tutors.filter(tutorFilterFunc)
      setTutors(filteredTutors)
      setShowAssignTutors(true)
    } catch (error) {
      console.error(error)
    }
  }

  const tutorFilterFunc = list => {
    if (assignedTutors.length >= 1) {
      return list.email !== assignedTutors[0].tutor.email
    } else {
      return list.email
    }
  }

  if (navigateBack) {
    return <Navigate to='/courses/' />
  }

  const handleOnAddModule = () => setShouldNavigateAddModule(true)

  if (navigateAddModule) {
    return (
      <Navigate
        to={`/courses/${courseId}/modules/create/`}
        state={{ value: courseId.id }}
      />
    )
  }

  const renderedModules = modules.map((m) => {
    return (
      <li key={m.id}>
        <ListGroup.Item>
          <Link to={`/courses/modules/${m.id}/`} state={{ value: courseId }}>
            {m.name}
          </Link>
        </ListGroup.Item>
      </li>
    )
  })
  const listModules = <ol className='container'>{renderedModules}</ol>

  const renderedTutors = assignedTutors.map((tut) => {
    return (
      <li key={tut.id}>
        <ListGroup.Item>
          {tut.tutor.email}
        </ListGroup.Item>
      </li>
    )
  })
  const listTutors = <ol className='container'>{renderedTutors}</ol>

  const tmap = tutors.map((t, i) => {
    return (
      <option key={t.id} value={i}>{t.email}</option>
    )
  })

  const handleAss = (event) => setNewTutor(tutors[event.target.value])

  const onAssignTutor = async (event) => {
    event.preventDefault()
    if (event.target.value !== undefined) {
      try {
        await assignTutor(user, newTutor.id, courseId.id)
        setShowAssignTutors(false)
        setReRender(true)
      } catch (error) {
        console.error(error)
      }
    } else {
      msgAlert({
        heading: 'No Tutor Selected',
        message: 'Please select a Tutor from the dropdown menu to assign',
        variant: 'danger'
      })
    }
  }

  return (
    <>
      <div>
        <br />
        <Button onClick={() => setShouldNavigateBack(true)}>Back</Button>
        <br />
        <br />
        <div className='container'>
          <div className='row'>
            <Card border='primary' className='col-5 shadow'>
              <Card.Img variant='top' src={apiUrl + courseImage} />
              <Card.Body>
                <Card.Title><h3>{course.name}</h3></Card.Title>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {course.description}
                </ReactMarkdown>
                <Button onClick={() => setShowCourseEdit(true)}>Edit</Button>
                <Button variant='danger' onClick={onDelete}>
                  Delete
                </Button>
              </Card.Body>
              <Card.Footer>
                <Card.Header><h4>Tutors:</h4></Card.Header>
                <ListGroup variant='flush'>
                  {listTutors}
                  <ListGroup.Item>
                    <Button onClick={handleShowAssignTutors}>Assign Tutors</Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Footer>
            </Card>

            <Card border='primary col-6 container shadow'>
              <Card.Header><h3>Modules:</h3></Card.Header>
              <ListGroup variant='flush'>
                {!loading
                  ? (
                    listModules
                  )
                  : (
                    <Spinner animation='border' variant='primary' />
                  )}
                <ListGroup.Item>
                  <Button onClick={handleOnAddModule}>Add Module</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
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
                <FloatingLabel label='Course Name'>
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
                <FloatingLabel label='Course Description'>
                  <Form.Control
                    required
                    name='courseDescription'
                    value={courseDescription}
                    type='text'
                    as='textarea'
                    rows='6'
                    placeholder='Course Description'
                    onChange={(event) =>
                      setCourseDescription(event.target.value)
                    }
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
            <Button variant='primary' onClick={onEditCourse}>
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
            <Modal.Title>Assign Tutor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel label='Assign Tutor'>
              <Form.Control
                as='select'
                value={tmap.value}
                onChange={(event) => handleAss(event)}>
                <option value=''>Select a Tutor to Assign</option>
options={tmap}
              </Form.Control>
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={onAssignTutor}>
Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Course
