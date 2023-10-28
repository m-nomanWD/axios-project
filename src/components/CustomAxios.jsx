import React from 'react'
import authFetch from '../axios/custom'
import axios from 'axios'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
export default function CustomAxios() {
  try {
    const resp1 = authFetch('/react-store-products')
    const resp2 = axios('https://randomuser.me/api')
  } catch (error) {}
  return (
    <div>
      <h1>Custom Instance</h1>{' '}
      <div className='code-container'>
        <header className='code-topbar'>
          <span>Code Promet </span> <span>custom.js</span>
        </header>
        <SyntaxHighlighter
          className='code-prompt'
          language='javascript'
          style={atomDark}
        >
          {` import axios from 'axios'
const authFetch = axios.create({
  baseURL: 'https://course-api.com',
  headers: {
    Accepts: 'application/json',
  },
})
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
          {`   try {
    const resp1 = authFetch('/react-store-products')
    const resp2 = axios('https://randomuser.me/api')
  } catch (error) {}
`}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
