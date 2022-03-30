import React, { useEffect, useState } from 'react'
import { Navigate, useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import { getCourseById } from '../../../api/courses'
import { getModules } from '../../../api/modules'
import { getEnrolledStudents } from '../../../api/user'
import apiUrl from '../../../apiConfig'

const Course = ({ msgAlert, user, userType }) => {
  const [course, setCourse] = useState([])
  const [modules, setModules] = useState([])
  const [enrolledStudents, setEnrolledStudents] = useState([])
  const [loading, setLoading] = useState(false)
  const [navigateBack, setShouldNavigateBack] = useState(false)
  const [navigateAddModule, setShouldNavigateAddModule] = useState(false)
  // const [reRender, setReRender] = useState(false)
  const { id } = useParams()
  const courseId = { id }

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(async () => {
    try {
      const res = await getCourseById(user, courseId.id)
      setCourse(res.data.course)
      try {
        const resMod = await getModules(user, courseId.id)
        setModules(resMod.data.modules)
        setLoading(false)
        try {
          const resStu = await getEnrolledStudents(user, courseId.id)
          setEnrolledStudents(resStu.data.enrolled_students)
        } catch (error) {
          console.error(error)
        }
      } catch (error) {
        console.error(error)
      }
    } catch (error) {
      console.error(error)
    }
  }, [])

  if (navigateBack) {
    return <Navigate to='/courses/assigned/' />
  }

  const renderedStudents = enrolledStudents.map((stu) => {
    return (
      <ListGroup.Item key={stu.student.id}>
        {stu.student.email}
      </ListGroup.Item>
    )
  })

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

  return (
    <>
      <div>
        <br />
        <Button onClick={() => setShouldNavigateBack(true)}>Back</Button>
        <br />
        <br />
        <div className='container'>
          <div className='row'>
            <div className='col-5'>
              <Card border='primary' className='shadow'>
                <Card.Img variant='top' src={apiUrl + course.image} />
                <Card.Body>
                  <Card.Title><h3>{course.name}</h3></Card.Title>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {course.description}
                  </ReactMarkdown>
                </Card.Body>
                <Card.Footer>
                  <Card.Header>
                    <h4>Enrolled Students:</h4>
                  </Card.Header>
                  <ListGroup variant='flush'>
                    {renderedStudents}
                  </ListGroup>
                </Card.Footer>
              </Card>
            </div>

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
    </>
  )
}

export default Course
