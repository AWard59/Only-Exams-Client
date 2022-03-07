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

// export const getCourseById = (user, id) => {
//   return axios.get(apiUrl + `/courses/${id}/`, {
//     headers: {
//       Authorization: `Token ${user.token}`
//     }
//   })
// }

// export const editCourse = (user, id, name, description) => {
//   return axios.patch(
//     apiUrl + `/courses/${id}/`,
//     {
//       course: {
//         name,
//         description
//       }
//     },
//     {
//       headers: {
//         Authorization: `Token ${user.token}`
//       }
//     }
//   )
// }

// export const deleteCourse = (user, id) => {
//   return axios.delete(apiUrl + `/courses/${id}/`, {
//     headers: {
//       Authorization: `Token ${user.token}`
//     }
//   })
// }
