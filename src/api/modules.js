import apiUrl from '../apiConfig'
import axios from 'axios'

export const createModule = (user, name, content, course) => {
  console.log(user, name, content, course)
  return axios.post(
    apiUrl + `/courses/${course}/modules/create/`, {
      module: {
        name,
        content,
        course
      }
    }, {
      headers: {
        Authorization: `Token ${user.token}`
      }
    })
}

export const getModules = (user, course) => {
  return axios.get(apiUrl + `/courses/${course}/modules/`,
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    })
}

export const getModuleById = (user, id, course) => {
  return axios.get(apiUrl + `/courses/:id/modules/${id}/`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const editModule = (user, id, name, content, course) => {
  return axios.patch(
    apiUrl + `/courses/${course}/modules/${id}/`,
    {
      module: {
        name,
        content
      }
    },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}

export const deleteModule = (user, id, course) => {
  return axios.delete(apiUrl + `/courses/${course}/modules/${id}/`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
