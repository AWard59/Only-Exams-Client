import React, { useState, useEffect } from 'react'
import { Navigate, Link } from 'react-router-dom'

import Spinner from 'react-bootstrap/Spinner'

import { getCourses } from '../../../api/courses'

const Courses = ({ msgAlert, user }) => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    try {
      const res = await getCourses(user)
      setCourses(res.data.courses)
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

  const renderedCourses = courses.map(course => {
    return (
      <li key={course.id}>
        <Link to={`/courses/${course.id}/`}>
          <h3>{course.name}</h3>
          <h5>{course.description}</h5>
        </Link>
      </li>
    )
  })

  const listCourses = <ul>{renderedCourses}</ul>

  return (
    <>
      <h3>Courses:</h3>
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
