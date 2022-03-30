import React, { useEffect, useState } from 'react'
import { Navigate, useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'

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
      <li key={stu.student.id}>
        <p>{stu.student.email}</p>
        <hr />
      </li>
    )
  })
  const listStudents = <ol className='container'>{renderedStudents}</ol>

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
        <Link to={`/courses/modules/${m.id}/`} state={{ value: courseId }}>
          <h3 className='container shadow-lg'>{m.name}</h3>
        </Link>
        <hr />
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
                  <Card.Title>{course.name}</Card.Title>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {course.description}
                  </ReactMarkdown>
                </Card.Body>
                <Card.Footer>
                  <h5>Enrolled Students:</h5>
                  {listStudents}
                </Card.Footer>
              </Card>
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
              <Button onClick={handleOnAddModule}>Add Module</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Course
