import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Button from 'react-bootstrap/Button'

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
      <div>
        <br />
        <Button onClick={() => setShouldNavigateBack(true)}>Back</Button>
        <br />
        <br />
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='container' style={{ textAlign: 'center' }}>
                <h1>{module.name}</h1>
                <hr />
                <br />
              </div>
              <div style={{ textAlign: 'center' }}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {module.content}
                </ReactMarkdown>
              </div>
              <div>
                {completed
                  ? (
                    <p
                      style={{
                        position: 'absolute',
                        bottom: '5vh',
                        right: '5vw',
                        fontWeight: 'bold',
                        color: 'red'
                      }}>
Already Completed
                    </p>
                  )
                  : (
                    <a
                      style={{
                        position: 'absolute',
                        bottom: '5vh',
                        right: '5vw',
                        textDecoration: 'underline',
                        color: 'blue',
                        cursor: 'pointer'
                      }}
                      onClick={() => onCompleteModule()}>
Mark Completed
                    </a>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Module
