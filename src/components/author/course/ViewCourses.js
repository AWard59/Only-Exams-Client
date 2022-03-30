import React, { useState, useEffect } from 'react'
import { Navigate, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'

import { getCourses, enrolCourse, getCoursesStudent, getCoursesTutor } from '../../../api/courses'
import apiUrl from '../../../apiConfig'

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
        <Card border='primary' className='shadow' key={course.id}>
          <Card.Img variant='top' src={apiUrl + course.image} />
          <Card.Body>
            <Card.Title>{course.name}</Card.Title>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {course.description}
            </ReactMarkdown>
            <Button
              variant='success'
              value={course.id}
              onClick={(event) => handleEnrol(event)}>
Enrol
            </Button>
          </Card.Body>
        </Card>
      )
    } else if (userType === 'Tutor') {
      return (
        <Card border='primary' className='shadow' key={course.course.id}>
          <Link to={`/courses/${course.course.id}/`}>
            <Card.Img variant='top' src={apiUrl + course.course.image} />
          </Link>
          <Card.Body>
            <Card.Title>{course.course.name}</Card.Title>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {course.course.description}
            </ReactMarkdown>
          </Card.Body>
        </Card>
      )
    } else {
      return (
        <Card border='primary' className='shadow' key={course.id}>
          <Link to={`/courses/${course.id}/`}>
            <Card.Img variant='top' src={apiUrl + course.image} />
          </Link>
          <Card.Body>
            <Card.Title>{course.name}</Card.Title>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {course.description}
            </ReactMarkdown>
          </Card.Body>
        </Card>
      )
    }
  })

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
      <CardGroup>
        <Row md={3} className='g-4'>
          {!loading
            ? (
              renderedCourses
            )
            : (
              <Spinner animation='border' variant='primary' />
            )}
        </Row>
      </CardGroup>
    </>
  )
}

export default Courses
