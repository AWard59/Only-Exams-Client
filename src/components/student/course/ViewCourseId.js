import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

// import Button from 'react-bootstrap/Button'

import { getCourseById } from '../../../api/courses'

const Course = ({ msgAlert, user, userType }) => {
  const [course, setCourse] = useState([])
  const [courseName, setCourseName] = useState('')
  const [courseDescription, setCourseDescription] = useState('')
  const { id } = useParams()
  const courseId = { id }

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(async () => {
    try {
      const res = await getCourseById(user, courseId.id)
      setCourse(res.data.course)
      setCourseName(res.data.course.name)
      console.log(courseName)
      setCourseDescription(res.data.course.description)
      console.log(courseDescription)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <>
      <div>
        <br />
        {/* <Button onClick={() => setShouldNavigateBack(true)}>Back</Button> */}
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
            </div>

            {/* <div className='col-6 container'>
              <h3>Modules:</h3>
              {!loading
                ? (
                  listModules
                )
                : (
                  <Spinner animation='border' variant='primary' />
                )}
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Course
