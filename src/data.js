const promtCode = {
  requestCode: `import axios from 'axios'
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

export default authFetch`,
  responseCode: `import axios from 'axios'
const authFetch = axios.create({
  baseURL: 'https://course-api.com',
})

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
export default authFetch`,
  interceptFun: `IntersaptorAxios() {
  const fetchInter = async () => {
    try {
      const resp1 = await authFetch('/react-store-products')
    } catch (error) {
      console.log(error)
    }
  }
  React.useEffect(() => {
    fetchInter()
  }, [])

`,
}
const text = {
  interceptText: {
    title: 'Interceptors in Axios:',
    info: ` Interceptors in Axios are mechanisms that allow you to intercept and
          manipulate HTTP requests and responses globally across your
          application. Axios provides two types of interceptors: request
          interceptors and response interceptors. Here's what you need to know
          about each:`,
  },
  requestText: {
    title: 'Request Interceptors:',
    info: ` Request interceptors are used to modify requests before they are sent
          to the server. They offer the following benefits:`,
  },
  responseText: {
    title: 'Response Interceptors:',
    info: ` Response interceptors, on the other hand, allow you to intercept and
          process responses before they are handed over to your application.
          They offer the following advantages:`,
  },
}
export { promtCode, text }
