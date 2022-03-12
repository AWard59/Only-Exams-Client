import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

import { getModuleById, editModule, deleteModule } from '../../../api/modules'

const Module = ({ msgAlert, user, userType }) => {
  const [module, setModule] = useState([])
  const [moduleName, setModuleName] = useState('')
  const [moduleContent, setModuleContent] = useState('')
  const [showModuleEdit, setShowModuleEdit] = useState(false)
  const [navigateBack, setShouldNavigateBack] = useState(false)
  const [reRender, setReRender] = useState(false)
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
      setModuleName(res.data.module.name)
      setModuleContent(res.data.module.content)
    } catch (error) {
      console.error(error)
    }
  }, [reRender])

  const onEditModule = async (event) => {
    event.preventDefault()
    try {
      const res = await editModule(user, moduleId.id, moduleName, moduleContent, courseId)
      setShowModuleEdit(false)
      setReRender(true)
      msgAlert({
        heading: 'Module Edit Successful!',
        message: `Module ${moduleName} Edited Successfully!`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Edit Module Failed with error: ' + error.message,
        message: 'Failed to edit the Module',
        variant: 'danger'
      })
    }
  }

  const onDelete = async (event) => {
    event.preventDefault()
    try {
      await deleteModule(user, moduleId.id, courseId)
      setShowModuleEdit(false)
      setShouldNavigateBack(true)
      msgAlert({
        heading: 'Module Deletion Successful!',
        message: `Module ${moduleName} Deleted Successfully!`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Delete Module Failed with error: ' + error.message,
        message: 'Failed to delete the Module',
        variant: 'danger'
      })
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
            <div className='col-3'>
              <div className='container shadow'>
                <h2>{module.name}</h2>
                <h5>{module.content}</h5>
                <Button onClick={() => setShowModuleEdit(true)}>Edit</Button>
                <Button variant='danger' onClick={onDelete}>
Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Modal show={showModuleEdit} onHide={() => setShowModuleEdit(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Module Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId='moduleName'>
                <FloatingLabel label='Module Name'>
                  <Form.Control
                    required
                    name='moduleName'
                    value={moduleName}
                    type='text'
                    placeholder='Module Name'
                    onChange={(event) => setModuleName(event.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group controlId='moduleContent'>
                <FloatingLabel label='Module Content'>
                  <Form.Control
                    required
                    name='moduleContent'
                    value={moduleContent}
                    type='text'
                    as='textarea'
                    rows='6'
                    placeholder='Module Content'
                    onChange={(event) =>
                      setModuleContent(event.target.value)
                    }
                  />
                </FloatingLabel>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant='secondary'
              onClick={() => setShowModuleEdit(false)}>
Close
            </Button>
            <Button variant='primary' onClick={onEditModule}>
Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Module
