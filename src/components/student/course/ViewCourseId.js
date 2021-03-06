import React, { useEffect, useState } from 'react'
import { Navigate, useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import { getCourseByIdStudent } from '../../../api/courses'
import { getModules, getCompleteModules } from '../../../api/modules'
import apiUrl from '../../../apiConfig'

const Course = ({ msgAlert, user, userType }) => {
  const [course, setCourse] = useState([])
  const [modules, setModules] = useState([])
  const [completedModules, setCompletedModules] = useState([])
  const [loading, setLoading] = useState(false)
  const [navigateBack, setShouldNavigateBack] = useState(false)
  const { id } = useParams()
  const courseId = { id }

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(async () => {
    try {
      const res = await getCourseByIdStudent(user, courseId.id)
      setCourse(res.data.course)
      try {
        const resMod = await getModules(user, courseId.id)
        setModules(resMod.data.modules)
        setLoading(false)
        try {
          const resModCompleted = await getCompleteModules(user, courseId.id)
          setCompletedModules(resModCompleted.data.completed_module.map((cm) => {
            return cm.module_complete.id
          }))
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

  const reducedModules = modules.filter((m) => {
    if (completedModules.includes(m.id)) {
      m.completed = '✅'
      return m
    } else {
      return m
    }
  }, [loading])

  const renderedModules = reducedModules.map((m) => {
    return (
      <li key={m.id}>
        <ListGroup.Item>
          <Link to={`/courses/modules/${m.id}/`} state={{ course: courseId.id, completed: m.completed }}>
            {m.completed} {m.name}
          </Link>
        </ListGroup.Item>
      </li>
    )
  })

  const listModules = <ol className='container'>{renderedModules}</ol>

  if (navigateBack) {
    return <Navigate to='/courses/enrolled/' />
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
            <div className='col-5'>
              <Card border='primary' className='shadow'>
                <Card.Img variant='top' src={apiUrl + course.image} />
                <Card.Body>
                  <Card.Title><h3>{course.name}</h3></Card.Title>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {course.description}
                  </ReactMarkdown>
                </Card.Body>
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
              </ListGroup>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Course
