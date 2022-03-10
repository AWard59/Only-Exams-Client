/* eslint-disable no-tabs */
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import CreateCourse from './components/author/course/CreateCourse'
import ViewCourses from './components/author/course/ViewCourses'
import ViewCourseId from './components/author/course/ViewCourseId'
import Profile from './components/user/Profile'
import CreateModule from './components/author/module/CreateModule'
import ViewModuleId from './components/author/module/ViewModuleId'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const [isStudent, setIsStudent] = useState(null)
  const [isTutor, setIsTutor] = useState(null)
  const [isAuthor, setIsAuthor] = useState(null)
  const [userType, setUserType] = useState(null)

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }

  useEffect(() => {
    if (user) {
      if (user.isStudent) {
        setIsStudent(true)
        setUserType('Student')
        console.log(isStudent)
      } else if (user.isTutor) {
        setIsTutor(true)
        setUserType('Tutor')
        console.log(isTutor)
      } else if (user.isAuthor) {
        setIsAuthor(true)
        setUserType('Author')
        console.log(isAuthor)
      }
    }
  }, [user])

  return (
    <>
      <Header user={user} userType={userType}/>
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
              <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />}
          />
          <Route
            path='/change-password/'
            element={<ChangePassword msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/profile/'
            element={<Profile msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/courses/create/'
            element={<CreateCourse msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/courses/'
            element={<ViewCourses user={user} />}
          />
          <Route
            path='/courses/:id/'
            element={<ViewCourseId msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/courses/:id/modules/create/'
            element={<CreateModule msgAlert={msgAlert} user={user} />}
          />
          <Route
            path='/courses/modules/:id/'
            element={<ViewModuleId msgAlert={msgAlert} user={user} />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App
