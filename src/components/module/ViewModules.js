import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import { getModules } from '../../api/modules'

const Modules = ({ user }) => {
  const [modules, setModules] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    try {
      const res = await getModules(user)
      setModules(res.data.modules)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }, [])

  if (!user) {
    return <Navigate to='/' />
  }

  const renderedModules = modules.map((module) => {
    return (
      <li key={module.id}>
        {/* <Link to={`/courses/:id/modules/${module.id}/`}> */}
        <h3>{module.name}</h3>
        <h5>{module.content}</h5>
        {/* </Link> */}
      </li>
    )
  })

  const listModules = <ul>{renderedModules}</ul>

  return (
    <>
      <h3>Modules:</h3>
      {!loading ? listModules : <h3>Loading...</h3>}
    </>
  )
}

export default Modules
