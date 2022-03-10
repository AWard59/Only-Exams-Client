import apiUrl from '../apiConfig'
import axios from 'axios'

export const profileUpdate = (firstName, lastName, user) => {
  return axios.patch(
    apiUrl + '/profile/',
    {
      userData: {
        firstName,
        lastName
      }
    },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}

export const profileView = (user) => {
  return axios.get(
    apiUrl + '/profile/',
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}

export const getTutors = (user) => {
  return axios.get(
    apiUrl + '/tutors/',
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}
