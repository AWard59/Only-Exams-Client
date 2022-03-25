import apiUrl from '../apiConfig'
import axios from 'axios'

export const createModule = (user, name, content, course) => {
  return axios.post(
    apiUrl + '/courses/modules/create/', {
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
  return axios.get(apiUrl + `/courses/modules/${id}/`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const editModule = (user, id, name, content, course) => {
  return axios.patch(
    apiUrl + `/courses/modules/${id}/`,
    {
      module: {
        course,
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

export const deleteModule = (user, id) => {
  return axios.delete(apiUrl + `/courses/modules/${id}/`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const completeModule = (user, module) => {
  return axios.post(
    apiUrl + `/courses/modules/${module}/complete/`,
    {
      complete: {
        module_complete: module,
        student: user.id
      }
    },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}

export const getCompleteModules = (user, course) => {
  return axios.get(apiUrl + `/courses/${course}/modules/completed/`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
