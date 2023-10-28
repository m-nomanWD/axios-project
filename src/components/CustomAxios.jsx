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
      <h1>Custom Instance</h1>
      <article>
        <h2>Custom Instances in Axios:</h2>
        <p>
          Custom instances in Axios are a way to create specialized instances of
          the Axios client with unique configurations tailored to specific use
          cases. With custom instances, you can:
        </p>
      </article>
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
      <article>
        <h2>Isolate Configurations</h2>
        <p>
          Custom instances allow you to isolate and customize the configuration
          options, such as base URLs, headers, and timeout settings, for a
          particular part of your application. This means you can have different
          instances with distinct settings for different parts of your
          application.
        </p>
      </article>
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
