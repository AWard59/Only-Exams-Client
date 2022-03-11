import React, { useState, useEffect } from 'react'
import { Navigate, Link } from 'react-router-dom'

import Spinner from 'react-bootstrap/Spinner'
// import Button from 'react-bootstrap/Button'

import { getEnrolledCourses } from '../../../api/courses'

const Courses = ({ msgAlert, user, userType }) => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    try {
      const res = await getEnrolledCourses(user)
      const mapCourses = res.data.enrolled_courses.map(c => {
        return {
          id: c.course.id,
          name: c.course.name,
          description: c.course.description
        }
      })
      setCourses(mapCourses)
      setLoading(false)
    } catch {
      msgAlert({
        heading: 'No Courses',
        message: 'There are no courses. Please Add Course.',
        variant: 'danger'
      })
    }
  }, [])

  if (!user) {
    return <Navigate to='/' />
  }

  const renderedCourses = courses.map((course) => {
    return (
      <li key={course.id}>
        <div className='container'>
          <Link to={`/courses/${course.id}/`}>
            <h1>{course.name}</h1>
          </Link>
          <h5>{course.description}</h5>
          <hr />
        </div>
      </li>
    )
  })

  const listCourses = <ul>{renderedCourses}</ul>

  return (
    <>
      <h3>Your Enrolled Courses:</h3>
      {!loading
        ? (
          listCourses
        )
        : (
          <Spinner animation='border' variant='primary' />
        )}
    </>
  )
}

export default Courses
