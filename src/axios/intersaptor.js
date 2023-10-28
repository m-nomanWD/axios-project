import axios from 'axios'
const authFetch = axios.create({
  baseURL: 'https://course-api.com',
})
authFetch.interceptors.request.use(
  (request) => {
    request.headers['Accept'] = 'application/json'
    console.log(request)
    return request
  },
  (error) => {
    Promise.reject(error)
  }
)
authFetch.interceptors.response.use(
  (response) => {
    console.log(response)
    return response
  },
  (error) => {
    if (error.response.status === 404) {
      console.log('not found')
    }
    return Promise.reject(error)
  }
)
export default authFetch
