import React, { useState, useEffect } from 'react'
import { Navigate, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'

import { getEnrolledCourses } from '../../../api/courses'
import apiUrl from '../../../apiConfig'

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
        message: 'There are no courses. Please enrol in a Course.',
        variant: 'danger'
      })
    }
  }, [])

  if (!user) {
    return <Navigate to='/' />
  }

  const renderedCourses = courses.map((course) => {
    return (
      <>
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
      </>
    )
  })

  return (
    <>
      <h3>Your Enrolled Courses:</h3>
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
