import apiUrl from '../apiConfig'
import axios from 'axios'

export const createCourse = (formData, config) => {
  return axios.post(`${apiUrl}/courses/create/`, formData, config)
}

export const getCourses = (user) => {
  return axios.get(apiUrl + '/courses/', {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const getCoursesStudent = (user) => {
  return axios.get(apiUrl + '/courses/available/', {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const getCoursesTutor = (user) => {
  return axios.get(apiUrl + '/courses/assigned/', {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const getCourseById = (user, id) => {
  return axios.get(apiUrl + `/courses/${id}/`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const getCourseByIdStudent = (user, id) => {
  return axios.get(apiUrl + `/courses/${id}/view/`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const editCourse = (user, id, name, description) => {
  return axios.patch(
    apiUrl + `/courses/${id}/`, {
      course: {
        name,
        description
      }
    }, {
      headers: {
        Authorization: `Token ${user.token}`
      }
    })
}

export const deleteCourse = (user, id) => {
  return axios.delete(apiUrl + `/courses/${id}/`, {
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const enrolCourse = (user, course) => {
  return axios.post(
    apiUrl + `/courses/${course}/enrol/`,
    {
      enrol: {
        student: user.id,
        course
      }
    },
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}

export const getEnrolledCourses = (user) => {
  return axios.get(
    apiUrl + '/courses/enrolled/',
    {
      headers: {
        Authorization: `Token ${user.token}`
      }
    }
  )
}
