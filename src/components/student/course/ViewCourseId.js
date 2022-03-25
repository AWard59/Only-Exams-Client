import React, { useEffect, useState } from 'react'
import { Navigate, useParams, Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

import { getCourseById } from '../../../api/courses'
import { getModules, getCompleteModules } from '../../../api/modules'

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
      const res = await getCourseById(user, courseId.id)
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
        <Link to={`/courses/modules/${m.id}/`} state={{ course: courseId.id, completed: m.completed }}>
          <h3 className='container shadow-lg'>{m.completed}{m.name}</h3>
        </Link>
        <hr />
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
            <div className='col-3'>
              <div className='container shadow'>
                <h1>{course.name}</h1>
                <h5>{course.description}</h5>
                <br />
                <br />
              </div>
              <br />
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Course
