import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from 'react-router-dom'

const authorOptions = (
  <>
    <NavLink to='/courses/' className='nav-link'>Courses</NavLink>
    <NavLink to='/courses/create/' className='nav-link'>Add Course</NavLink>
    <NavLink to='/change-password/' className='nav-link'>Change Password</NavLink>
    <NavLink to='/profile/' className='nav-link'>Profile</NavLink>
    <NavLink to='/sign-out/' className='nav-link'>Sign Out</NavLink>
  </>
)

const tutorOptions = (
  <>
    <NavLink to='/courses/' className='nav-link'>Courses</NavLink>
    <NavLink to='/change-password/' className='nav-link'>Change Password</NavLink>
    <NavLink to='/profile/' className='nav-link'>Profile</NavLink>
    <NavLink to='/sign-out/' className='nav-link'>Sign Out</NavLink>
  </>
)

const studentOptions = (
  <>
    <NavLink to='/courses/' className='nav-link'>Find A Course</NavLink>
    <NavLink to='/courses/enrolled/' className='nav-link'>Your Courses</NavLink>
    <NavLink to='/change-password/' className='nav-link'>Change Password</NavLink>
    <NavLink to='/profile/' className='nav-link'>Profile</NavLink>
    <NavLink to='/sign-out/' className='nav-link'>Sign Out</NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink to='/sign-up/' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in/' className='nav-link'>Sign In</NavLink>
  </>
)

const alwaysOptions = (
  <>
    <NavLink to='/' className='nav-link'>Home</NavLink>
  </>
)

const Header = ({ user, userType }) => (
  <Navbar bg='primary' variant='dark' expand='md'>
    <Container>
      <Navbar.Brand>
        <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>
E-Learning
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          {user && (
            <span className='navbar-text me-2'>Welcome, {user.email}({userType})</span>
          )}
          {alwaysOptions}
          {userType === 'Student' ? studentOptions : userType === 'Tutor' ? tutorOptions : userType === 'Author' ? authorOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
