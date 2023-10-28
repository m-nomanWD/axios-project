import React from 'react'
import authFetch from '../axios/intersaptor'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function IntersaptorAxios() {
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
  return (
    <div>
      <h1>Intersaptor</h1>{' '}
      <div className='code-container'>
        <header className='code-topbar'>
          <span>Code Promet </span> <span>interceptor.js</span>
        </header>
        <SyntaxHighlighter
          className='code-prompt'
          language='javascript'
          style={atomDark}
        >
          {` import axios from 'axios'
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

`}
        </SyntaxHighlighter>
      </div>
      <div className='code-container'>
        <header className='code-topbar'>
          <span>Code Promet </span> <span>function</span>
        </header>
        <SyntaxHighlighter
          className='code-prompt'
          language='javascript'
          style={atomDark}
        >
          {` IntersaptorAxios() {
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

`}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
