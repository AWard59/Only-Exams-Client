// import React, { useEffect, useState } from 'react'
// import { Navigate, useParams } from 'react-router-dom'

// import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'
// import Form from 'react-bootstrap/Form'
// import FloatingLabel from 'react-bootstrap/FloatingLabel'

// import { getCourseById, editCourse, deleteCourse } from '../../api/courses'

// const Module = ({ msgAlert, user }) => {
//   const [course, setCourse] = useState([])
//   const [courseName, setCourseName] = useState('')
//   const [courseDescription, setCourseDescription] = useState('')
//   const [showCourseEdit, setShowCourseEdit] = useState(false)
//   const [modules, setModules] = useState([])
//   const [navigateBack, setShouldNavigateBack] = useState(false)
//   const { id } = useParams()
//   const courseId = { id }

//   if (!user) {
//     return <Navigate to='/' />
//   }

//   useEffect(async () => {
//     try {
//       const res = await getCourseById(user, courseId.id)
//       setCourse(res.data.course)
//       setCourseName(res.data.course.name)
//       setCourseDescription(res.data.course.description)
//     } catch (error) {
//       console.error(error)
//     }
//   }, [reRender])

//   const onEditCourse = async (event) => {
//     event.preventDefault()
//     try {
//       await editCourse(user, courseId.id, courseName, courseDescription)
//       setShowCourseEdit(false)
//       setReRender(true)
//       msgAlert({
//         heading: 'Course Edit Successful!',
//         message: `Course ${courseName} Edited Successfully!`,
//         variant: 'success'
//       })
//     } catch (error) {
//       msgAlert({
//         heading: 'Edit Course Failed with error: ' + error.message,
//         message: 'Failed to edit the course',
//         variant: 'danger'
//       })
//     }
//   }

//   const onDelete = async (event) => {
//     event.preventDefault()
//     try {
//       await deleteCourse(user, courseId.id)
//       setShowCourseEdit(false)
//       setShouldNavigateBack(true)
//       msgAlert({
//         heading: 'Course Deletion Successful!',
//         message: `Course ${courseName} Deleted Successfully!`,
//         variant: 'success'
//       })
//     } catch (error) {
//       msgAlert({
//         heading: 'Delete Course Failed with error: ' + error.message,
//         message: 'Failed to delete the course',
//         variant: 'danger'
//       })
//     }
//   }

//   if (navigateBack) {
//     return <Navigate to='/courses/' />
//   }

//   return (
//     <>
//       <div>
//         <br />
//         <Button onClick={() => setShouldNavigateBack(true)}>Back</Button>
//         <br />
//         <br />
//         <div className='container'>
//           <div className='row'>
//             <div className='col-3'>
//               <div className='container shadow'>
//                 <h2>{course.name}</h2>
//                 <h5>{course.description}</h5>
//                 <Button onClick={() => setShowCourseEdit(true)}>Edit</Button>
//                 <Button variant='danger' onClick={() => onDelete}>
// Delete
//                 </Button>
//                 <br />
//                 <br />
//               </div>
//               <br />
//               <div className='container shadow'>
//                 <h5>Tutors:</h5>
//                 <Button onClick={handleShowAssignTutors}>Assign Tutors</Button>
//                 <br />
//                 <br />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <Modal show={showCourseEdit} onHide={() => setShowCourseEdit(false)}>
//           <Modal.Header closeButton>
//             <Modal.Title>Edit Course Information</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form>
//               <Form.Group controlId='courseName'>
//                 <FloatingLabel label='Course Name'>
//                   <Form.Control
//                     required
//                     name='courseName'
//                     value={courseName}
//                     type='text'
//                     placeholder='Course Name'
//                     onChange={(event) => setCourseName(event.target.value)}
//                   />
//                 </FloatingLabel>
//               </Form.Group>
//               <Form.Group controlId='courseDescription'>
//                 <FloatingLabel label='Course Description'>
//                   <Form.Control
//                     required
//                     name='courseDescription'
//                     value={courseDescription}
//                     type='text'
//                     as='textarea'
//                     rows='6'
//                     placeholder='Course Description'
//                     onChange={(event) =>
//                       setCourseDescription(event.target.value)
//                     }
//                   />
//                 </FloatingLabel>
//               </Form.Group>
//             </Form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button
//               variant='secondary'
//               onClick={() => setShowCourseEdit(false)}>
// Close
//             </Button>
//             <Button variant='primary' onClick={() => onEditCourse}>
// Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </>
//   )
// }

// export default Module
