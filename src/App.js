/* eslint-disable no-tabs */
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import Home from './components/Header/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import CreateCourse from './components/author/course/CreateCourse'
import ViewCourses from './components/author/course/ViewCourses'
import ViewCoursesEnrolled from './components/student/course/ViewCoursesEnrolled'
import ViewCourseIdAuthor from './components/author/course/ViewCourseId'
import Profile from './components/user/Profile'
import CreateModule from './components/author/module/CreateModule'
import ViewModuleId from './components/author/module/ViewModuleId'
import ViewCourseIdStudent from './components/student/course/ViewCourseId'
import ViewModuleIdStudent from './components/student/module/ViewModuleId'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const [userType, setUserType] = useState(null)

  const clearUserType = () => setUserType(null)
  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }

  useEffect(() => {
    if (user) {
      if (user.isStudent) {
        // setIsStudent(true)
        setUserType('Student')
      } else if (user.isTutor) {
        // setIsTutor(true)
        setUserType('Tutor')
      } else if (user.isAuthor) {
        // setIsAuthor(true)
        setUserType('Author')
      }
    }
  }, [user])

  // Student Routes
  const studentRoutes = (
    <>
      <Route
        path='/courses/:id/'
        element={
          <ViewCourseIdStudent
            msgAlert={msgAlert}
            user={user}
            userType={userType}
          />
        }
      />
      <Route
        path='/courses/enrolled/'
        element={<ViewCoursesEnrolled user={user} userType={userType} />}
      />
      <Route
        path='/courses/modules/:id/'
        element={
          <ViewModuleIdStudent msgAlert={msgAlert} user={user} userType={userType} />
        }
      />
    </>
  )

  // Tutor Routes
  const tutorRoutes = (
    <>

    </>
  )

  // Author Routes
  const authorRoutes = (
    <>
      <Route
        path='/courses/:id/'
        element={
          <ViewCourseIdAuthor
            msgAlert={msgAlert}
            user={user}
            userType={userType}
          />
        }
      />
      <Route
        path='/courses/modules/:id/'
        element={
          <ViewModuleId msgAlert={msgAlert} user={user} userType={userType} />
        }
      />
    </>
  )

  return (
    <>
      <Header user={user} userType={userType} />
      {msgAlerts.map((msgAlert) => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
        />
      ))}
      <main className='container'>
        <Routes>
          {/* Auth Routes */}
          <Route
            path='/sign-up/'
            element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
          />
          <Route
            path='/sign-in/'
            element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
          />
          <Route
            path='/sign-out/'
            element={
              <SignOut
                msgAlert={msgAlert}
                user={user}
                clearUserType={clearUserType}
                clearUser={clearUser}
              />
            }
          />
          <Route
            path='/change-password/'
            element={<ChangePassword msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/profile/'
            element={<Profile msgAlert={msgAlert} user={user} />}
          />
          {/* Generic Routes */}
          <Route path='/' element={<Home userType={userType} />} />
          <Route
            path='/courses/'
            element={<ViewCourses user={user} userType={userType} />}
          />
          {userType === 'Student'
            ? studentRoutes
            : userType === 'Tutor'
              ? tutorRoutes
              : userType === 'Author'
                ? authorRoutes
                : ''}
          {/* Author Routes */}
          <Route
            path='/courses/create/'
            element={<CreateCourse msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/courses/:id/modules/create/'
            element={<CreateModule msgAlert={msgAlert} user={user} />}
          />
          {/* Tutor Routes */}
        </Routes>
      </main>
    </>
  )
}

export default App
