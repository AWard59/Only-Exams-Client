import React, { useEffect, useState } from 'react'
import { Navigate, useParams, Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'
// import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
// import FloatingLabel from 'react-bootstrap/FloatingLabel'

import { getCourseById } from '../../../api/courses'
import { getModules } from '../../../api/modules'
import { getEnrolledStudents } from '../../../api/user'

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
    // setReRender(false) // temporary for testing
    return <Navigate to='/courses/' />
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
            <div className='col-3'>
              <div className='container shadow'>
                <h2>{course.name}</h2>
                <h5>{course.description}</h5>
                <br />
                <br />
              </div>
              <br />
              <div className='container shadow'>
                <h5>Enrolled Students:</h5>
                {listStudents}
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
              <Button onClick={handleOnAddModule}>Add Module</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Course