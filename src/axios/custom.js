import axios from 'axios'
const authFetch = axios.create({
  baseURL: 'https://course-api.com',
  headers: {
    Accepts: 'application/json',
  },
})
export default authFetch
