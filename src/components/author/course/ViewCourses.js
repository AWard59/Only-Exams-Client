import React, { useState, useEffect } from 'react'
import { Navigate, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

import { getCourses, enrolCourse, getCoursesStudent, getCoursesTutor } from '../../../api/courses'

const Courses = ({ msgAlert, user, userType }) => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    try {
      if (userType === 'Student') {
        const res = await getCoursesStudent(user)
        setCourses(res.data.courses)
        setLoading(false)
      } else if (userType === 'Tutor') {
        const res = await getCoursesTutor(user)
        setCourses(res.data.courses)
        setLoading(false)
      } else {
        const res = await getCourses(user)
        setCourses(res.data.courses)
        setLoading(false)
      }
    } catch {
      msgAlert({
        heading: 'No Courses',
        message: 'There are no courses available right now.',
        variant: 'danger'
      })
    }
  }, [])

  if (!user) {
    return <Navigate to='/' />
  }

  const renderedCourses = courses.map(course => {
    if (userType === 'Student') {
      return (
        <li key={course.id}>
          <div className='container'>
            <h1>{course.name}</h1>
            <h5>{course.description}</h5>
            <Button
              variant='success'
              value={course.id}
              onClick={(event) => handleEnrol(event)}>
Enrol
            </Button>
            <hr />
          </div>
        </li>
      )
    } else if (userType === 'Tutor') {
      return (
        <li key={course.course.id}>
          <div className='container'>
            <Link to={`/courses/${course.course.id}/`}>
              <h1>{course.course.name}</h1>
            </Link>
            <h5>{course.course.description}</h5>
            <hr />
          </div>
        </li>
      )
    } else {
      return (
        <li key={course.id}>
          <div className='container'>
            <Link to={`/courses/${course.id}/`}>
              <h1>{course.name}</h1>
            </Link>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {course.description}
            </ReactMarkdown>
            <hr />
          </div>
        </li>
      )
    }
  })
  const listCourses = <ul>{renderedCourses}</ul>

  const handleEnrol = async (event) => {
    try {
      await enrolCourse(user, event.target.value)
      msgAlert({
        heading: 'Successfully enrolled!',
        message: 'You have successfully enrolled in this course!',
        variant: 'success'
      })
    } catch {
      msgAlert({
        heading: 'Error enrolling',
        message: 'There was an error enrolling in this course.',
        variant: 'danger'
      })
    }
  }

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
