import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { completeModule, getModuleById } from '../../../api/modules'

const Module = ({ msgAlert, user, userType }) => {
  const [module, setModule] = useState([])
  const [navigateBack, setShouldNavigateBack] = useState(false)
  const [completed, setCompleted] = useState(false)
  const { id } = useParams()
  const moduleId = { id }
  const location = useLocation()
  const courseId = location.state.course
  const moduleCompleted = location.state.completed

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(async () => {
    try {
      if (moduleCompleted === '✅') setCompleted(true)
      const res = await getModuleById(user, moduleId.id, courseId)
      setModule(res.data.module)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const onCompleteModule = async () => {
    try {
      await completeModule(user, moduleId.id)
      setShouldNavigateBack(true)
    } catch {

    }
  }

  if (navigateBack) {
    return <Navigate to={`/courses/${courseId}/`} />
  }

  return (
    <>
      <br />
      <Button onClick={() => setShouldNavigateBack(true)}>Back</Button>
      <br />
      <br />

      <Card border='primary' className='col-12 shadow container'>
        <Card.Header><h1>{module.name}</h1></Card.Header>
        <Card.Body>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {module.content}
          </ReactMarkdown>
        </Card.Body>
        <Card.Footer>
          {completed
            ? (
              <p
                style={{
                  textAlign: 'end',
                  fontWeight: 'bold',
                  color: 'red'
                }}>
Already Completed
              </p>
            )
            : (
              <p
                style={{
                  textAlign: 'end',
                  textDecoration: 'underline',
                  color: 'blue',
                  cursor: 'pointer'
                }}
                onClick={() => onCompleteModule()}>
Mark Completed
              </p>
            )}
        </Card.Footer>
      </Card>
    </>
  )
}

export default Module
