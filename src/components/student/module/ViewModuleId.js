import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

import { completeModule, getModuleById } from '../../../api/modules'

const Module = ({ msgAlert, user, userType }) => {
  const [module, setModule] = useState([])
  const [navigateBack, setShouldNavigateBack] = useState(false)
  const { id } = useParams()
  const moduleId = { id }
  const location = useLocation()
  const courseId = location.state.value

  if (!user) {
    return <Navigate to='/' />
  }

  useEffect(async () => {
    try {
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
              <div>
                <h5 style={{ textAlign: 'center' }}>{module.content}</h5>
              </div>
              <div>
                <a style={{ position: 'absolute', bottom: '5vh', right: '5vw', textDecoration: 'underline', color: 'blue', cursor: 'pointer' }} onClick={() => onCompleteModule()}>Mark Completed</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Module
